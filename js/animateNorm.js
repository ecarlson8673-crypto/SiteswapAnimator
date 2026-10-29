// animate a normal pattern if it is valid
function animateNorm(pattern) {
  // posiiton in pattern
  let current = 0;
  // starting durrection of the ball
  let durection = "L";

  let startTime = new Date().getTime();

  // position of ball
  let x = [];
  let y = [];

  // how much ball position is changing in y durection
  let xChange = [];
  let yChange = [];

  // number of times throw loop has been trigured
  let times = 0;

  // color of balls
  let colorOfBall = [];

  // next the next color
  let nextColor = "";

  // what is the next color to be applied
  let colorPosition = 0;

  // animate
  patternInterval = setInterval(moveNorm, 2);
  function moveNorm() {
    let currentTime = new Date().getTime();
    // check if current time is greater than start time
    if (currentTime > startTime + time) {
      // reset start time
      startTime = new Date().getTime();

      for (let i = (((times / 4) - 9) > 0) ? Math.round((times / 4) - 9) : 0; i < times / 4; i++) {
        if (x[i] == undefined) {
          // the current ball being thrown is a
          let toss = Number(pattern[current]);

          // if toss is 0 then nothing needs to happen
          if (toss == 0) {
            x[i] = "blank";
          } else {
            // start position of ball
            if (durection == "L") {
              x[i] = 30;
            } else {
              x[i] = screenWidth - 30;
            }

            y[i] = screenHeight - 1;

            // amount ball moves in x
            if (durection == "L") {
              xChange[i] = change[toss];
            } else {
              xChange[i] = change[toss] * -1;
            }

            // amount ball moves in y
            yChange[i] = (toss * 2) - 1;
          }

          // flip durection
          if (durection == "L") {
            durection = "R";
          } else {
            durection = "L";
          }

          // increase position in pattern
          if (current == pattern.length - 1) {
            current = 0;
          } else {
            current++;
          }
        }

        // moves balls when in air
        if (x[i] != "blank") {
          // reset color of last square
          let lastPosition = Math.round(((y[i] + (yChange[i] + 1)) * screenWidth) + (x[i] + xChange[i]));
          if (!(lastPosition > screenWidth * screenHeight)) {
            document.getElementById(lastPosition).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            document.getElementById(lastPosition + 1).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            document.getElementById(lastPosition - screenWidth).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            document.getElementById(lastPosition - screenWidth + 1).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
            
          }

          // change color of balls, or keep them black
          let color = `rgb(${0}, ${0}, ${0})`;
          if (multiColored = true && nextColor != "none") {
            colorOfBall[i] = nextColor;
          }
          if (multiColored == true && colorOfBall[i] == undefined) {
            colorOfBall[i] = ballColor[colorPosition];
            if (ballNumber - 1 == colorPosition) {
              colorPosition = 0;
            } else {
              colorPosition++;
            }
          }
          // change color of current pixle
          let position = Math.round((y[i] * screenWidth) + x[i]);
          if (!(position > screenWidth * screenHeight)) {
            document.getElementById(position).style.backgroundColor = color;
            document.getElementById(position + 1).style.backgroundColor = color;
            document.getElementById(position - screenWidth).style.backgroundColor = color;
            document.getElementById(position - screenWidth + 1).style.backgroundColor = color;
          } else if (x[i] != "done") {
            nextColor = color;
            x[i] = "done";
          }

          // change positions
          y[i] = y[i] - yChange[i];
          x[i] = x[i] - xChange[i];

          // change acceleration
          yChange[i] = yChange[i] - 1;
        }
      }
      // change the number of times move has happend
      times++;
      nextColor = "none";
    }
  }       
}
