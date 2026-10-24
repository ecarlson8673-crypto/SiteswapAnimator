// animate a synchronous multiplex pattern
function animateBoth(pattern) {

document.getElementById("temporaryText").innerHTML = "check 0.1";
  
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

document.getElementById("ex").innerHTML = "check 0.2";

  // how much balls change x and y
  let xChange = [];
  let yChange = [];

  // amount ball changes in x durection
  let change = [];
  change[2] = 0;
  change[4] = 1;
  change[6] = 1;
  change[8] = 1;

  let changeX = []
  changeX[2] = -7;
  changeX[4] = -3;
  changeX[6] = -2.5;
  changeX[8] = -1.5;
  
  // position of balls
  let x = [];
  let y = [];

  // durection ball is going
  let durection = "L";
  // position in pattern
  let current = 0;
  /* How Position Works
        current = which of these () pattern is currently working with
        j = left or right hand, (x,y) in other words x or y
        k = which simbol of x or y in ()
  */
  
  // how long between frames
  let time = 100;
  let startTime = new Date().getTime();

  // how many times move interval has happend
  let times = 0;

document.getElementById("ex").innerHTML = "check 0.3";

  // move
  setInterval(moveBoth, 2);
  function moveBoth() {
    let currentTime = new Date().getTime();
    if (currentTime > startTime + time) {
      startTime = new Date().getTime();
      for (let i = 0; i < (times / 4); i++) {
        for (let j = 0; j < 2; j++) {
          for (let k = 0; k < pattern[current][j].length; k++) {

document.getElementById("ex").innerHTML = "check 1";
            
            // if current toss is a x then continue on to next iteration
            if (pattern[current][j][k].toUpperCase() == "X") {
              continue;
            }
            
            // get the current toss
            let toss = Number(pattern[current][j][k]);

            // check if this ball is crossing or not
            let crossing = false;
            if (pattern[current][j].length - 1 > k) {
              if (pattern[current][j][k + 1].toUpperCase() == "X") {
                crossing = true;
              }
            }

document.getElementById("ex").innerHTML = "check 2";
            
            // add a new ball
            if (toss == 0) {
              x[x.length] = "blank";
            } else {
              // starting position of balls
              if (j == 0) {
                x[x.length] = 35;
              } else {
                x[x.length] = screenWidth - 35;
              }

              y[x.length] = screenHeight - 1;

              // change in position
              if (j == 0) {
                if (crossing == true) {
                  xChange[x.length] = changeX[toss];
                } else {
                  xChange[x.length] = change[toss];
                }
              } else {
                if (crossing == true) {
                  xChange[x.length] = changeX[toss] * -1;
                } else {
                  xChange[x.length] = change[toss] * -1;
                }
              }

              yChange[x.length] = (toss * 2) - 1;
            }

document.getElementById("ex").innerHTML = "check 3";
            
          }
        }

        // change position in pattern
        if (pattern.length - 1 =< current) {
          current = 0;
        } else {
          current++;
        }
      }
      times++;

document.getElementById("ex").innerHTML = "check 4";

      for (let i = 0; i < x.length; i++) {
        // move balls while in air
        if (x[i] != "blank") {
          // reset color of last position
          let lastPosition = Math.round(((y[i] + (yChange[i] + 1)) * screenWidth) + (x[i] + xChange[i]));
          if (!(lastPosition > screenWidth * screenHeight)) {
            document.getElementById(lastPosition).style.backgroundColor = `rgb(${200}, ${200}, ${200})`;
          }

          // change color of correct pixle
          let position = Math.round((y[i] * screenWidth) + x[i]);
          if (!(position > screenWidth * screenHeight)) {
            document.getElementById(position).style.backgroundColor = `rgb(${0}, ${0}, ${0})`;
          }

          // change position of ball
          y[i] = y[i] - yChange[i];
          x[i] = x[i] - xChange[i];

          // change change to make acceleration
          yChange[i] = yChange[i] - 1;
        }
      }

document.getElementById("ex").innerHTML = "check 5";
      
    }
  }
}
