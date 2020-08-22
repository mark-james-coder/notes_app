console.log("inside single note view test");

function testSingleNoteView() {
  var note = new Note("Favourite food: fish and chips");
  var single_note = new Single_note(note);
  assert.isTrue(single_note.returnHTML() === "<ul><li><div>Favourite food: fish and chips</div></li></ul>", 'testSingleNoteView')
};

testSingleNoteView();
