const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Migrator = await ethers.getContractFactory("Migrator");
  const migrator = await Migrator.deploy(
    masterChefAddress, // MasterChef address
    uniswapFactoryAddress, // Uniswap Factory address
    sushiMakerAddress // SushiMaker address
  );
  console.log(`Migrator address: ${migrator.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
