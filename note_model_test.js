console.log("inside note model test");

function testNoteHasAText() {
  var note = new Note("first note");
  assert.isTrue(note.text === 'first note');
};

function testNoteHasAText2() {
  var note = new Note("second note");
  assert.isTrue(note.text === 'second note');
};

  testNoteHasAText();
  testNoteHasAText2();


// function testNoteHasAText() {
//   var note = new Note();
//   assert.isTrue(note.text !== 'first note');
// };
//
// testNoteHasAText();
