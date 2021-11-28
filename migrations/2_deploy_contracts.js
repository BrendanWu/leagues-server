const data = require("../src/basketballdata.js");
const Playground = artifacts.require("Playground");

module.exports = async (deployer) => {
    await deployer.deploy(Playground);
    const playground = await Playground.deployed();

    data.map((item) => {
        playground.addData(item.title, item.description, item.website, item.imageUrl);
    });
}