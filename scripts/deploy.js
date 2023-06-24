const hre = require("hardhat");

async function main() {
  const gumball = await hre.ethers.deployContract("GUMBALL");
  await gumball.waitForDeployment();
  console.log(
    `Deploy contract Gumball with deployed to ${gumball.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
