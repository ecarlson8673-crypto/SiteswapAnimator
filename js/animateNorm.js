// animate a normal pattern if it is valid
funciton animateNorm(pattern) {
  // posiiton in pattern
  let current = 0;
  // starting durrection of the ball
  let durection = "L";
  // how often a frame is ms
  let time = 100;
  let startTime = new Date().getTime();

  // position of ball
  let x = [];
  let y = [];

  // how much x changes each time depending on the how high throw is 
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

  // how much ball position is changing in y durection
  let xChange = [];
  let yChange = [];

  // number of times throw loop has been trigured
  let times = 0;

  // animate
  setInterval(move, 2);
  function move() {
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
              x[i] = 35;
            } else {
              x[i] = screenWidth - 35;
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
            document.getElementById(lastPosition).style.backgroundColor = `rgb(${200}, ${200}, ${200})`;
          }

          // change color of current pixle
          let position = Math.round((y[i] * screenWidth) + x[i]);
          if (!(position > screenWidth * screenHeight)) {
            document.getElementById(position).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
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
    }
  }       
}
