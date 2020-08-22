console.log("inside note list view test");

function testReturnsHTMLStringWhenNoteListModelHasOneNote() {
  var note_list = new Note_list;
  note_list.add_note("Name: Mike");
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div>Name: Mike</div></li></ul>", 'testReturnsHTMLStringWhenNoteListModelHasOneNote');
};

function testReturnsHTMLStringWhenNoteListModelHasTwoNotes() {
  var note_list = new Note_list;
  note_list.add_note("Name: Mike");
  note_list.add_note("Name: John");
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div>Name: Mike</div></li><li><div>Name: John</div></li></ul>", 'testReturnsHTMLStringWhenNoteListModelHasTwoNotes');
};

function testReturnsHTMLStringWhenNoteListModelHasNoNotes() {
  var note_list = new Note_list;
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div></div></li></ul>", 'testReturnsHTMLStringWhenNoteListModelHasNoNotes');
};

function testShowFirst20CharactersOfNote() {
  var note_list = new Note_list;
  note_list.add_note("The Elephant in the room");
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_list_html() === "<ul><li><div>The Elephant in the </div></li></ul>", 'testShowFirst20CharactersOfNote');
};

function testReturnsURLForEachNote() {
  var note_list = new Note_list;
  note_list.add_note("Name: Mike");
  note_list.notes[0].id = 0;
  var note_list_view = new Note_list_view(note_list);
  assert.isTrue(note_list_view.note_url() === `<ul><li><div><a href='#notes/0'> Name: Mike</a></div></li></ul>`, 'testReturnsURLForEachNote');
};


testReturnsHTMLStringWhenNoteListModelHasOneNote();
testReturnsHTMLStringWhenNoteListModelHasTwoNotes();
testReturnsHTMLStringWhenNoteListModelHasNoNotes();
testShowFirst20CharactersOfNote();
testReturnsURLForEachNote();
