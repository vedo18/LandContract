const Land = artifacts.require("LandContract");

module.exports = function (deployer) {
  deployer.deploy(Land);
};
