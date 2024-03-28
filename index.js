//for player 1

var finalrandomnumber1 = Math.floor(Math.random() * 6) + 1; 

var randomdiceimgfor1 = "dice" + finalrandomnumber1 + ".png"; //'dice1.png'

document.querySelectorAll("img")[0].setAttribute("src", randomdiceimgfor1);//adds the image


//for player 2

var finalrandomnumber2 =  Math.floor(Math.random() * 6) + 1;

var randomdiceimgfor2 = "dice" + finalrandomnumber2 + ".png"; //dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomdiceimgfor2);


//results

if (finalrandomnumber1 > finalrandomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if (finalrandomnumber1 < finalrandomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML= "Draw";
}


//roll dice by refreshing the page

function refreshPage() {
  window.location.reload();
}
