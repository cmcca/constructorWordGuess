var letter = require("./letter.js")

function word(randWord) {
    
    //number of letters in the randWord's name
    var n = randWord.length;

    //the real word
    this.randWord = randWord,
    
    //array of each letter as an object
    this.letterArr = new Array(n)
        for (var i = 0; i < n; i++) {
            this.letterArr[i] = new letter(randWord[i]);
        }

    // takes each letter from the array and combines them into a string to display
    this.print = function() {
        var newWord = "";
            for (var i = 0; i < this.letterArr.length; i++) {
                newWord += this.letterArr[i].shout(this.letterArr[i].actualLetter);
            }
            return newWord;
    }

    // //calls guess function for each letter object with user's guess as an argument
    this.truth = function(userGuess) {
        for (var i = 0; i < this.letterArr.length; i++){
            this.letterArr[i].check(userGuess);
        }
    }

}

module.exports = word;