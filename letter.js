function letter(actualLetter){
    //letter that corresponds to the same index number of the director's last name
    this.actualLetter = actualLetter,

    //value that stores if this letter has been guessed correctly, yet.
    this.guessed = false,

    //function that either shows the correct letter (if the user guessed it) or a placeholder, instead
    this.shout = function(actualLetter) {
        if(this.guessed == true) {
            return actualLetter;
        }
        else {
            return "_";
        }
    },

    //function to determine if the user has guessed this letter correctly this round. if yes, updates this.guessed.
    this.check = function(userLetter) {
        if(userLetter === actualLetter){ 
            this.guessed = true;
        }
    }
}

module.exports = letter;