function availability(event) {
    // get the clicking element
    const element = event.target;

    // get the inner html
    const elementInnerText = element.innerHTML;

    // toggle the inner html between circle outline or highlight
    if (elementInnerText === 'check_circle_outline') {
        element.innerHTML = 'highlight_off';
    } else {
        element.innerHTML = 'check_circle_outline';
    }
}

// POLL VOTING 

const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
    options[i].addEventListener("click", ()=>{
        options[i].classList.add("selected");
        for (let j = 0; j < options.length; j++) {
            options[j].classList.add("selectall");
        }    
    });
}

// p5.js

// let img;

//function preload() {
//  img = loadImage('netball4.png');
//}

//function setup() {
//  createCanvas(400, 400, WEBGL);
//  background('white')
  
//  image(img, 0, 0);
//  noFill();
//  ellipse(56, 46, 55);
//}


let x = 320;
let y = 180;
let xspeed = 4;
let yspeed = 2;

let r = 15;

function setup() {
  createCanvas(innerWidth, innerHeight);
}
 
function draw() {
  fill('orange')
  background('white')
  ellipse(x, y, r*2, r*2);
  x += xspeed;
  y += yspeed;
  if(x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;
  }
}

function mouseClicked() {
    var d = dist(mouseX, mouseY, x, y);
    if (d < 40) {
        r += 5;
    }
}