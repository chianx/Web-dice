var score1 = 0;
var score2 = 0;

document.querySelector(".roll-button").addEventListener("click", diceThrow)

function diceThrow() {
    var a = Math.floor(Math.random()*6)+1;
    var b = Math.floor(Math.random()*6)+1;

    var imageName1 = "images/dice" + a + ".png";
    var imageName2 = "images/dice" + b + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", imageName1);
    document.querySelectorAll("img")[1].setAttribute("src", imageName2);


    if (a>b) {
        document.querySelectorAll("h2")[0].innerHTML= "Player-1 Won! 🚩";
        document.querySelectorAll("h2")[1].innerHTML="";
        score1++;
    }
    else if (a<b) {
        document.querySelectorAll("h2")[0].innerHTML= "";
        document.querySelectorAll("h2")[1].innerHTML="Player-2 Won! 🚩";
        score2++;
    }
    else {
        document.querySelectorAll("h2")[0].innerHTML = "Draw!!";
        document.querySelectorAll("h2")[1].innerHTML= "Draw!!";
    }

    document.querySelectorAll("h4")[0].innerHTML = "Score : " + score1;
    document.querySelectorAll("h4")[1].innerHTML = "Score : " + score2;
}
