const DaiToken = artifacts.require("DaiToken");
const DappToken = artifacts.require("DappToken");
const TokenFarm = artifacts.require("TokenFarm");

require("chai")
  .use(require("chai-as-promised"))
  .should();

contract("TokenFarm", (accounts) => {
  let daiToken;
  before(async () => {
    daiToken = await DaiToken.new();
  });

  describe("Mock DAI Deployment", async () => {
    it("has a name", async () => {
      const name = daiToken.name();
      assert.equal(name, "Mock DAI Token");
    });
  });
});
