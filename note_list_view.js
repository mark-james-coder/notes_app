console.log("inside note list view.js");


(function(exports) {
function Note_list_view(note_list_model) {
  this.note_list_model = note_list_model;
}
Note_list_view.prototype.note_list_html = function() {
  console.log(this.note_list_model);
  console.log(this.note_list_model.notes);
  var array = [];
  this.note_list_model.get_notes().forEach(note => array.push(note.get_text()));
  // var array = this.note_list_model.get_notes().map(note => note.get_text());
  return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
};
exports.Note_list_view = Note_list_view;
})(this);
