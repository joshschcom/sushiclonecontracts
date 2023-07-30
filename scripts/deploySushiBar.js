const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const SushiBar = await ethers.getContractFactory("SushiBar");
  const sushiBar = await SushiBar.deploy(
    sushiTokenAddress // SushiToken address
  );
  console.log(`SushiBar address: ${sushiBar.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
