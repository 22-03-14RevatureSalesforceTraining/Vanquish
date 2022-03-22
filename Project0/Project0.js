/*file is Project0.js*/
/*author = Dalton Faber*/
/* date created = 3/17/2022*/
/* last modify date 3/22/2022*/
/*Creating an interactive api that connects to an external api*/
/*js file to change the amount of ingredients needed if they want something other than default
also calling an api*/


//the event listener for when the amount is changed then calling changeIngrediants for the action to be given
window.onload = function()
{
    document.querySelector("button").addEventListener("click", changeIngrediants);
}

//declaring the default variables and creating the new variables 
var defaultAmount = 14;
var newAmount ;
var submitAmount = 1;

var defaultFlour = 1.5,
    defaultSugar = 2,
    defaultBPowder = 2,
    defaultBSoda = 0.5,
    defaultSalt = 0.5,
    defaultMilk = 1.5,
    defaultEggs = 2,
    defaultVanilla = 1,
    defaultOil = 2;

var newFlour, newSugar, newBPowder, newBSoda, newSalt, newMilk, newEggs, newVanilla, newOil;

/*changing the ingredient amount depending on the ammount inputed. 
    If 1 keeping them to default 
    if greater than 0 changing it to the amount that was inputted 
    if less than or equal to 0 printing a red error text onto the page
*/
function changeIngrediants()
{ 

    submitAmount = document.getElementById("amount").value;  

    try{
        if(submitAmount == 1)
        {   
            newAmount = defaultAmount;
            newFlour = defaultFlour;
            newSugar = defaultSugar;
            newBPowder = defaultBPowder;
            newBSoda = defaultBSoda;
            newSalt = defaultSalt;
            newMilk = defaultMilk;
            newEggs = defaultEggs;
            newVanilla = defaultVanilla;
            newOil = defaultOil;

        }
        else if(submitAmount <= 0)
    {
            throw new Error;
        
    }
        else
        {
            newAmount = defaultAmount*submitAmount;
            newFlour = defaultFlour*submitAmount;
            newSugar = defaultSugar*submitAmount;
            newBPowder = defaultBPowder*submitAmount;
            newBSoda = defaultBSoda*submitAmount;
            newSalt = defaultSalt*submitAmount;
            newMilk = defaultMilk*submitAmount;
            newEggs = defaultEggs*submitAmount;
            newVanilla = defaultVanilla*submitAmount;
            newOil = defaultOil*submitAmount;
        }
    }
    catch(error)
    {
        document.getElementById('error').innerHTML = "Number needs to be greater than 0";
            
    }

    // calling the print functions to change to new values depending on amount given
    printPancake(newAmount);
    printFlour(newFlour);
    printSugar(newSugar);
    printBPowder(newBPowder);
    printBSoda(newBSoda);
    printSalt(newSalt);
    printMilk(newMilk);
    printEggs(newEggs);
    printVanilla(newVanilla);
    printOil(newOil);

}

//printing the amount of pancakes 
function printPancake(newAmount)
{
    document.getElementById('amountPancake').innerHTML = newAmount;
}

//printing the amount of flour needed
function printFlour(newFlour)
{
    document.getElementById('flour').innerHTML = newFlour + ' cups';
}

//printing the amount of sugar needed
function printSugar(NewSugar)
{
    document.getElementById('sugar').innerHTML = newSugar + ' tablespoons';
}

//printing the amount of baking powder needed
function printBPowder(newBPowder)
{
    document.getElementById('bPowder').innerHTML = newBPowder + ' teaspoons';
}

//printing the amount of baking soda needed
function printBSoda(newBSoda)
{
    document.getElementById('bSoda').innerHTML = newBSoda + ' teaspoon';
}

//printing the amount of salt needed
function printSalt(newSalt)
{
    document.getElementById('salt').innerHTML = newSalt + ' teaspoon';
}

//printing the amount of milk needed
function printMilk()
{
    document.getElementById('milk').innerHTML = newMilk + ' cups';
}

//printing the amount of eggs needed
function printEggs(newEggs)
{
    document.getElementById('eggs').innerHTML = newEggs;
}

//printing the amount of vanilla needed
function printVanilla(newVanilla)
{
    document.getElementById('vanilla').innerHTML = newVanilla + ' teaspoons';
}

//printing the amount of oil needed
function printOil(newOil)
{
    document.getElementById('oil').innerHTML = newOil + ' tablespoons';
}

//api from dummy api
request = new XMLHttpRequest();
request.open("GET", "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
request.send();
request.onload = () => 
{
    document.getElementById('api').innerHTML = "API "+ request.status;
}

