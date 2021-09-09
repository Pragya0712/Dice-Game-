var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;


var randomImgSource1 = "images/dice" + randomNumber1 + ".png";
var randomImgSource2 = "images/dice" + randomNumber2 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSource1);

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSource2);


var heading = document.querySelector("h1");
if(randomNumber1 > randomNumber2){
    heading.innerHTML = " 🚩 Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 Wins! 🚩"
}
else{
    heading.innerHTML = "Draw! 🤝 "
}


/*
function dice1(){
    var dice1 = document.querySelector(".img1")
    switch(randomNumber1){
        case 1: dice1.setAttribute("src", "images/dice1.png")
        break;
        case 2: dice1.setAttribute("src", "images/dice2.png")
        break;
        case 3: dice1.setAttribute("src", "images/dice3.png")
        break;
        case 4: dice1.setAttribute("src", "images/dice4.png")
        break;
        case 5: dice1.setAttribute("src", "images/dice5.png")
        break;
        case 6: dice1.setAttribute("src", "images/dice6.png")
        break;
        default: break;

    }

}

function dice2(){
    var dice2 = document.querySelector(".img2")
    switch(randomNumber2){
        case 1: dice2.setAttribute("src", "images/dice1.png")
        break;
        case 2: dice2.setAttribute("src", "images/dice2.png")
        break;
        case 3: dice2.setAttribute("src", "images/dice3.png")
        break;
        case 4: dice2.setAttribute("src", "images/dice4.png")
        break;
        case 5: dice2.setAttribute("src", "images/dice5.png")
        break;
        case 6: dice2.setAttribute("src", "images/dice6.png")
        break;
        default: break;

    }

}

dice1();
dice2();

*/

