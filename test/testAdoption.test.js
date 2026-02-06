const Adoption = artifacts.require("Adoption");

contract("Adoption", (accounts) => {
  let adoption;
  let adopter;
  const expectedPetId = 8;
  before(async () => {
    adoption = await Adoption.deployed();
  });
  describe("adopting a pet and retrieving account addresses", async () => {
    before(async () => {
      await adoption.adopt(expectedPetId, { from: accounts[0] });
      adopter = accounts[0];
    });
    it("can fetch the address of an adopted pet's owner", async()=>{
      const adopters = await adoption.getAdopters();
      assert.equal(adopters[expectedPetId], adopter,"the owner of the adopted pet should be recorded");
    })
  });
});
