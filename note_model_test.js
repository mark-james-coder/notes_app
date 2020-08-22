console.log("inside note model test");

function testNoteHasAText() {
  var note = new Note("test note");
  assert.isTrue(note.text === 'test note', 'testNoteHasAText');
};

function testReturnsNoteText() {
  var note = new Note("test note");
  assert.isTrue(note.get_text() === 'test note', 'testReturnsNoteText');
};

function testHasTestIDOfZero() {
  counter = 0
  var note = new Note("test note");
  assert.isTrue(note.get_id() === 0, 'testHasTestIDOfZero');
};

function testHasTestIDOfOne() {
  counter = 0
  var note1 = new Note("test note");
  var note2 = new Note("test note");
  assert.isTrue(note2.get_id() === 1, 'testHasTestIDOfOne');
};


  testNoteHasAText();
  testReturnsNoteText();
  testHasTestIDOfZero();
  testHasTestIDOfOne();


// function testNoteHasAText() {
//   var note = new Note();
//   assert.isTrue(note.text !== 'first note');
// };
//
// testNoteHasAText();
