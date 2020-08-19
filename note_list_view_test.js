console.log("inside note list view test");

function testReturnsHTMLStringWhenNoteListModelHasOneNote() {
  var note_list = new Note_list;
  note_list.create_note("Name: Mike");
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div>Name: Mike</div></li></ul>");
};

function testReturnsHTMLStringWhenNoteListModelHasTwoNotes() {
  var note_list = new Note_list;
  note_list.create_note("Name: Mike");
  note_list.create_note("Name: John");
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div>Name: Mike</div></li><li><div>Name: John</div></li></ul>");
};

function testReturnsHTMLStringWhenNoteListModelHasNoNotes() {
  var note_list = new Note_list;
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div></div></li></ul>");
};


testReturnsHTMLStringWhenNoteListModelHasOneNote();
testReturnsHTMLStringWhenNoteListModelHasTwoNotes();
testReturnsHTMLStringWhenNoteListModelHasNoNotes();
