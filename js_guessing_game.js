var target;
var guess_input_text;
var finished = false;
var guesses = 0;
var index = 0;
// colour array creation
var colourArray = ['blue', 'yellow', 'white', 'brown', 'green', 'orange', 'purple', 'black', 'grey', 'red', 'chocolate', 'pink', 'indigo', 'lime', 'magenta'];

function do_game() {
    // generate a random number from 0 to 14.999999999
    var random_number = Math.random() * colourArray.length;
    // round a generated number and add 1 to have range from 0 to colourArray length
    var random_number_integer = Math.floor(random_number)+1;
    // store targer colour
    target = colourArray[random_number_integer];

    // sort array in the alphabetical order
    colourArray.sort();
    //console.log(target);


    while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colours: "+
                              show_colour(0)+"\n\n"+
                              "What color am I thinking of?");
        guesses += 1;
        finished = check_guess();
    }

}

function show_colour(index){
    if (index<colourArray.length){
      if (index<colourArray.length-1){
      return colourArray[index] + ", "+ show_colour(index+1)
      } else return colourArray[index] + show_colour(index+1)
    } else
      return "";
}

function check_guess(){
  /*  if (colourArray.indexOf(guess_input_text)==-1) {
        alert("Sorry, I do not recognize your colour \n \n"+
              "Please try again.");
        return false;
    }

    if (guess_input_text.localeCompare(target) == -1) {
        alert("Sorry, your guess is not correct. \n\n" +
              "Hint: your colour is alphabetically lower than mine! \n \n"+
              "Try again.");
        return false;
    }

    if (guess_input_text.localeCompare(target) == 1) {
      alert("Sorry, your guess is not correct. \n\n" +
            "Hint: your colour is alphabetically higher than mine! \n \n"+
            "Try again.");
        return false;
    }*/
    if(target == null || guess_input_text == null){
      return true;
    }
    var height = target.localeCompare(guess_input_text);
    switch(height){
      case -1:
        alert("Sorry, your guess is not correct. \n\n" +
              "Hint: your colour is alphabetically lower than mine! \n \n"+
              "Try again.");
        return false;
        break;
      case 0:
        document.body.style.backgroundColor = target;
        alert("Congratulations! You have guessed the colour!\n\n"+ "The colour was " + target +
              ".\n\n It took you " + guesses +
              " guesses to get the colour!");
        return true;
        break;
      case 1:
        if (colourArray.indexOf(guess_input_text)==-1) {
              alert("Sorry, I do not recognize your colour \n \n"+
                    "Please try again.");
              return false;
        }else{
          alert("Sorry, your guess is not correct. \n\n" +
              "Hint: your colour is alphabetically higher than mine! \n \n"+
              "Try again.");
          return false;
        }
        break;
      default:
        alert("Sorry, your guess is not correct. \n\n" +
              "Hint: your colour is alphabetically lower than mine! \n \n"+
              "Try again.");
        return false;
        break;
    }


}
