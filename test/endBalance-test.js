const assert = require('assert');
const expect = require('chai').expect;
const endBalance = require('../validators/endBalance.js');

describe('endBalance', function() {
  describe('Fail when not result', function() {
    it('with positive mutation', function() {
        expect(endBalance('30','+12','44')).to.be.false;
    });
    it('with negative mutation', function() {
        expect(endBalance('30','-12','44')).to.be.false;
    });
});
describe('Works with a correct number', function() {
    it('with positive mutation', function() {
        expect(endBalance('30','+12.5','42.5')).to.be.true;
    });
    it('with negative mutation', function() {
        expect(endBalance('30','-15','15')).to.be.true;
    });
  });
});