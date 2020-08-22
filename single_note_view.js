(function(exports) {
  this.single_note = new Note();
  function Single_note(note = single_note) {
    this.note = note
  }
  Single_note.prototype.returnHTML = function() {
    return "<ul><li><div>" + this.note.get_text() + "</div></li></ul>";
  }
  exports.Single_note = Single_note;
})(this);
