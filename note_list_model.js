console.log("inside note list model.js");


  (function(exports) {
  function Note_list() {
    this.notes = []
  };
  Note_list.prototype.create_note = function(text) {
    var note = new Note(text);
    this.notes.push(note)
  }
  Note_list.prototype.get_notes = function(text) {
    return this.notes
  }
  exports.Note_list = Note_list;
})(this);
