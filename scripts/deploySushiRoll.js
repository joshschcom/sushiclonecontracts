const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SushiRoll = await ethers.getContractFactory("SushiRoll");
  const sushiRoll = await SushiRoll.deploy(
    oldFactoryAddress, // Old factory address
    factoryAddress // New factory address
  );
  console.log(`SushiRoll address: ${sushiRoll.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
