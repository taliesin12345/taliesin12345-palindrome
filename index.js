// Reverses a string. Works with emopjis.
// Example sentence to try it out: The quick brown 🦊 and the faithful 🐕
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Adds the .reverse() method to all strings (to 'String.prototype'):
// String.prototype.reverse = function() {
//   return Array.from(this).reverse().join("");
// }
// // Exercise: this method should return true if a string is empty or consists
// // only of whitespace. (The exercise said to add it to String.prototype.)
// // In the RegEx, '^' means 'Start of string', '$' means 'End of string'.
// String.prototype.isEmpty = function() {
//   if ( this.length === 0 || !!this.match(/^\s+$/) ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // Exercise: add a sliceLast method to Array.prototype that returns the last
// // element in an array:
// Array.prototype.sliceLast = function() {
//   return this.slice(-1)[0];
// }

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;
  // Returns content of a string in lowercase.
  this.processor = function(string) {
    this.string = string;
    return this.string.toLowerCase();
  }
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }
  // Returns true for a palindrome, false otherwise. Case-insensitive.
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
    // If you add the .reverse() method permanenntly to String.prototype (see
    // above), it becomes like this:
    // return this.processedContent() === this.processedContent().reverse();
  }
  // Returns content in all caps.
  this.louder = function() {
    return this.content.toUpperCase();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;
  // Overrides the processedContent method in its prototype object ('Phrase'),
  // so that 'translation' will be tested as a palindrome instead of 'content':
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
