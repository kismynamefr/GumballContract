require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },
  networks: {
    ether: {
      url: "https://mainnet.infura.io/v3/d14e06acb49a43bcbd4227f8d059b3a2",
      accounts: [`556681d5e5e87e8df8b24829bb45d1cd401b20b3c5f622395484a270c6f3f599`],
    },
    bsc: {
      url: "https://bsc-testnet.publicnode.com",
      accounts: [`13eb637ed8233bb28a7163738bde1a85d4b17d8dafc743372f81a3680076d270`],
    }
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
