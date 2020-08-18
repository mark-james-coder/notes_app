console.log("inside note model test");

function testNoteHasAText() {
  var note = new Note("first note");
  assert.isTrue(note.text === 'first note');
};

function testReturnsNoteText() {
  var note = new Note("third note");
  assert.isTrue(note.get_text() === 'third note');
};

  testNoteHasAText();
  testReturnsNoteText();


// function testNoteHasAText() {
//   var note = new Note();
//   assert.isTrue(note.text !== 'first note');
// };
//
// testNoteHasAText();
