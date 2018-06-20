const assert = require('assert');
const expect = require('chai').expect;
const validateRecord = require('../validators/validateRecord.js');

const validRecord = {
  transactionReference: '1234142',
  accountNumber: 'NL69ABNA0433647324',
  description: 'dummy transaction',
  startBalance: '22.5',
  mutation: '+20.5',
  endBalance: '43',
};

const invalidRecord = {
  transactionReference: '1234142',
  accountNumber: 'NL69ABNA0433647324',
  description: 'dummy transaction',
  startBalance: '22.5',
  mutation: '+20.5',
  endBalance: '50',
};

describe('validateRecord', function() {
  describe('Fail with incorrect record', function() {
    it('characters in number', function() {
        expect(validateRecord(invalidRecord)).to.not.be.true;
    });
  });
  describe('Works with a correct record', function() {
    it('normal number', function() {
        expect(validateRecord(validRecord)).to.be.true;
    });
  });
});