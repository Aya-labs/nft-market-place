const { expect } = require('chai');

describe('ArtToken', () => {
  let artToken;

  beforeEach(async () => {
    const ArtToken = await ethers.getContractFactory('ArtToken');
    artToken = await ArtToken.deploy();
    await artToken.deployed();
  });

  describe('deployment', () => {
    it('deploys successfully', async () => {
      const address = artToken.address;
      expect(address).to.not.equal(0x0);
      expect(address).to.not.equal('');
      expect(address).to.not.equal(null);
      expect(address).to.not.equal(undefined);
    });

    it('has a name', async () => {
      const name = await artToken.name();
      expect(name).to.equal('ArtToken');
    });

    it('has a symbol', async () => {
      const symbol = await artToken.symbol();
      expect(symbol).to.equal('ARTK');
    });
  });

  describe('indexing', () => {
    it('lists colors', async () => {
      // Mint 3 more tokens
      await artToken.mint('#5386E4');
      await artToken.mint('#FFFFFF');
      await artToken.mint('#000000');
  
      const totalSupply = await artToken.totalSupply();
      let result = [];
  
      for (let i = 1; i <= totalSupply; i++) {
        const tokenId = i.toString();
        const tokenURI = await artToken.tokenURI(tokenId);
        result.push(tokenURI);
      }
  
      const expected = ['#EC058E', '#5386E4', '#FFFFFF', '#000000'];
  
      // Debugging console logs
      console.log('result:', result);
      console.log('expected:', expected);
  
      expect(result).to.have.members(expected);
    });
  });
  

//  describe('minting', () => {
//    it('creates a new token', async () => {
//      const result = await artToken.mint('#EC058E');
//      const tokenId = result.value.toString();
//      const totalSupply = await artToken.totalSupply();
//      const item = await artToken.items(tokenId);
//      const owner = await artToken.ownerOf(tokenId);
//      const approvedAddress = await artToken.getApproved(tokenId);
//      console.log(approvedAddress);
//
//      // Success assertions
//      expect(tokenId).to.equal(totalSupply.toString(), 'id is correct');
//      expect(item.uri).to.equal('#EC058E', 'color is correct');
//      expect(item.creator).to.equal(owner, 'creator is correct');
//      // expect(approvedAddress).to.equal(market.address, 'approved address is correct');
//      expect(result.from).to.equal('0x0000000000000000000000000000000000000000', 'from is correct');
//      expect(result.to).to.equal(accounts[0], 'to is correct');
//    });
//  });

  describe('indexing', () => {
    it('lists colors', async () => {
      // Mint 3 more tokens
      await artToken.mint('#5386E4');
      await artToken.mint('#FFFFFF');
      await artToken.mint('#000000');

      const totalSupply = await artToken.totalSupply();
      let item;
      let result = [];

      for (let i = 1; i <= totalSupply; i++) {
        item = await artToken.items(i);
        result.push(item.uri);
      }

      const expected = ['#EC058E', '#5386E4', '#FFFFFF', '#000000'];
      expect(result).to.have.members(expected);
    });
  });
});
