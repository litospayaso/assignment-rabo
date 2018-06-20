const assert = require('assert');
const expect = require('chai').expect;
const description = require('../validators/description.js');

describe('Description', function() {
  describe('Fail when description is empty', function() {
    it('no description', function() {
        expect(description('')).to.not.be.true;
    });
  });
});