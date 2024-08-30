var typewriterText = document.querySelector(".typewriter");
var phrases = [
  "solving problem with a passion for Machine Learning. ",
  "competitive programmer with a passion for algorithms.",
  "curiosity-driven, solution-focused, results-driven.  ",
  "fluent in multiple programming languages and tools.  ",
  "interested in algorithmic problem solving and design.",
  
];

let phraseIndex = 0;
let characterIndex = 0;

function type() {
   
  if (characterIndex < phrases[phraseIndex].length) {
    
    typewriterText.textContent += phrases[phraseIndex][characterIndex];
   
   
    characterIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
   
  }
  
}

function erase() {
  if (characterIndex > 0) {
    typewriterText.textContent = phrases[phraseIndex].substring(0, characterIndex - 1);
    characterIndex--;
    setTimeout(erase, 25);
    
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 5);
  }
}
type()

var div = document.getElementById("typewriter1");

var i = 0;

function getRandomColor() {
    var colors = ['#B1B493','#494445'];
    var color;
   
    if(i==0){
      color=colors[1];
      i = 1;
      
    }
    else{
      color = colors[0]
      i=0;
    }
    return color;
}

function pass(){
  return 0;
}

function changeColor(){
  div.style.color= getRandomColor();
}

setInterval(changeColor,7500);


/* script for prevent code viwe  */

document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey || event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
      event.preventDefault();
  }
});