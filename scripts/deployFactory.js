const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Deploy UniswapV2Factory contract
  const Factory = await ethers.getContractFactory("UniswapV2Factory");
  const factory = await Factory.deploy("0xF450B38cccFdcfAD2f98f7E4bB533151a2fB00E9", { gasLimit: 4000000 });

  // Wait for the contract to be mined
  await factory.deployed();

  // Save the contract address to a file
  fs.writeFileSync("factory-address.txt", factory.address);

  console.log("UniswapV2Factory deployed to:", factory.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
