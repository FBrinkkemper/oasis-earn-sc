import { Pool } from "./types";

export const ADDRESSES = {
  // Ajna rc 13
  goerli: {
    AJNA_PROXY_ACTIONS: "0x5bEDD64d9f5ae046ca42c29FCD815ff73E96bCC5",
    ERC20_POOL_FACTORY: "0xDB61f8aD0B3ed0c5522b8FE71b80023fe9188e9e",
    POOL_INFO_UTILS: "0xdE8D83e069F552fbf3EE5bF04E8C4fa53a097ee5",
    POSITION_MANAGER: "0x7b6C6917ACA28BA790837d41e5aA4A49c9Ad4570",
    REWARD_MANAGER: "0x0000000000000000000000000000000000000000",
    GUARD: "0x9319710C25cdaDDD1766F0bDE40F1A4034C17c7e",
    SERVICE_REGISTRY: "0x5A5277B8c8a42e6d8Ab517483D7D59b4ca03dB7F",
  },
  // Ajna rc 13
  mainnet: {
    AJNA_PROXY_ACTIONS: "0x3637DF43F938b05A71bb828f13D9f14498E6883c",
    ERC20_POOL_FACTORY: "0x6146DD43C5622bB6D12A5240ab9CF4de14eDC625",
    POOL_INFO_UTILS: "0x30c5eF2997d6a882DE52c4ec01B6D0a5e5B4fAAE",
    POSITION_MANAGER: "0x87B0F458d8F1ACD28A83A748bFFbE24bD6B701B1",
    REWARD_MANAGER: "0x0000000000000000000000000000000000000000",
    GUARD: "0xCe91349d2A4577BBd0fC91Fe6019600e047f2847",
    SERVICE_REGISTRY: "0x5e81a7515f956ab642eb698821a449fe8fe7498e",
  },
  // Ajna rc 13
  base: {
    AJNA_PROXY_ACTIONS: "0x099708408aDb18F6D49013c88F3b1Bb514cC616F",
    ERC20_POOL_FACTORY: "0x214f62B5836D83f3D6c4f71F174209097B1A779C",
    POOL_INFO_UTILS: "0x97fa9b0909C238D170C1ab3B5c728A3a45BBEcBa",
    POSITION_MANAGER: "0x59710a4149A27585f1841b5783ac704a08274e64",
    REWARD_MANAGER: "0x0000000000000000000000000000000000000000",
    GUARD: "0x83c8BFfD11913f0e94C1C0B615fC2Fdb1B17A27e",
    SERVICE_REGISTRY: "0x0c1EDa5544EA63cf3d365912343161913a8f19Eb",
  },
  optimism: {
    AJNA_PROXY_ACTIONS: "0xb6E6e38ad9840b7ACAB968abBED5eEf7289BfB19",
    ERC20_POOL_FACTORY: "0x609C4e8804fafC07c96bE81A8a98d0AdCf2b7Dfa",
    POOL_INFO_UTILS: "0xdE6C8171b5b971F71C405631f4e0568ed8491aaC",
    POSITION_MANAGER: "0x72bF565f2BdA43294C6cC2BfE17C7FaE5258F819",
    REWARD_MANAGER: "0x0000000000000000000000000000000000000000",
    GUARD: "0x916411367fC2f0dc828790eA03CF317eC74E24E4",
    SERVICE_REGISTRY: "0x063E4242CD7C2421f67e21D7297c74bbDFEF7b0E",
  },
  arbitrum: {
    AJNA_PROXY_ACTIONS: "0x0BAF223a3a240BB67D536bdC6bcD2920de6be2fa",
    ERC20_POOL_FACTORY: "0xA3A1e968Bd6C578205E11256c8e6929f21742aAF",
    POOL_INFO_UTILS: "0x8a7F5aFb7E3c3fD1f3Cc9D874b454b6De11EBbC9",
    POSITION_MANAGER: "0x9A0BE971530Ed2B53597AC9155AC050ca1Bab7A3",
    REWARD_MANAGER: "0x0000000000000000000000000000000000000000",
    GUARD: "0x746a6f9Acb42bcB43C08C829A035DBa7Db9E7385",
    SERVICE_REGISTRY: "0xf22f17b1d2354b4f4f52e4d164e4eb5e1f0a6ba6",
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
    CBETH: "0x0000000000000000000000000000000000000000",
    AJNA: "0xaadebCF61AA7Da0573b524DE57c67aDa797D46c5",
    TBTC: "0x679874fbe6d4e7cc54a59e315ff1eb266686a937",
    GHO: "0x0000000000000000000000000000000000000000",
    SDAI: "0x0000000000000000000000000000000000000000",
  },
  mainnet: {
    WETH: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    RETH: "0xae78736cd615f374d3085123a210448e74fc6393",
    WSTETH: "0x7f39c581f595b53c5cb19bd0b3f8da6c935e2ca0",
    WBTC: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    DAI: "0x6b175474e89094c44da98b954eedeac495271d0f",
    CBETH: "0xbe9895146f7af43049ca1c1ae358b0541ea49704",
    AJNA: "0x9a96ec9b57fb64fbc60b423d1f4da7691bd35079",
    TBTC: "0x18084fbA666a33d37592fA2633fD49a74DD93a88",
    GHO: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",
    SDAI: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
  },
  base: {
    WETH: "0x4200000000000000000000000000000000000006",
    RETH: "0x0000000000000000000000000000000000000000",
    WSTETH: "0xc1cba3fcea344f92d9239c08c0568f6f2f0ee452",
    WBTC: "0x0000000000000000000000000000000000000000",
    USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    DAI: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    CBETH: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    AJNA: "0x0000000000000000000000000000000000000000",
    TBTC: "0x0000000000000000000000000000000000000000",
    GHO: "0x0000000000000000000000000000000000000000",
    SDAI: "0x0000000000000000000000000000000000000000",
  },
  optimism: {
    WETH: "0x4200000000000000000000000000000000000006",
    RETH: "0x9bcef72be871e61ed4fbbc7630889bee758eb81d",
    WSTETH: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
    WBTC: "0x68f180fcce6836688e9084f035309e29bf0a2095",
    USDC: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    DAI: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    CBETH: "0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2",
    AJNA: "0x0000000000000000000000000000000000000000",
    TBTC: "0x0000000000000000000000000000000000000000",
    GHO: "0x0000000000000000000000000000000000000000",
    SDAI: "0x0000000000000000000000000000000000000000",
    OP: "0x4200000000000000000000000000000000000042",
  },
  arbitrum: {
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    RETH: "0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8",
    WSTETH: "0x5979D7b546E38E414F7E9822514be443A4800529",
    WBTC: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    USDC: "0xaf88d065e77c8cc2239327c5edb3a432268e5831",
    DAI: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    CBETH: "0x0000000000000000000000000000000000000000",
    AJNA: "0x0000000000000000000000000000000000000000",
    TBTC: "0x0000000000000000000000000000000000000000",
    GHO: "0x0000000000000000000000000000000000000000",
    SDAI: "0x0000000000000000000000000000000000000000",
    ARB: "0x912ce59144191c1204e64559fe8253a0e49e6548",
  },
};

