import { Pool } from "./types";

export const ADDRESSES = {
  goerli: {
    AJNA_PROXY_ACTIONS: "0x64a1F45718704749AF9F9BBdA1f18608D1DE46f0",
    ERC20_POOL_FACTORY: "0xb54FE3ee12926e63FF4A5163766fb93eDbADd5f3",
    POOL_INFO_UTILS: "0x28ef92e694d1044917981837b21e5eA994931c71",
    POSITION_MANAGER: "0x31E3B448cAFF35e9eEb232053f4d5e76776a1C83",
    REWARD_MANAGER: "0x015441062c2aad707629D9A1f2029074F58ad5aE",
    GUARD: "0x9319710C25cdaDDD1766F0bDE40F1A4034C17c7e",
    SERVICE_REGISTRY: "0x5A5277B8c8a42e6d8Ab517483D7D59b4ca03dB7F",
  },
  mainnet: {
    AJNA_PROXY_ACTIONS: "0x0000000000000000000000000000000000000000",
    ERC20_POOL_FACTORY: "0x0000000000000000000000000000000000000000",
    POOL_INFO_UTILS: "0x0000000000000000000000000000000000000000",
    POSITION_MANAGER: "0x0000000000000000000000000000000000000000",
    REWARD_MANAGER: "0x0000000000000000000000000000000000000000",
    GUARD: "0x0000000000000000000000000000000000000000",
    SERVICE_REGISTRY: "0x0000000000000000000000000000000000000000",
  },
};
//TOKENS
export const TOKENS = {
  goerli: {
    WETH: "0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6",
    RETH: "0x62bc478ffc429161115a6e4090f819ce5c50a5d9",
    WSTETH: "0x6320cD32aA674d2898A68ec82e869385Fc5f7E2f",
    WBTC: "0x7ccF0411c7932B99FC3704d68575250F032e3bB7",
    USDC: "0x6Fb5ef893d44F4f88026430d82d4ef269543cB23",
    DAI: "0x11fE4B6AE13d2a6055C8D9cF65c55bac32B5d844",
    AJNA: "0xaadebCF61AA7Da0573b524DE57c67aDa797D46c5",
  },
  // TODO: update mainnet addresses
  mainnet: {
    WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    RETH: "0xae78736cd615f374d3085123a210448e74fc6393",
    WSTETH: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    AJNA: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
  },
};

export const POOLS: Pool[] = [
  { pair: "WBTC-USDC", amount: 5000, price: 20000, deposit: false },
  { pair: "WBTC-DAI", amount: 5000, price: 20000, deposit: false },
  { pair: "USDC-WBTC", amount: 1, price: 0.000030769, deposit: false },
  { pair: "WETH-USDC", amount: 5000, price: 1500, deposit: false },
  { pair: "WETH-DAI", amount: 5000, price: 1500, deposit: false },
  { pair: "USDC-WETH", amount: 1, price: 0.0005, deposit: false },
  { pair: "RETH-DAI", amount: 5000, price: 1500, deposit: false },
  { pair: "RETH-USDC", amount: 5000, price: 1500, deposit: false },
  { pair: "RETH-WETH", amount: 1, price: 1.07, deposit: false },
  { pair: "WSTETH-DAI", amount: 5000, price: 1500, deposit: false },
  { pair: "WSTETH-USDC", amount: 5000, price: 1500, deposit: false },
  { pair: "WSTETH-WETH", amount: 1, price: 1.09, deposit: false },
];

export const CONFIG = {
  initializeStakingRewards: false,
  deployPools: true,
  deployer: "0x0B5a3C04D1199283938fbe887A2C82C808aa89Fb",
};
