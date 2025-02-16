import { getAaveLikeSystemContracts } from '@dma-library/protocols/aave-like/utils'
import { FlashloanProvider } from '@dma-library/types'
import { WithMigrationStrategyDependencies } from '@dma-library/types/strategy-params'
import { encodeOperation } from '@dma-library/utils/operation'
import { getCurrentSparkPosition } from '@dma-library/views/spark'

import { migrate as sparkMigrate } from '../../../../operations/spark/migrate/migrate'
import { getAaveLikeAddresses, getAaveLikeApprovalTx } from '../helpers/aave-like'
import { MigrationArgs } from '../migrate'

export async function migrateSparkStrategy(
  dependencies: WithMigrationStrategyDependencies,
  args: MigrationArgs,
  sourceAddress: string,
  flashloanTokenAddress: string,
  operationExecutor: string,
) {
  const aaveLikeAddresses = getAaveLikeAddresses(dependencies.network, args.protocol)
  const currentPosition = await getCurrentSparkPosition(
    {
      collateralToken: args.collateralToken,
      proxy: sourceAddress,
      debtToken: args.debtToken,
    },
    {
      addresses: aaveLikeAddresses,
      provider: dependencies.provider,
    },
  )
  const { poolDataProvider: aaveLikePoolDataProvider } = await getAaveLikeSystemContracts(
    aaveLikeAddresses,
    dependencies.provider,
    'Spark',
  )

  const collateralReserveAaveData = await aaveLikePoolDataProvider.getReserveTokensAddresses(
    args.collateralToken.address,
  )
  const debtReserveAaveData = await aaveLikePoolDataProvider.getReserveTokensAddresses(
    args.debtToken.address,
  )

  const aTokenaddress = collateralReserveAaveData.spTokenAddress
  const variableDebtTokenAddress = debtReserveAaveData.variableDebtTokenAddress
  const flashloan = {
    provider: FlashloanProvider.Balancer,
    token: {
      address: flashloanTokenAddress,
      amount: currentPosition.collateral.amount,
    },
    // amount is deprecated
    amount: currentPosition.collateral.amount,
  }

  const operation = await sparkMigrate({
    aToken: { address: aTokenaddress, amount: currentPosition.collateral.amount },
    vdToken: { address: variableDebtTokenAddress },
    flashloan,
    debt: {
      address: args.debtToken.address,
      isEth: false,
    },
    addresses: aaveLikeAddresses,
    network: dependencies.network,
    positionType: 'Borrow',
    sourceAddress: sourceAddress,
    operationExecutor,
    erc20ProxyActions: dependencies.erc20ProxyActions,
  })
  return {
    migration: {
      simulation: {
        swaps: [],
        targetPosition: currentPosition,
        position: currentPosition,
      },
      tx: {
        to: dependencies.proxy,
        data: encodeOperation(operation, {
          provider: dependencies.provider,
          operationExecutor,
        }),
        value: '0x0',
      },
    },
    approval: getAaveLikeApprovalTx(args, currentPosition, aTokenaddress, dependencies),
  }
}
