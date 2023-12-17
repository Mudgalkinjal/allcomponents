const chai = require('chai');
const expect = chai.expect

function add(a, b) {
    return a + b;
}

describe('My add function',() => {
    it('should add two numbers ', () => {
        const result = add(4, 5);
        expect(result).to.equal(9);
    })
})