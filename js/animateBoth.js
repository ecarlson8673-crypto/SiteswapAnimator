// animate a synchronous multiplex pattern
function animateBoth(pattern) {
  // split pattern to make it easier to test it
  pattern = pattern.replaceAll(")", "").replaceAll("[", "").replaceAll("]", "");
  pattern = pattern.split("(");
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] == "") {
      pattern.splice(i, 1);
    }
  }
  for (let i = 0; i < pattern.length; i++) {
    pattern[i] = pattern[i].split(",");
  }

  // how much balls change x and y
  let xChange = [];
  let yChange = [];
  
  // position of balls
  let x = [];
  let y = [];

  // position in pattern
  let current = 0;
  /* How Position Works
        current = which of these () pattern is currently working with
        j = left or right hand, (x,y) in other words x or y
        k = which simbol of x or y in ()
  */
  
  let startTime = new Date().getTime();

  // how many times move interval has happend
  let times = 0;

  // move
  patternInterval = setInterval(moveBoth, 2);
  function moveBoth() {
    let currentTime = new Date().getTime();
    if (currentTime > startTime + time) {
      startTime = new Date().getTime();
      if (times % 8 == 0) {
        for (let j = 0; j < 2; j++) {
          for (let k = 0; k < pattern[current][j].length; k++) {
            // next open position in arrays for putting balls
            let position = x.length;

            // if current toss is a x then continue on to next iteration
            if (pattern[current][j][k].toUpperCase() == "X") {
              continue;
            }

            // check if this position has already been used
            if (x[position] == undefined) {
              // get the current toss
              let toss = Number(pattern[current][j][k]);

              // check if this ball is crossing or not
              let crossing = false;
              if (pattern[current][j].length - 1 > k) {
                if (pattern[current][j][k + 1].toUpperCase() == "X") {
                  crossing = true;
                }
              }

              // add a new ball
              if (toss == 0) {
                x[position] = "blank";
              } else {
                // starting position of balls
                if (j == 0) {
                  x[position] = 30;
                } else {
                  x[position] = screenWidth - 30;
                }

                y[position] = screenHeight - 1;

                // change in position
                if (j == 0) {
                  if (crossing == true) {
                    xChange[position] = changeX[toss];
                  } else {
                    xChange[position] = change[toss];
                  }
                } else {
                  if (crossing == true) {
                    xChange[position] = changeX[toss] * -1;
                  } else {
                    xChange[position] = change[toss] * -1;
                  }
                }

                yChange[position] = (toss * 2) - 1;
              }
            }
          }
        }

        // change position in pattern
        if (pattern.length - 1 <= current) {
          current = 0;
        } else {
          current++;
        }
      }
      times++;

      for (let i = 0; i < x.length; i++) {
        // move balls while in air
        if (x[i] != "blank") {
          // reset color of last position
          let lastPosition = Math.round(((y[i] + (yChange[i] + 1)) * screenWidth) + (x[i] + xChange[i]));
          if (!(lastPosition > screenWidth * screenHeight)) {
            document.getElementById(lastPosition).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            document.getElementById(lastPosition + 1).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            document.getElementById(lastPosition - screenWidth).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            document.getElementById(lastPosition - screenWidth + 1).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
          }

          // change color of correct pixle
          let position = Math.round((y[i] * screenWidth) + x[i]);
          if (!(position > screenWidth * screenHeight)) {
            document.getElementById(position).style.backgroundColor = ballColor;
            document.getElementById(position + 1).style.backgroundColor = ballColor;
            document.getElementById(position - screenWidth).style.backgroundColor = ballColor;
            document.getElementById(position - screenWidth + 1).style.backgroundColor = ballColor;
          }

          // change position of ball
          y[i] = y[i] - yChange[i];
          x[i] = x[i] - xChange[i];

          // change change to make acceleration
          yChange[i] = yChange[i] - 1;
        }
      }
    }
  }
}
