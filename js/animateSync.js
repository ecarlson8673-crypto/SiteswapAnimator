// animate a syncronous pattern
function animateSync(pattern) {
  pattern = pattern.replaceAll("(", "").replaceAll(")", "").replaceAll(",", "");
  // current position in pattern
  let current = 0;
  // which durection ball is going
  let durection = "L";

  let startTime = new Date().getTime();

  // ball position
  let x = [];
  let y = [];

  // ball position change amounts in x and y durections
  let xChange = [];
  let yChange = [];

  // number of times move loop has happend
  let times = 0;

  // animate siteswap
  setInterval(moveSync, 2);
  function moveSync() {
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
                x[i + j] = 30;
              } else {
                x[i + j] = screenWidth - 30;
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

          if (x[i + j] != "blank") {
            // reset color of last position
            let lastPosition = Math.round(((y[i + j] + (yChange[i + j] + 1)) * screenWidth) + (x[i + j] + xChange[i + j]));
            if (!(lastPosition > screenWidth * screenHeight)) {
              document.getElementById(lastPosition).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
              document.getElementById(lastPosition + 1).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
              document.getElementById(lastPosition - screenWidth).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
              document.getElementById(lastPosition - screenWidth + 1).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            }

            // change color of correct pixle
            let position = Math.round((y[i + j] * screenWidth) + x[i + j]);
            if (!(position > screenWidth * screenHeight)) {
              document.getElementById(position).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
              document.getElementById(position + 1).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
              document.getElementById(position - screenWidth).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
              document.getElementById(position - screenWidth + 1).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
            }

            // change position of ball
            y[i + j] = y[i + j] - yChange[i + j];
            x[i + j] = x[i + j] - xChange[i + j];

            // change change to make acceleration
            yChange[i + j] = yChange[i + j] - 1;
          }
        }
      }
      // increase the number of times this loop has looped
      times++;
    }
  }
}
