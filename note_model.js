console.log("inside note model.js");


  (function(exports) {
  function Note(words) {
    this.text = words;
  };
  Note.prototype.get_text = function() {
    return this.text;
  }
  exports.Note = Note;
})(this);



//
// class Note {
//   constructor(words) {
//     this.text = words;
//   }
// }
