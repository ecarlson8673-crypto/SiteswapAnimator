// animate a syncronous pattern
function animateSync(pattern) {
  pattern = pattern.replaceAll("(", "").replaceAll(")", "").replaceAll(",", "");
  // current position in pattern
  let current = 0;
  // which durection ball is going
  let durection = "L";
  // time of one frame in ms
  let time = 100;
  let startTime = new Date().getTime();

  // ball position
  let x = [];
  let y = [];

  // how much ball is changing in x durection
  let change = [];
  change[2] = 0;
  change[4] = 1;
  change[6] = 1;
  change[8] = 1;

  // if ball is crossing then change amount is different
  let changeX = [];
  changeX[2] = -7;
  changeX[4] = -3;
  changeX[6] = -2.5;
  changeX[8] = -1.5;

  // ball position change amounts in x and y durections
  let xChange = [];
  let yChange = [];

  // number of times move loop has happend
  let times = 0;

  // animate siteswap
  setInterval(move, 2);
  function move() {
    let currentTime = new Date().getTime();
    // check if it is time to move balls or not
    if (currentTime > startTime + time) {
      // reset start time
      startTime = new Date().getTime();

      // run through pattern and move balls
      for (let i = 0; i < (times / 4); i += 2) {
        if (i < (times / 4) - 9) {
          continue;
        }
        for (let j = 0; j < 2; j++) {
          if (x[i + j] == undefined) {
            // current toss
            let toss = Number(pattern[current]);
            // check if pattern is crossing or not
            let crossing = false;
            if (pattern.length > current + 1) {
              if (pattern[current + 1].toUpperCase() == "X") {
                crossing = true;
              }
            }

            // if toss is 0 then nothing happens
            if (toss == 0) {
              x[i + j] = "blank";
            } else {
              // starting position of ball
              if (durection == "L") {
                x[i + j] = 35;
              } else {
                x[i + j] = screenWidth - 35;
              }

              y[i + j] = screenHeight - 1;

              // amount ball needs to move in x and y durections
              if (durection == "L") {
                if (crossing == true) {
                  xChange[i + j] = changeX[toss];
                } else {
                  xChange[i + j] = change[toss];
                }
              } else {
                if (crossing == true) {
                  xChange[i + j] = changeX[toss] * -1;
                } else {
                  xChange[i + j] = change[toss] * -1;
                }
              }

              yChange[i + j] = (toss * 2) - 1;
            }

            // next ball comes from other hand
            if (durection == "L") {
              durection = "R";
            } else {
              durection = "L";
            }

            // next ball in pattern
            if (crossing == true) {
              if (current == pattern.length - 2) {
                current = 0;
              } else {
                current += 2;
              }
            } else {
              if (current == pattern.length - 1) {
                current = 0;
              } else {
                current++;
              }
            }
          }
document.getElementById("errorMessage").innerHTML = "Got Here";
          if (x[i + j] != "blank") {
            // reset color of last position
            let lastPosition = Math.round(((y[i + j] + (yChange[i + j] + 1)) * screenWidth) + (x[i + j] + xChange[i + j]));
document.getElementById("errorMessage").innerHTML = "Got Here2";
            if (!(lastPosition > screenWidth * screenHeight)) {
document.getElementById("errorMessage").innerHTML = "Got Here3 " + lastPosition + "  " + pattern;
              document.getElementById(lastPosition).style.backgroundColor = `rgb(${200}, ${200}, ${200})`;
            }
document.getElementById("errorMessage").innerHTML = "Got Here4";
            // change color of correct pixle
            let position = Math.round((y[i + j] * screenWidth) + x[i + j]);
document.getElementById("errorMessage").innerHTML = "Got Here5";
            if (!(position > screenWidth * screenHeight)) {
document.getElementById("errorMessage").innerHTML = "Got Here6";
              document.getElementById(position).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
            }
document.getElementById("errorMessage").innerHTML = "Got Here7";
            // change position of ball
            y[i + j] = y[i + j] - yChange[i + j];
            x[i + j] = x[i + j] - xChange[i + j];
document.getElementById("errorMessage").innerHTML = "Got Here8";
            // change change to make acceleration
            yChange[i + j] = yChange[i + j] - 1;
          }
          
  document.getElementById("errorMessage").innerHTML = "Seventh Check, after move ball code";
        }
      }
      // increase the number of times this loop has looped
      times++;
    }
  }
}
