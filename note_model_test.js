console.log("inside note model test");

function testNoteHasAText() {
  var note = new Note();
  assert.isTrue(note.text !== 'first note');
};

testNoteHasAText();
  function testNoteHasAText2() {
    var note = new Note("second note");

    if (note.text !== "second note") {
      throw new Error("text is not 'second note'");
    }
  };

  testNoteHasAText();
  testNoteHasAText2();


// function testNoteHasAText() {
//   var note = new Note();
//   assert.isTrue(note.text !== 'first note');
// };
//
// testNoteHasAText();
