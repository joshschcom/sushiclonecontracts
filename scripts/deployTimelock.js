const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Timelock = await ethers.getContractFactory("Timelock");
  const timelock = await Timelock.deploy(
    adminAddress, // Admin address
    delay // Delay time in seconds
  );
  console.log(`Timelock address: ${timelock.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
