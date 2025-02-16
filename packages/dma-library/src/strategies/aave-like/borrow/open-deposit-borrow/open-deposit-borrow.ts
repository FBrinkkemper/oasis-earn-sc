import { CollectFeeFrom } from '@dma-common/types'
import { BorrowArgs, DepositArgs } from '@dma-library/operations'
import { resolveAaveLikeBorrowOperations } from '@dma-library/operations/aave-like'
import * as AaveCommon from '@dma-library/strategies/aave/common'
import { getAaveTokenAddress } from '@dma-library/strategies/aave/common'
import { resolveCurrentPositionForProtocol } from '@dma-library/strategies/aave-like/common'
import { IOperation } from '@dma-library/types'
import * as SwapUtils from '@dma-library/utils/swap'
import { IPosition } from '@domain'

import { AaveLikeOpenDepositBorrow, AaveLikeOpenDepositBorrowDependencies } from './types'

export const openDepositBorrow: AaveLikeOpenDepositBorrow = async (args, dependencies) => {
  const {
    collateralToken,
    debtToken,
    entryToken,
    slippage,
    amountCollateralToDepositInBaseUnit: depositAmount,
    amountDebtToBorrowInBaseUnit: borrowAmount,
  } = args

  const currentPosition = await resolveCurrentPositionForProtocol(args, dependencies)
  const entryTokenAddress = getAaveTokenAddress(entryToken, dependencies.addresses)
  const collateralTokenAddress = getAaveTokenAddress(collateralToken, dependencies.addresses)

  const isSwapNeeded = SwapUtils.getIsSwapNeeded(
    entryTokenAddress,
    collateralTokenAddress,
    dependencies.addresses.tokens.ETH,
    dependencies.addresses.tokens.WETH,
  )

  const alwaysReturnDepositArgs = true
  const deposit = await AaveCommon.buildDepositArgs(
    entryToken,
    collateralToken,
    collateralTokenAddress,
    depositAmount,
    slippage,
    dependencies,
    alwaysReturnDepositArgs,
  )

  const alwaysReturnBorrowArgs = true
  const borrow = await AaveCommon.buildBorrowArgs(
    borrowAmount,
    debtToken,
    dependencies,
    alwaysReturnBorrowArgs,
  )

  if (!deposit.args) throw new Error('Deposit args must be defined when opening position')
  if (!borrow.args) throw new Error('Borrow args must be defined when opening position')
  const operation = await buildOperation(deposit.args, borrow.args, dependencies)

  const finalPosition: IPosition = currentPosition
    .deposit(deposit.collateralDelta)
    .borrow(borrow.debtDelta)

  const transaction = AaveCommon.buildTransaction(operation)
  const simulation = AaveCommon.buildSimulation(
    borrow.debtDelta,
    deposit.collateralDelta,
    finalPosition,
  )

  const collectFeeFrom: CollectFeeFrom = 'sourceToken'
  if (isSwapNeeded) {
    if (!deposit.swap) {
      throw new Error('Swap data is missing')
    }

    return {
      transaction,
      simulation: {
        ...simulation,
        swap: AaveCommon.buildSwap(deposit.swap, entryToken, collateralToken, collectFeeFrom),
      },
    }
  }

  return {
    transaction,
    simulation,
  }
}

async function buildOperation(
  depositArgs: DepositArgs,
  borrowArgs: BorrowArgs,
  dependencies: AaveLikeOpenDepositBorrowDependencies,
): Promise<IOperation> {
  const positionType = dependencies.positionType
  const aaveLikeBorrowOperations = resolveAaveLikeBorrowOperations(
    dependencies.protocolType,
    positionType,
  )

  return aaveLikeBorrowOperations.openDepositBorrow(
    depositArgs,
    borrowArgs,
    {
      positionType: dependencies.positionType,
      protocol: dependencies.protocolType,
    },
    dependencies.addresses,
    dependencies.network,
  )
}
