import BigNumber from 'bignumber.js';
import { ethers } from 'ethers';

export async function sendTxFromAddress(
  tx: ethers.PopulatedTransaction,
  from: string,
  provider: ethers.providers.JsonRpcProvider,
): Promise<ethers.providers.TransactionReceipt> {
  const txToSend = {
    ...tx,
    value: `0x${new BigNumber(tx.value.toString()).toString(16)}`,
    from,
  };

  const txHash = await provider.send('eth_sendTransaction', [txToSend]);

  return provider.getTransactionReceipt(txHash);
}

export function throwOnRevertedTx(
  tx: ethers.providers.TransactionReceipt,
): ethers.providers.TransactionReceipt {
  if (tx.status === 0) {
    throw new Error(`Transaction ${tx.transactionHash} reverted`);
  }
  return tx;
}
