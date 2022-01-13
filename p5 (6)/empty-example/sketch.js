let numberOfHexagonsAcross; // defining hexagons across the page
let mySide;                // defining spacing of hexagons
let numberOfHexagonsDown;  // defining hexagons down the page
let c1,c2; //defining c1 and c2 "color 1 and color 2" for gradiant 

function setup() {
  createCanvas(800, 800); // size of canvas
  c1 = color(247,204,74) //color one
  c2 = color(249,166,2); // color two
  numberOfHexagonsAcross = 18;//18 hexagons across canvas
  numberOfHexagonsDown = 20; //20 hexagons down the canvas

  frameRate(10); // the speed of hexagons flashing and turning
}

function draw() {
  //background(249,166,2);
  mySide = width/numberOfHexagonsAcross; // helps define width of hexagons
   

  // gradient background
  for(let y=0; y<height; y++){ 
    n = map(y,0,height,0,1); // defined n to spead across canvas
    let newc = lerpColor(c1,c2,n); // blending c1,c2 together to blend a new color  (yellow to darker yellow)
    stroke(newc); // new color bassed off of ^
    line(0,y,width, y); //
  }
  
  for(let j=0; j < numberOfHexagonsDown; j++){
    drawLineOfHexagons(j*90, mySide); // drew line, which helps the spacing of hexs
  }
}

function drawLineOfHexagons(yPosition, sideSize){
    for(let i = 0; i < numberOfHexagonsAcross; i++){
      let x = random(0,2); // random number between 0,2
      push(); // doesn't effect the rest of code
      translate(3*mySide*i, yPosition);
      if(x>1.8){ // if number is greater than 1.8, it will rotate the hexagon
        rotate(frameCount/-100.0); //rotating
      
      } 
      drawHexagon(0,0, mySide); //if number is less than 1.8, another hex will be drawn
      pop(); //ending of not effecting rest of code
    
  }
}

function drawHexagon(centreX, centreY, sideLength){  //defining to draw a hexagon based off of center

  fill(random(240,255),random(200,255),random(0,69)); //random shades of yellow for hexagons
  stroke(218,165,32);
  //strokeWeight(4); 
  polygon(centreX, centreY, sideLength, 6);    //drew hexagon (6 sides)
}

function polygon(x, y, radius, npoints) { // defining polygon to draw the shapes  
  let angle = TWO_PI / npoints;
  beginShape(); // begin making polygon ()
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius; // x position 
    let sy = y + sin(a) * radius; // y position
    vertex(sx, sy); // making the vertex
  }
  endShape(CLOSE); // stop making the shapes
}
