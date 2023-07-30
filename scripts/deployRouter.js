const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
  // Deploy UniswapV2Router02 contract
  const Router = await ethers.getContractFactory("UniswapV2Router02");
  const router = await Router.deploy(
    "0xA14CB03507a29ce3167EC83998050AE9237aD16A", //Factory
    "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889", //WETH
    { gasLimit: 4000000 }
  );

  // Wait for the contract to be mined
  await router.deployed();

  // Save the contract address to a file
  fs.writeFileSync("router-address.txt", router.address);

  console.log("UniswapV2Router02 deployed to:", router.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
