// animate a multiplex pattern
function animateMult(pattern) {
  // split pattern properly to animate it
  let working = pattern;
  pattern = [];
  let inMult = false;
  let current = 0;
  for (let i = 0; i < working.length; i++) {
    if (working[i] == "[") {
      inMult = true;
      current++;
    } else if (working[i] == "]") {
      inMult = false;
    } else {
      if (inMult == false) {
        current++;
      }

      if (pattern[current] == undefined) {
        pattern[current] = working[i];
      } else {
        pattern[current] = pattern[current] + working[i];
      }
    }
  }

  // check if there is any blank spaces in patterns array there should not be but remove them if there is
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] == undefined) {
      pattern.splice(i, 1);
    }
  }

  // find the number of numbers in largest brackets, example [22] = 2
  let underTime = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i].length > underTime) {
      underTime = pattern[i].length;
    }
  }

  // reset current
  current = 0;
  // which durection balls are going
  let durection = "L";
  // time between frames
  let time = 100;
  let startTime = new Date().getTime();

  // ball positions
  let x = [];
  let y = [];

  // amount balls move in x durection
  let change = [];
  change[1] = -17;
  change[3] = -5;
  change[5] = -3;
  change[7] = -2;
  change[9] = -1.5;

  change[2] = 0;
  change[4] = 1;
  change[6] = 1;
  change[8] = 1;

  // ball position change amounts
  let xChange = [];
  let yChange = [];

  // number of times throw loop has happend
  let times = 0;

  // amount loop increases because the number of balls need to be thrown is amount loop increases by
  let amountAdd = Number(pattern[current].length);

  // move
  setInterval(moveMult, 2);
  function moveMult() {
    let currentTime = new Date().getTime();
    // check if time is greater than time amount
    if (currentTime > startTime + time) {
      startTime = new Date().getTime();

      // increase the number of times loop has happend
      times++;

      if (times % 4 == 0) {
        // next ball is from other hand
        if (durection == "L") {
          durection = "R";
        } else {
          durection = "L";
        }

        // next position in pattern
        if (current == pattern.length - 1) {
          current = 0;
        } else {
          current++;
        }

        amountAdd = Number(pattern[current].length);
      }

      for (let i = 0; i < Math.floor(times / 4) * underTime + amountAdd; i += amountAdd) {
        if (i < (times / 4) - 9) {
          continue;
        }

        for (let j = 0; j < amountAdd; j++) {
          if (x[i + j] == undefined) {
            //current toss
            let toss = Number(pattern[current][j]);

            // if toss is  0 do nothing
            if (toss == 0) {
              x[i + j] = "blank";
            } else {
              // start position of ball
              if (durection == "L") {
                x[i + j] = 35;
              } else {
                x[i + j] = screenWidth - 35;
              }

              y[i + j = screenHeight - 1;

              // amount ball moves
              if (durection == "L") {
                xChange[i + j] = change[toss];
              } else {
                xChange[i + j] = change[toss] * -1;
              }

              yChange[i + j] = (toss * 2) - 1;
            }
          }

          // move ball
          if (x[i + j] != "blank") {
            // reset color of last position
            let lastPosition = Math.round(((y[i + j] + (yChange[i + j] + 1)) * screenWidth) + (x[i + j] + xChange[i + j]));
            if (!(lastPosition > screenWidth * screenHeight)) {
              document.getElementById(lastPosition).style.backgroundColor = `rgb(${200}, ${200}, ${200})`;
            }

            // change color of current position
            let position = Math.round((y[i + j] * screenWidth) + x[i + j]);
            if (!(position > screenWidth * screenHeight)) {
              document.getElementById(position).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
            }

            // change position of balls
            y[i + j] = y[i + j] - yChange[i + j];
            x[i + j] = x[i + j] - yChange[i + j];

            yChange[i + j] = yChange[i + j] - 1;
          }
        }
      }
    }
  }
}
