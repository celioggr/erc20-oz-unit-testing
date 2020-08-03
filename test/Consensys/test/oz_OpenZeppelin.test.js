const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { expect } = require('chai');
const { ZERO_ADDRESS } = constants;

const {
  shouldBehaveLikeERC20,
  shouldBehaveLikeERC20Transfer,
  shouldBehaveLikeERC20Approve,
} = require('./ERC20.behavior');

const Consensys = artifacts.require('EIP20');

contract('Consensys', function ([_, initialHolder, recipient, anotherAccount]) {
  const initialSupply = new BN(100);

  beforeEach(async function () {
    this.token = await Consensys.new(100,"Consensys",10,"CSS",{'from':initialHolder});
    //this.token.transfer(initialHolder,100);
  });

  shouldBehaveLikeERC20('ERC20', initialSupply, initialHolder, recipient, anotherAccount);


  /*
  describe('_mintToken', function () {
    const amount = new BN(50);
    it('rejects a null account', async function () {
      await expectRevert(
        this.token.mintToken(ZERO_ADDRESS, amount), 'ERC20: mint to the zero address'
      );
    });

    describe('for a non zero account', function () {
      beforeEach('minting', async function () {
        const { logs } = await this.token.mintToken(recipient, amount);
        this.logs = logs;
      });

      it('increments totalSupply', async function () {
        const expectedSupply = initialSupply.add(amount);
        expect(await this.token.totalSupply()).to.be.bignumber.equal(expectedSupply);
      });

      it('increments recipient balance', async function () {
        expect(await this.token.balanceOf(recipient)).to.be.bignumber.equal(amount);
      });

      it('emits Transfer event', async function () {
        const event = expectEvent.inLogs(this.logs, 'Transfer', {
          from: ZERO_ADDRESS,
          to: recipient,
        });

        expect(event.args.value).to.be.bignumber.equal(amount);
      });
    });
  });
  */
});
