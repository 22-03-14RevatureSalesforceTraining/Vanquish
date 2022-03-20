/**
Author: Theodore Moore
This is the javascript for the Project 0 Website
*/


//This will be the number the user has to guess
var randomNumber= 0;
//This will be the number have guesses the player has made in the current iteration of the game
var guesses= 0;

var roundGuesses=[];
/**
This function starts the game from scratch, it resets the textbox 
that the game was in and gets a new random number
*/

function startGame(){
    //This is the label that displays result of our guess that we want to reset after winning
    var result=document.querySelector("#responseArea");
    result.innerHTML="Guess a number!";
    
    //This gets a random number and rounds it down
    randomNumber= Math.random()*100;
    randomNumber=Math.floor(randomNumber);

    // this sets our number of guesses to 0
    guesses=0;

}


/**
    The function that sets the wingame image, and updates the tables and lists
*/
function winGame(){
    // this gets our image and sets it to the right file
    var winImage = document.querySelector("#winLoss");
    winImage.setAttribute("src", "./winImage.png");

    //this sets our class to make it visible
    winImage.className="gameArea";

    //get the table from the document to update
    var results = document.querySelector("#resultTable");
    //populate a string with the results from the current game
    var gameResult= "<tr> <td> "+randomNumber+"</td> <td> W </td> <td> ";
    gameResult= gameResult+guesses+ "</td> </tr>";
    //append the results from the current game to html
    results.innerHTML=results.innerHTML+gameResult;

    //finds the list item to add guesses to
    var gameGuesses= document.querySelector("#guessList");
    gameGuesses.className="nothing";

    //clear out list 
    gameGuesses.innerHTML="";

    //while loop runs as long as items are still in list
    while(roundGuesses.length!=0){  
        //item pops off array each item
        var listItems= "<li>"+roundGuesses.pop()+("</li>");
        //appends that value to list
        gameGuesses.innerHTML= listItems+ gameGuesses.innerHTML;
    }
    

}

/**
    The function that sets the losegame image, and updates the tables and lists
*/
function loseGame(){
    // this gets our image and sets it to the right file
    var lossImage = document.querySelector("#winLoss");
    lossImage.setAttribute("src", "./loseImage.jpg");
    //this sets our class to make it visible
    lossImage.className="gameArea";
    //get the table from the document to update
    var results = document.querySelector("#resultTable");
    //populate a string with the results from the current game
    var gameResult= "<tr> <td> "+randomNumber+"</td> <td> L </td> <td> ";
    gameResult= gameResult+guesses+ "</td> </tr>";
    //append the results from the current game to html
    results.innerHTML=results.innerHTML+gameResult;

    //finds the list item to add guesses to
    var gameGuesses= document.querySelector("#guessList");
    gameGuesses.className="nothing";

    //clear out list 
    gameGuesses.innerHTML="";

    //while loop runs as long as items are still in list
    while(roundGuesses.length!=0){  
        //item pops off array each item
        var listItems= "<li>"+roundGuesses.pop()+("</li>");
        //appends that value to list
        gameGuesses.innerHTML= listItems+ gameGuesses.innerHTML;
    }
}

/**
This is the function that runs every time the user makes a guess by clicking our button
It checks the guess and runs an appropriate funtion if the game is won or lost
*/

function userGuess(){
    //this gets the gues from the textbox
    var textBox= document.querySelector("#guess");
    var myGuess= textBox.value;

    //this gets the area for the websites response to the user guess
    var result=document.querySelector("#responseArea");

    //using try catch to see if guess isn't a number if guess isnt number throws error
    try{
        /**
            This goes through each potential case except for a win or loss
            Cases:
            1. User inputs not a number => Throw an erro
            2. Users guess was lest than 0 => Tell them to guess a number above 0
            3. User guesses a number aboce 100 =>Tell them to guess a number below 100.
            4. User guesses a number below the ranom number => tell the user they are under that value
            5. User gfuesses a number obver => tell the user they are over

        */
        if(isNaN(myGuess)){
            throw "Guess wasn't number.";
        }
        else if(myGuess<0){
            result.innerHTML="Guess a number greater than or equal to 0.";
        }
        else if(myGuess>100){
            result.innerHTML="Guess a number less than or equal to 100.";
        }
        else if(myGuess<randomNumber){
            result.innerHTML="Your guess was under the value.";
            guesses+= 1;
            //psuhes guess onto list
            roundGuesses.push(myGuess);
        }
        else if(myGuess>randomNumber){
            result.innerHTML="Your guess was over the value.";
            guesses+= 1;
            // pushes guess onto list
            roundGuesses.push(myGuess);
        }
        /**
            Checks if the user has won and if so runs the win function and resets the game
            If not checks the number of guesses and if 10 runs loss function and resets game
        */
        if (myGuess==randomNumber){
            // pushes guess onto list
            roundGuesses.push(myGuess);
            winGame();
            startGame();
        }
        else if(guesses==10){
            loseGame();
            startGame();
        }
    }
    catch{
        //runs an alert if NaN
        window.alert("This is not a number");

    }
    
}

window.onload= function(){
    //starts the game
    startGame();

    //set an event listener for userGuess on the button click
    const myButton= document.querySelector("#userInput");
    myButton.addEventListener("click", userGuess);

}