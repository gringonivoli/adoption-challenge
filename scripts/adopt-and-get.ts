import { ethers } from "hardhat";

const CONTRACT_ADDRESS = '';
const API_URL = '';
const PRIVATE_KEY = '';

const provider = new ethers.providers.JsonRpcProvider(API_URL);
const abi = require("../artifacts/contracts/Adoption.sol/Adoption.json").abi;
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);
const adoptionContract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet);


const main = async () => {
    // adopt a pet
    const adoptTxResponse = await adoptionContract.adopt(5);
    await adoptTxResponse.wait();

    // get adopter of pet 5
    const adopter = await adoptionContract.getAdopterOf(5);
    console.log(adopter);
}

main();
