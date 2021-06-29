const expect = chai.expect;

describe("testing object properties of class Deck", () => {
  it('Should pass if object has cards property ',()=>{
      expect(newGame).to.have.property("cards");
  })
  it("Should throw error if it does not have cards", () => {
    expect(function () {
      newGame.cards;
    }).to.throw(Error);
  });
});
