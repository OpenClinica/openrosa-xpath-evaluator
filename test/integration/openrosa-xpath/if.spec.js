describe('#if()', () => {
  it('should return first option if true', () => {
    assertString('if(true(), "a", "b")', 'a');
    assertString('if(true(), 5, "abc")', 5);
  });

  it('should return second option if false', () => {
    assertString('if(false(), "a", "b")', 'b');
    assertString('if(false(), 5, "abc")', 'abc');
    assertString('if(6 > 7, 5, "abc")', 'abc');
    assertString('if("", 5, "abc")', "abc" );
  });

  it('should evaluate node', () => {
    initDoc(`
      <div id="FunctionChecklistCase">
        <div id="FunctionChecklistCaseNo">no</div>
        <div id="FunctionChecklistCaseEmpty"></div>
        <div id="FunctionChecklistCase0">0</div>
      </div>`);

    let node = doc.getElementById('FunctionChecklistCaseEmpty');
    assertString(node, null, "if(self::node(), 'exists', 'does not exist')", 'exists');
    node = doc.getElementById('FunctionChecklistCaseDoesNotExist');
    assertString(node, null, "if(self::node(), 'exists', 'does not exist')", 'does not exist');
  });
});
