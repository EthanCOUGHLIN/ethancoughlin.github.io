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
        red = myInput;
    }
    else if(colourValue == 'blue')
    {
        blue = myInput;
    }
    else if(colourValue == 'green')
    {
        green = myInput;
    }

    document.getElementById('myDiv').style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";``
}


