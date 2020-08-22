console.log("inside note model.js");

var counter = 0;

(function(exports) {
  function Note(text) {
    this.text = text;
    this.id = counter;
    counter++;
};
  Note.prototype.get_text = function() {
    return this.text;
  }
  Note.prototype.get_id = function() {
    return this.id;
  }
  exports.Note = Note;
})(this);



//
// class Note {
//   constructor(words) {
//     this.text = words;
//   }
// }
