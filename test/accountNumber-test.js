const assert = require('assert');
const expect = require('chai').expect;
const accountNumber = require('../validators/accountNumber.js');

describe('AccountNumber', function() {
  describe('Fail when IBAN is not correct', function() {
    it('All characters IBAN', function() {
        expect(accountNumber('AFJEOAEFNAOFCAE')).to.be.false;
    });
    it('All numbers IBAN', function() {
        expect(accountNumber('32190543180483109')).to.be.false;
    });
  });
  describe('Works with a correct IBAN', function() {
    it('All characters Iban', function() {
        expect(accountNumber('NL69ABNA0433647324')).to.be.true;
    });
  });
});