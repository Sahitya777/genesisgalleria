const { ethers } = require('hardhat');

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  //console.log("Account balance:", (await deployer.getBalance()).toString());
  const contract = await ethers.getContractFactory('GenesisGalleria');
  const Contract = await contract.deploy();
  // console.log("Deploying contracts with the account:", deployer.address);

  // await Lottery.deployed();

  console.log(' Contract Deployed at ', Contract.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
