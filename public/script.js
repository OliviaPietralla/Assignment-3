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

// p5.js MVP DATA

let x = 320;
let y = 180;
let xspeed = 1;
let yspeed = 1;

let r = 15;

let a = 320;
let b = 180; 
let aspeed = 2;
let bspeed = 2;

let p = 15;

let c = 320;
let d = 180;
let cspeed = 4;
let dspeed = 4;

let m = 320;
let n = 180;
let mspeed = 3;
let nspeed = 3;

function setup() {
  createCanvas(innerWidth, innerHeight);
}
 
function draw() {
  background('white');
  noStroke();
  textSize(20);

  fill('#E26F0B');
  text('Noah', 10, 30);
  ellipse(x, y, r*8, r*8);
    x += xspeed;
    y += yspeed;
      if(x > width - r*4 || x < r*4) {
        xspeed = -xspeed;
      }
      if (y > height - r*4 || y < r*4) {
        yspeed = -yspeed;
      }
  
  fill('rgb(173,56,173)');
  text('Beth', 10, 50);
  ellipse(a, b, p*6, p*6);
    a += aspeed;
    b += yspeed;
      if(a > width - p*3 || a < p*3) {
        aspeed = -aspeed;
      }
      if (b > height - p*3 || b < p*3) {
        bspeed = -bspeed;
      }
  
  fill('#FFC107');
  text('Cate', 10, 70);
  ellipse(c, d, r*2, r*2);
    c += cspeed;
    d += dspeed;
      if(c > width - r || c < r) {
        cspeed = -cspeed;
      }
      if (d > height - r || d < r) {
        dspeed = -dspeed;
      }
  
  fill('lightpink');
  text('Kristie', 10, 90);
  ellipse(m, n, r*4, r*4);
    m += mspeed;
    n += nspeed;
      if(m > width - r*2 || m < r*2) {
        mspeed = -mspeed;
      }
      if (n > height - r*2 || n < r*2) {
        nspeed = -nspeed;
      }
}

function mouseClicked() {
  var d = dist(mouseX, mouseY, a, b);
  if (d < 40) {
    p += 5;
  }
}
