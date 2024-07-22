require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const SEPOLIA_KEY = process.env.SEPOLIA_KEY;
const PRIVATE_KEY = process.env.WALLET_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${SEPOLIA_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
