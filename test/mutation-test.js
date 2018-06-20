const assert = require('assert');
const expect = require('chai').expect;
const mutation = require('../validators/mutation.js');

describe('mutation', function() {
  describe('Fail when not correct format number', function() {
    it('not sign in number', function() {
        expect(mutation('213.2')).to.be.false;
    });
    it('mutation with strange chars', function() {
        expect(mutation('+a14')).to.be.false;
    });
  });
  describe('Works with a correct number', function() {
    it('positive mutation', function() {
        expect(mutation('+34.5')).to.be.true;
    });
    it('negative mutation', function() {
        expect(mutation('-12')).to.be.true;
    });
  });
});