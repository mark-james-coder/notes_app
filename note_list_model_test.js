console.log("inside note list model test");

function testStoresAnArrayOfNoteModels() {
  var note_list = new Note_list();
  assert.isTrue(Array.isArray(note_list.notes));
};

function testStoresNote() {
  var note_list = new Note_list();
  note_list.create_note("Test note1")
  assert.isTrue(note_list.notes.length === 1);
  assert.isTrue(note_list.get_notes()[0].get_text() === "Test note1")
};

function testReturnNotes() {
  var note_list = new Note_list();
  note_list.create_note("Test note2")
  assert.isTrue(note_list.get_notes()[0].get_text() === "Test note2")
}

testStoresAnArrayOfNoteModels();
testStoresNote();
testReturnNotes();

// (function(exports) {
//   function testStoresAnArrayOfNoteModels() {
//     var note_list = new Note_list();
//
//     if (!Array.isArray(note_list.notes)) {
//       throw new Error("note list does not hold an array");
//     }
//   };
//
// function testCreatesInstanceOfNote() {
//   var note_list = new Note_list();
//   assert.isTrue(note_list.create_note() instanceof Note);
// };
