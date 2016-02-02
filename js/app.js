$(document).ready(function(){

    var secretNumber = 0;
    var userGuess = 0;
    var guessCount = 0;
    var finish = false;

/*--- Restarts game --*/
    function newGame(){
        guessCount = 0;
        finish = false;
        $('#userGuess').val('');
        $('#count').text(guessCount);
        $('#guessList li').remove();
        secretNumber = (Math.floor(Math.random()*100));
        setFeedback("Make your guess!");
        console.log("Game restarted. New number = " + secretNumber);
    };

/*---- To start a new game ----*/
    $('.new').click(function(){
        newGame();
    });

/*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);

    });

/*--- Hide information modal box ---*/
    $("a.close").click(function(){
        $(".overlay").fadeOut(1000);
    });


/*--- This is the random number generator --*/
    function secretNumberGenerator() {
        secretNumber = (Math.floor(Math.random()*100));
        console.log("Number = " + secretNumber);
    };

    secretNumberGenerator();

/*--- To get user's input --*/
    $("form").submit(function(event){
        event.preventDefault();
        /*--- user won game; prevents more guesses ---*/
        if(!finish){
            userGuess = $('#userGuess').val();
            checkInput();
        } else {
            setFeedback("Press New Game to start over; you've already won.");
        }
    });

/*-- Checks the user's input--*/
function checkInput(){
    if(isNaN(userGuess)) {
        alert("Please enter a number from 1 to 100.");
    } else if (userGuess < 1 || userGuess > 100) {
        alert("Plese enter a number from 1 to 100.");
    } else {
        comparisonAmount();
        console.log("User guess = " + userGuess);
        $('#userGuess').val('');
        guessCount++;
        setCount(guessCount);
        $('ul#guessList').append("<li>" + userGuess + "</li>");
    }
};

/*--- Compares whether the difference is positive or negative --*/
    function comparisonAmount(){
        if (userGuess - secretNumber > 0) {
            negativeAmount();
        } else {
            positiveAmount();
        }
    };

/*--- When difference is positive --*/
    function positiveAmount() {
        if (userGuess / secretNumber === 1){
            setFeedback("Congrats! You win!");
            finish = true;
          } else if ((secretNumber - userGuess) > 60.5){
            setFeedback("You're completely frozen.");
            } else if ((secretNumber - userGuess) > 55.5){
            setFeedback("You're freezing cold.");
            } else if ((secretNumber - userGuess) > 50.5){
            setFeedback("You're super cold.");
            } else if ((secretNumber - userGuess) > 40.5) {
            setFeedback("You are cold.");
            } else if ((secretNumber - userGuess) > 30.5) {
            setFeedback("You're a bit chilly.");
            } else if((secretNumber - userGuess) > 20.5) {
            setFeedback("You're getting warm.");
            } else if((secretNumber - userGuess) > 15.5) {
            setFeedback("You're getting warmer.");
            } else if ((secretNumber - userGuess) > 7.5){
            setFeedback("You're getting hot.");
            } else if ((secretNumber - userGuess) > 5.5){
            setFeedback("You're hotter.");
           } else if ((secretNumber - userGuess) > 1.5){
            setFeedback("You're very hot.");
            } else if ((secretNumber - userGuess) > 0.5){
            setFeedback("You're burning up!");
        } else {
        }
    };

/*---  When difference is negative --*/
    function negativeAmount() {
        if (userGuess / secretNumber === 1){
            setFeedback("Congrats! You win!");
            finish = true;
          } else if ((userGuess - secretNumber) > 60.5){
            setFeedback("You're completely frozen.");
            } else if ((userGuess - secretNumber) > 55.5){
            setFeedback("You're freezing cold.");
            } else if ((userGuess - secretNumber) > 50.5){
            setFeedback("You're super cold.");
            } else if ((userGuess - secretNumber) > 40.5) {
            setFeedback("You are cold.");
            } else if ((userGuess - secretNumber) > 30.5) {
            setFeedback("You're a bit chilly.");
            } else if((userGuess - secretNumber) > 20.5) {
            setFeedback("You're getting warm.");
            } else if((userGuess - secretNumber) > 15.5) {
            setFeedback("You're getting warmer.");
            } else if ((userGuess - secretNumber) > 7.5){
            setFeedback("You're getting hot.");
            } else if ((userGuess - secretNumber) > 5.5){
            setFeedback("You're hotter.");
           } else if ((userGuess - secretNumber) > 1.5){
            setFeedback("You're very hot.");
            } else if ((userGuess - secretNumber) > 0.5){
            setFeedback("You're burning up!");
        } else {
        }
    };


/*--- Function that sends feedback to user --*/
    function setFeedback(feedback) {
        $('#feedback').text(feedback);
    };

/*--- Function that counts guesses of user --*/
    function setCount(count){
        $('#count').text(guessCount);
    };

});