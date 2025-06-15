var body = document.body;
var ColorButton = document.getElementById("ColorButton");

function MathRandom() {
  math.floor(math.random(0, 255));  
}

var R = MathRandom();
var G = MathRandom();
var B = MathRandom();

ColorButton.addEventListener("click",
function() {
    body.style.background = "rgb("R", "G", "B")";
})