/*Button to change ingredients table*/
quantities = [4, 1, 2, 1, 1, 1, 1, 3 / 4];
var quantity1 = quantities[0]*2;
var quantity2 = quantities[1]*2;
var quantity3 = quantities[2]*2;
var quantity4 = quantities[3]*2;
var quantity5 = quantities[4]*2;
var quantity6 = quantities[5]*2;
var quantity7 = quantities[6]*2;
var quantity8 = quantities[7]*2;

window.onload = function () {
    document.getElementById("changeRecipeButton").addEventListener("click", buttonPress);
}


function buttonPress() {
    try {
        document.getElementById('quantityOne').innerHTML = quantity1;
        document.getElementById('quantityTwo').innerHTML = quantity2 + "lb";
        document.getElementById('quantityThree').innerHTML = quantity3 + "tbs";
        document.getElementById('quantityFour').innerHTML = quantity4 + " cups";
        document.getElementById('quantityFive').innerHTML = quantity5 + "ts";
        document.getElementById('quantitySix').innerHTML = quantity6 + " cloves";
        document.getElementById('quantitySeven').innerHTML = quantity7 + " cans";
        document.getElementById('quantityEight').innerHTML = quantity8 + " cups";
    } catch (e) {
        console.log("This didn't work");
    } finally {
        console.log("Try-Catch block has ended");
    }
}


/* API */
try {
    const request = new XMLHttpRequest();
    request.open("GET", "https://mocki.io/v1/97e350e2-7023-4d2a-983e-9190a36f6770");
    request.send();
    request.onload = () => {
        if (request.status === 200) {
            console.log(JSON.parse(request.response));
        } else {
            console.log(`error ${request.status}`)
        }
    }
} catch (e) {
    console.log("API not working");
} finally {
    console.log("API has finished");
}