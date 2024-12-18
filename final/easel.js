let currentColor = 'black';
let prompts = ["Draw clouds and a sun!", "Draw only using squares!", "Draw only using circles!","Draw your favorite animal!", "Draw your happiest moment!" ];
let currentPrompt = '';
let clearButton, blackButton, yellowButton, purpleButton, pinkButton, tealButton;

function setup() {
  createCanvas(800, 800);
  background(255);

  blackButton = createButton("Black");
  blackButton.position(20, 90);
  blackButton.style("background-color", "#000000");
  blackButton.style("color", "#FFFFFF");
  blackButton.mousePressed(() => currentColor = "#000000");
  
  yellowButton = createButton("Yellow");
  yellowButton.position(20, 120);
  yellowButton.style("background-color", " #FFD754");
  yellowButton.style("color", "#FFFFFF");
  yellowButton.mousePressed(() => currentColor = " #FFD754");

  purpleButton = createButton('Purple');
  purpleButton.position(20, 150);
  purpleButton.style("background-color", "#632b6c");
  purpleButton.style("color", "#FFFFFF");
  purpleButton.mousePressed(() => currentColor = "#632b6c");

  pinkButton = createButton('pink');
  pinkButton.position(20, 180);
  pinkButton.style("background-color", "#FC6C85");
  pinkButton.style("color", "#FFFFFF");
  pinkButton.mousePressed(() => currentColor = "#FC6C85");

  tealButton = createButton("Teal");
  tealButton.position(20, 210);
  tealButton.style("background-color","#008080");
  tealButton.style("color", "#FFFFFF");
  tealButton.mousePressed(() => currentColor = "#008080");


  clearButton = createButton("Clear");
  clearButton.position(400, 10);
  //clearButton.mousePressed(background(255));
     clearButton.mousePressed(() => { 
       background(255);
    showPrompt();
  });

  showPrompt();
}

function mouseDragged(){
    stroke(currentColor);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  //}
}

function showPrompt() {
  currentPrompt = random(prompts);
  fill(0);
  noStroke();
  rect(0, 50, width, 30);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(currentPrompt, width / 2, 65);
}
