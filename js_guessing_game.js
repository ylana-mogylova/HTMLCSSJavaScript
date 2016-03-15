var target;
var guess_input_text;
var finished = false;
var guesses = 0;
var index = 0;

var colourArray = ['blue', 'yellow', 'white', 'brown', 'green', 'orange', 'purpole', 'black', 'grey', 'red', 'chocolate', 'pink', 'indigo', 'lime', 'magenta'];

function do_game() {

    var random_number = Math.random() * 15;
    var random_number_integer = Math.floor(random_number)+1;
    target = colourArray[random_number_integer];
    colourArray.sort();
    console.log(target);
    guess_input_text = prompt("I am thinking of one of these colours: "+
                          show_colour(0)+"\n\n"+
                          "What is the number?");

    /*while (!finished) {
        guess_input_text = prompt("I am thinking of one of these colours: "+
                              show_colour(0)+"\n\n"+
                              "What is the number?");
        //guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }*/

}

function show_colour(index){
    if (index<colourArray.length){
      if (index<colourArray.length-1){
      return colourArray[index] + ", "+ show_colour(index+1)
      } else return colourArray[index] + show_colour(index+1)
    } else
      return "";
}
