const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SushiMaker = await ethers.getContractFactory("SushiMaker");
  const sushiMaker = await SushiMaker.deploy(
    factoryAddress, // Factory address
    barAddress, // SushiBar address
    sushiAddress // SushiToken address
  );
  console.log(`SushiMaker address: ${sushiMaker.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
