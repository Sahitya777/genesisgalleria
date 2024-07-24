// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract GenesisGalleria is ERC721URIStorage, Ownable() {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address _owner;

    uint256 public mintingFee = 0.0001 ether;

    constructor() ERC721("GenesisGalleria", "GG"){
        _owner=msg.sender;
    }

    function mint(string memory tokenURI) payable public returns (uint256) {
        require(msg.value >= mintingFee, "GenesisGalleria: Insufficient minting fee");

        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function withdrawFunds() public onlyOwner {
      
        uint256 balance = address(this).balance;
        require(balance > 0, "GenesisGalleria: Balance is zero");
        
        payable(msg.sender).transfer(balance);
    }
}
