const chai = require('chai');
const expect = chai.expect;
const {
  trial
} = require('../game/index');
describe('start', () => {
  it('returns hello', () => {
    const actual = trial();
    const expected = 'hello';
    expect(actual).to.equal(expected);
  });
});

