/*
    NameOfFile: ProjectZeroJS.js
    Author: Jacob Blockey
    CreatedDate: 3/18/22
    LastModifiedDate: 3/20/22
    PurposeOfFile: Used to handle the DOM modification for ProjectZero.html, as well to handle the errors that come with it,
    as well as adding an event listener to the button and text box. 
*/

//adds the event listener and calls this function upon when the page loads. 
window.onload = function(){
    document.querySelector("button").addEventListener("click", buttonClicked); //bubbling
}

function userInput(){
    amtOfServings = document.getElementById("userInput").value; //sets amtOfServings equal to what the user inputted into the textbox

    //creates an error if the user inputted anything less than 1 into the textbox
    if(amtOfServings < 1){
        throw new Error("Invalid input! Please input a number that is 1 or more!");
    }
    return amtOfServings
}

function buttonClicked(){
    amtOfIngredients = [2, 3, 0.33, 2, 4, 4]; /*an arry storing the amount of ingredients needed in this order:
    yogurt (24 ounce), yogurt (16 ounce), honey, blueberries, strawberries, granola*/  


    //Used to catch when and if the user inputs anything less than one
    try{
        amtOfServings =userInput();
        changeTable(amtOfIngredients, amtOfServings);

        //will change the text back to black, and to its orignial message so it doesn't stay red upon reinput
        document.getElementById("errorMessage").innerHTML = "<span style=\"color:black\">" + 
                "Please enter the amount of parfaits you want to make:" + "</span>";
        } 
        catch (e){
        //changes text to red when the error is caught
        document.getElementById("errorMessage").innerHTML = "<span style=\"color:red\">" + 
        "Invalid input! Please input a number that is 1 or more!" + "</span>";
    
        //puts error message into the consoe
        console.error(e);
    }
}

function changeTable(amtOfIngredients, amtOfServings){
    //calls all the functions to change the values on the table
    changeYogurt(amtOfIngredients, amtOfServings);
    changeHoney(amtOfIngredients, amtOfServings);
    changeBlueberries(amtOfIngredients, amtOfServings);
    changeStrawberries(amtOfIngredients, amtOfServings);
    changeGranola(amtOfIngredients, amtOfServings);
}

function changeYogurt(amtOfIngredients, amtOfServings){
    //changes whats in the 'yogurt' section in the table
    let yogurt = document.getElementById('yogurt');
    yogurt.innerHTML = amtOfIngredients[0] * amtOfServings + 
    ' 24-ounce (or ' + amtOfIngredients[1] * amtOfServings + 
    ' 16-ounce) containers of yogurt';
}

function changeHoney(amtOfIngredients, amtOfServings){
    //changes whats in the 'honey' section in the table
    let honey = document.getElementById('honey');
    honey.innerHTML = Math.round(amtOfIngredients[2] * amtOfServings, 2) + 
    ' cups'
}

function changeBlueberries(amtOfIngredients, amtOfServings){
    //changes whats in the 'honey' section in the table
    let blueberries = document.getElementById('blueberries');
    blueberries.innerHTML = amtOfIngredients[3] * amtOfServings + 
    ' cups'
}

function changeStrawberries(amtOfIngredients, amtOfServings){
    //changes whats in the 'strawberries' section in the table
    let strawberries = document.getElementById('strawberries');
    strawberries.innerHTML = amtOfIngredients[4] * amtOfServings + 
    ' cups'
}

function changeGranola(amtOfIngredients, amtOfServings){
    //changes whats in the 'granola' section in the table
    let granola = document.getElementById('granola');
    granola.innerHTML = amtOfIngredients[5] * amtOfServings + 
    ' cups'
}

/*creating an XMLHttpRequest
The following code is from here, Aside from the document.getElementById: https://levelup.gitconnected.com/all-possible-ways-of-making-an-api-call-in-plain-javascript-c0dee3c11b8b
*/

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    if(request.status === 200){
        console.log(JSON.parse(request.response));
        document.getElementById('apiCall').innerHTML = '<span style=\"color:black\">The XMLHttpRequest was successful! status: ' 
        + request.status;
    } else {
        console.log(request);
        console.log('error ${request.status}');
        document.getElementById('apiCall').innerHTML = '<span style=\"color:red\"> Something went wrong with the XMLHttpRequest. Status:  '
         + request.status + "</span>";
    }
}