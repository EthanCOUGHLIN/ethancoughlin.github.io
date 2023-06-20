var guesses = 10;
var randomNum = getRndInteger(1, 100)
console.log(randomNum);

//document.getElementById('').innerHTML = randomNum;

//let (value = 10)
//if (value = 0) text="Game Over"

//(10-=1)

function myChange()
{
    let userGuess = document.getElementById('fname').value;
    console.log(userGuess);
    if(guesses <= 0) {
        alert("You lose")
        return
    } 
    
    guesses--;
    document.getElementById("guesses").innerHTML = "Guesses - " + guesses;
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

