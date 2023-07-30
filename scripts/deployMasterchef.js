const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const SushiToken = await ethers.getContractFactory("SushiToken");
  const sushiToken = await SushiToken.deploy();

  console.log(`SushiToken address: ${sushiToken.address}`);

  const MasterChef = await ethers.getContractFactory("MasterChef");
  const masterChef = await MasterChef.deploy(
    sushiToken.address, // SushiToken address
    "0xF450B38cccFdcfAD2f98f7E4bB533151a2fB00E9", // DevAddress
    ethers.utils.parseEther("1"), // SushiPerBlock, dont forget when verifying that you have to pass it in, in wei!
    "0", // StartBlock
    "100" // Ending block number for the bonus period
  );

  console.log(`MasterChef address: ${masterChef.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
