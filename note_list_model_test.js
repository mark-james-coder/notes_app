console.log("inside note list model test");

(function(exports) {
  function testStoresAnArrayOfNoteModels() {
    var note_list = new Note_list();

    if (!Array.isArray(note_list.notes)) {
      throw new Error("note list does not hold an array");
    }
  };

  testStoresAnArrayOfNoteModels();
})(this);