// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Adoption { 

	address[16] public adopters;

	function getAdopters() public view returns (address[16] memory) {
		return adopters;
	}

	function getAdopterOf(uint petId) public view returns (address) {
		return adopters[petId];
	}

	function adopt(uint petId) public returns (uint) {
		require(petId >= 0 && petId <= 15, "Invalid pet id");
		adopters[petId] = msg.sender;
		return petId;
	} 
}