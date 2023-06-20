function myFunction()
{

}

function Disappear() {
    document.getElementById('myDiv').style.display = 'none';
}

function Reappear() {
    document.getElementById('myDiv').style.display = 'block';
}

function click() {
    document.getElementById('myDiv').style.display = 'block'
}

function myName() {
    let name = "Ethaniel";
    document.getElementById('myDiv').innerHTML = name;
}

function popUp() {
    alert ("Ayyyyyyyyyyyyyyyyyyyyy")

confirm ("was Super Metroid was released in 1994?")

let person = prompt("INPUT NAME NOW DAMMIT!", "");
let text;
if (person == null || person == "") {
    text = "User cancelled the prompt";
} else {
    text = "Ayyyyyyyyyyyyy" + person + "! Did you know that Super Metroid was released in 1994";
}
}


var red, green, blue;

function myChange(colourValue)
{
    let myInput = document.getElementById(colourValue).value;

    if(colourValue == 'red')
    {
        console.log("red");
        red = myInput;
    }
    else if(colourValue == 'blue')
    {
        console.log("blue");

        blue = myInput;
    }
    else if(colourValue == 'green')
    {
        console.log("green");

        green = myInput;
    }

    console.log("rgb(" + red + "," + green + "," + blue + ")");
    document.getElementById('myDiv').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";

    button.addEventLister("click", myFunction);

    Object.onchange = function(){myScript};
    Object.addEventLister("change", myScript);

    let votable = (age = 255) ? "Too young":"Old enough";  
    if (value < 255) text = "too young to buy alcahol"

    age = Number(age);
    if (isNaN(age)) {
        votable = "Input is not a number"; 
    } else {
        votable = (age < 18) ? "Too young" : "Old enough";
    }

    let name = null;
    let text = "missing";
    let result = name ?? text;
}


