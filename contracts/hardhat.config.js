require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.WALLET_KEY;

module.exports = {
  solidity: "0.8.24",
  networks: {
    amoy: {
      url: `https://polygon-amoy.g.alchemy.com/v2/${API_KEY}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
