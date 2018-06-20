const assert = require('assert');
const expect = require('chai').expect;
const startBalance = require('../validators/startBalance.js');

describe('startBalance', function() {
  describe('Fail when not correct format number', function() {
    it('characters in number', function() {
        expect(startBalance('213a5')).to.be.false;
    });
    it('strange chars in number', function() {
        expect(startBalance('321`2')).to.be.false;
    });
  });
  describe('Works with a correct number', function() {
    it('normal number', function() {
        expect(startBalance('1312412')).to.be.true;
    });
  });
});