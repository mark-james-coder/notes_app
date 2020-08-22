console.log("inside note list view.js");


(function(exports) {
function Note_list_view(note_list) {
  this.note_list = note_list;
}

Note_list_view.prototype.note_list_html = function() {
  console.log(this.note_list.get_notes());
  var array = this.note_list.get_notes().map(note => note.get_text().slice(0,20));
  console.log(this.note_list);
  console.log(array);
  return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
};
Note_list_view.prototype.note_url = function() {
  var array = this.note_list.get_notes();
  var noteURLs = array.map(note => `<a href='#notes/${note.id}'> ${note.get_text().slice(0,20)}</a>`);
  return "<ul><li><div>" + noteURLs.join("</div></li><li><div>") + "</div></li></ul>";
};

exports.Note_list_view = Note_list_view;
})(this);


// "<ul><li><div><a href='#notes/0'></div></li></ul>"

// /${note.id}