export const POOLS: Pool[] = [
  { pair: "RETH-DAI", amount: 5000, price: 1500, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "WBTC-DAI", amount: 5000, price: 20000, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "WSTETH-DAI", amount: 5000, price: 1500, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "WETH-USDC", amount: 5000, price: 1500, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "WBTC-USDC", amount: 5000, price: 20000, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "WSTETH-USDC", amount: 5000, price: 1500, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "USDC-WETH", amount: 1, price: 0.0005, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "USDC-WBTC", amount: 1, price: 0.000030769, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "WSTETH-WETH", amount: 1, price: 1.09, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "RETH-WETH", amount: 1, price: 1.07, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "OP-WETH", amount: 1, price: 0.0005, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "OP-USDC", amount: 1, price: 0.000030769, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "ARB-WETH", amount: 1, price: 0.0005, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "ARB-USDC", amount: 1, price: 0.000030769, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "SDAI-USDC", amount: 5000, price: 20000, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "WETH-DAI", amount: 5000, price: 1500, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "RETH-USDC", amount: 5000, price: 1500, deposit: false, deploy: true, rate: "50000000000000000" },
  { pair: "CBETH-WETH", amount: 1, price: 1.09, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "TBTC-WBTC", amount: 1, price: 1.01, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "TBTC-GHO", amount: 1, price: 1.01, deposit: false, deploy: true, rate: "40000000000000000" },
  { pair: "WETH-GHO", amount: 5000, price: 20000, deposit: false, deploy: true, rate: "50000000000000000" },
];

export const CONFIG = {
  initializeStakingRewards: false,
  deployPools: true,
  deployer: "0x8E78CC7089509B568a401f593F64B3074693d25E",
  logGasUsage: false,
};
