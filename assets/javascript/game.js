// sets background image height to size of browser window
$("#main").css("height", $(window).height());
// words array
var words = ['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
// arrray of background images
var spaceBackgrounds = ['assets/images/rocket-launch.jpg', 'assets/images/falcon.jpg', 'assets/images/falcon-air.jpg', 'assets/images/dragon-3.jpg'];
var backgroundIndexCounter = Math.floor((Math.random() * spaceBackgrounds.length));
// indexcounter that goes from start to finish or has a random index selector
var indexCounter = Math.floor((Math.random() * words.length));
// var indexCounter = 0;
// an array that gets filled with the amount of underscroes equal to the character length of missing word
var underscores = []
    // an array from WORDS ARRAY with each character as an individual element
var missingWord = words[indexCounter].split("");
// the score indicator for wins and guesses left
var winsScore = 0;
var guessesLeftCount = 100;
// jumbotron p tag that holds the missing word
var targetDiv = document.getElementById("missingWords");
// jumbotron p tag that holds the letters guessed
var targetDiv = document.getElementById("missingWords");
// target anchor tag that holds the invalid cordinates paragraph
var wrongLetters = document.getElementById("guessedLetters");
var wrongLettersArray = []
    // target anchor tag that holds the guesses remaining
var guessesLeft = document.getElementById("guessesLeft");
// function that begins game when "launch" is clicked
function newGame() {
    // when launch button is pressed it now become a page refresh button to 're-launch mission'
    $('#launch').attr('onclick', 'window.location.reload()');
    $('#launch').html('RELAUNCH');
    // for loop selects the words count for the word based on the indexCounter and based on
    // its character length fills and underscor array with the same count and joins them in the jumbotron
    for (var i = 0; i < words[indexCounter].length; i++) {
        underscores.push("_")
        targetDiv.innerHTML = (underscores.join(" "));
    }
}
// this function begins a new level when missingWord array is identical to underscores array
function nextLevel() {
    // condition for when a word is guessed correctly
    if (missingWord.join("") == underscores.join("")) {
        // indexCounter goes up to get the new word in the words array based on index
        indexCounter = Math.floor((Math.random() * words.length));
        // indexCounter++;
        // wins score increments
        winsScore++;
        wins.innerHTML = ("Missions Completed: " + winsScore);
        // jumotron paragraph element is cleared
        targetDiv.innerHTML = "";
        wrongLetters.innerHTML = "";
        // arrays are cleared of previous characters
        underscores = [];
        missingWord = [];
        wrongLettersArray = [];
        // background images array
        backgroundIndexCounter = Math.floor((Math.random() * spaceBackgrounds.length));
        var urlString = "url(" + spaceBackgrounds[backgroundIndexCounter] + ")" + " no-repeat";
        document.getElementById("main").style.background = urlString;

        // after a word is completed if the win count equals a certain number say completed
        if (winsScore == words.length) {
            targetDiv.innerHTML = "Completed!";
            // after a word is completed if the win count doesnt equals a certain number continue next game
        } else {
            missingWord = words[indexCounter].split("");
            newGame();
        }
    }
}
// listens for the user input
document.onkeyup = function(event) {
    // condition for user input
    if (underscores.length == 0) {
        targetDiv.innerHTML = "execute the launch command below to proceed";
        //  wrongLettersParagraph.innerHTML = "";
        // if the game hasn't started the guesses will not go down
        guessesLeft.innerHTML = ("Fuel: " + guessesLeftCount + "%");
    } else if (missingWord.includes(event.key)) {
        // user input goes into a for loop and checks the value of all elements in underscores array
        // if user input equals element value the element appears with remaining blanks
        for (var i = 0; i < missingWord.length; i++) {
            if (missingWord[i] == event.key) {
                underscores[i] = event.key;
                targetDiv.innerHTML = (underscores.join(" "));
            }
        }
        // a new word is chosen if next level conditions are met
        nextLevel();
        // sets the condition if there's nothing in the array
    } else if (!missingWord.includes(event.key)) {
        // sets the guesses left conditional to not go below 0 and if event not present in wrongLettersArray
        if (guessesLeftCount > 0 && !wrongLettersArray.includes(event.key)) {
            guessesLeftCount -= 10;
            guessesLeft.innerHTML = ("Fuel: " + guessesLeftCount + "%");
            // user input is pushed to an array and the elements are exported to the jumbotron
            wrongLettersArray.push(event.key)
            wrongLetters.innerHTML = ("invalid cordinates: " + wrongLettersArray.join(", "));
        }
        // if guesses left are 0 then jumbotron says failed
        // guesses left, win score and indexCounter reset to default values
        if (guessesLeftCount == 0) {
            targetDiv.innerHTML = "failed";
            guessesLeftCount = 0;
            winsScore = 0;
            underscores = [];
            // indexCounter = 0;
        }
    }
}
