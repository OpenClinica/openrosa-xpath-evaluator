describe('#random()', () => {
  it('should return a number', () => {
    var vals = [];
    _.times(10, () => {
      // when
      var val = xEval('random()').numberValue;

      // then
      assert.typeOf(val, 'number');

      vals.push(val);
    });

    // check the numbers are a bit random
    assert.equal(_.uniq(vals).length, vals.length);
  });

  // TODO travis AssertionError: expected 0.86538089277131 to match /0\.[0-9]{15}/
  xit('random()', () => {
    assert.match(xEval('random()').numberValue, /0\.[0-9]{15}/);
  });
});
