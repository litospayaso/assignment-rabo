const assert = require('assert');
const expect = require('chai').expect;
const transactionReference = require('../validators/transactionReference.js');

describe('transactionReference', function() {
  describe('Fail when not correct format number', function() {
    it('characters in number', function() {
        expect(transactionReference('213a5')).to.be.false;
    });
    it('strange chars in number', function() {
        expect(transactionReference('321`2')).to.be.false;
    });
  });
  describe('Works with a correct number', function() {
    it('normal number', function() {
        expect(transactionReference('1312412')).to.be.true;
    });
  });
});