// SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.10;

struct Location {
    string longitude;
    string latitude;
}

struct Data {
    uint256 id;
    string title;
    string description;
    string website;
    string imageUrl;
    // string[] timings;
    // mapping(string => string) location;
}

contract Playground {
    Data[] public data;
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }

    function addData(string memory _title, string memory _description, string memory _website, string memory _imageUrl) public {
        uint256 counter = data.length;

        Data memory _data = Data(counter, _title, _description, _website, _imageUrl);
        data.push(_data);
    }

    function getData() public view returns(Data[] memory) {
        return data;
    }

    function getDataCount() public view returns(uint256) {
        return data.length;
    }
}
