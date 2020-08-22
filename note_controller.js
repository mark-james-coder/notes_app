// function getAppDiv() {
//   document.getElementById("app").innerHTML = "howdy"
//   console.log()
// }
// getAppDiv()

// (function(exports) {
//   function Note_controller(note) {
//     this.note = note;
//   }
//   Note_controller.prototype.ReplaceElement = function() {
//     document.getElementById("app").innerHTML = "<ul><li><div>" + this.note + "</div></li></ul>"
//   }
//   exports.Note_controller = Note_controller;
// })(this);

console.log("inside note controller");

(function(exports) {
  // var default_note_list = new Note_list()
function Note_controller(note_list) {
  this.note_list = new Note_list();
  this.note_list.add_note("Favourite food: pesto");
  this.note_list.add_note("Favourite drink: water");
  this.note_list.add_note("Favourite season: summer");
  this.note_list_view = new Note_list_view(this.note_list);
}
Note_controller.prototype.insertHTMLIntoAppElement = function() {
  document.getElementById("app").innerHTML = this.note_list_view.note_list_html();
};
exports.Note_controller = Note_controller;
})(this);

var note_controller = new Note_controller();

note_controller.insertHTMLIntoAppElement();

console.log(note_controller.note_list.notes);

showNoteListURLs()

function showNoteListURLs() {
  document.getElementById("app").innerHTML = note_controller.note_list_view.note_url();
}

showNoteOnClick()

function showNoteOnClick() {
  window.addEventListener("hashchange", showNote);
}

function showNote() {
  console.log(location.hash.split("#")[0])
  document.getElementById("app").innerHTML = getNote(window.location.hash.substring(7)-9);
}

function getNote(id) {
  return note_controller.note_list.notes[id].text;
}

formSubmission()

function formSubmission() {
  document.querySelector("#text").addEventListener("click", onClick(event));
}

function onClick(event) {
  event.preventDefault();
  console.log("hello")
}
