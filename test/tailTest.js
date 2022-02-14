const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [1, 2, 3, 4, 5] for [0, 1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });

});

