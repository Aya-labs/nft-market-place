const { deploy } = require("hardhat-deploy");
//const { getNamedAccounts } = require("hardhat");
//
//module.exports = async ({ ethers }) => {
//  const { deployer } = await getNamedAccounts();
//
//  await deploy("ArtToken", {
//    from: deployer,
//    log: true,
//  });
//
//  const token = await ethers.getContract("ArtToken");
//
//  await deploy("ArtMarketplace", {
//    from: deployer,
//    args: [token.address],
//    log: true,
//  });
//
//  const market = await ethers.getContract("ArtMarketplace");
//
//  await token.setMarketplace(market.address);
//
//  console.log("Contracts deployed successfully!");
//};


//const hre = require("hardhat");
//async function main() {
//    
//const ArtMarketplace= await hre.ethers.getContractFactory("ArtMarketplace");
//const artMarketplace = await ArtMarketplace.deploy(ArtToken);
////const artMarketplace= await ArtMarketplace.deploy();
//      await ArtMarketplace.deployed();
//
//  console.log(
//    `ArtMarketplace deployed to ${ArtMarketplace.address}`
//  );
//}
//
//// We recommend this pattern to be able to use async/await everywhere
//// and properly handle errors.
//main().catch((error) => {
//  console.error(error);
//  process.exitCode = 1;
//});
//


//const hre = require("hardhat");
//
//async function main() {
//  const ArtMarketplace = await hre.ethers.getContractFactory("ArtMarketplace");
//  const artTokenAddress = "0x58ac8884C423eae73CACEfd4eB79c9C5cf798220"; // Replace with the actual address of the deployed ArtToken contract
//  const artMarketplace = await ArtMarketplace.deploy(artTokenAddress);
//  await artMarketplace.deployed();
//
//  console.log(`ArtMarketplace deployed to ${artMarketplace.address}`);
//}
//
//main()
//  .then(() => process.exit(0))
//  .catch((error) => {
//    console.error(error);
//    process.exit(1);
//});



//const hre = require("hardhat");
//async function main() {
//    
//const ArtMarketplace= await hre.ethers.getContractFactory("ArtMarketplace");
//const artMarketplace= await ArtMarketplace.deploy();
//      await ArtMarketplace.deployed();
//
//  console.log(
//    `ArtMarketplace deployed to ${ArtMarketplace.address}`
//  );
//  const token = await hre.ethers.getContractFactory("ArtToken");
//  await deploy("ArtMarketplace",{
//    from: deploy,
//    args: [token.address],
//    log: true,
//  })
//}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
//main().catch((error) => {
//  console.error(error);
//  process.exitCode = 1;
//});




















// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
//const hre = require("hardhat");
//
//async function main() {
//  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//  const unlockTime = currentTimestampInSeconds + 60;
//
//  const lockedAmount = hre.ethers.utils.parseEther("0.001");
//
//  const Lock = await hre.ethers.getContractFactory("Lock");
//  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
//
//  await lock.deployed();
//
//  console.log(
//    `Lock with ${ethers.utils.formatEther(
//      lockedAmount
//    )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
//  );
//}
//
//// We recommend this pattern to be able to use async/await everywhere
//// and properly handle errors.
//main().catch((error) => {
//  console.error(error);
//  process.exitCode = 1;
//});
//
//ArtToken deployed to: 0x350792765fFE42fE4874C0191F9308A4fB7ecf47
//ArtMarketplace deployed to: 0xa93C5b64B177EFCd6Ca47E65F6B6397bB03a06db
const { ethers } = require("hardhat");

async function main() {
  const ArtToken = await ethers.getContractFactory("ArtToken");
  const artToken = await ArtToken.deploy();
  await artToken.deployed();

  console.log("ArtToken deployed to:", artToken.address);

  const ArtMarketplace = await ethers.getContractFactory("ArtMarketplace");
  const artMarketplace = await ArtMarketplace.deploy(artToken.address);
  await artMarketplace.deployed();

  console.log("ArtMarketplace deployed to:", artMarketplace.address);

  // Set the marketplace address in the ArtToken contract
  await artToken.setMarketplace(artMarketplace.address);

  console.log("Marketplace address set in ArtToken contract");

  console.log("Deployment completed!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
