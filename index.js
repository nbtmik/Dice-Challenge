var n = Math.random();
n=n*6;
n=Math.floor(n)+1;
var image1="dice"+n+".png";
var imgsrc="images/"+image1;
document.querySelectorAll("img")[0].setAttribute("src",imgsrc);

var m = Math.random();
m=m*6;
m=Math.floor(m)+1;

document.querySelectorAll("img")[1].setAttribute("src","images/dice"+m+".png");

if(n>m){
    document.querySelector("h1").innerHTML="🎈Player 1 wins!";
}
else if(m>n){
    document.querySelector("h1").innerHTML="Player 2 wins!🎈";
}
else{
    document.querySelector("h1").innerHTML="🎈DRAW!🎈";
}