/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/

function hello() {
  var input = document.getElementById("userInput").value;
  alert("Hello" + " " + input + ", welcome to D-Coding");
}


function chBackcolor(color) {
  document.body.style.background = color;

}

function bigImg(x) {
  x.style.height = "64px";
  x.style.width = "64px";
}
function regImg(x){
  x.style.height = "40px";
  x.style.width = "40px";
}
