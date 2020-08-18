console.log("inside note model.js");


  (function(exports) {
  function Note(words) {
    this.text = words;
  };

  exports.Note = Note;
})(this);

// 
// class Note {
//   constructor(words) {
//     this.text = words;
//   }
// }
