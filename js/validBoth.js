// check if a synchronous multiplex pattern is valid

/*
needs to do
  check if right number of balls in each had every beat
  check if balls going to correct hand
*/
function validBoth(pattern) {
  // example pattern to help me think (2,4)([4x4],2x)
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

  // keep track of throws
  let throws = [];
  // current position in pattern
  let current = 0;
  // which hands balls going to 1st = L, 2nd = R
  let hand = [];

  // check if balls going to correct hands
  for (let i = 0; i < pattern.length * 50; i += 2) {
    for (let j = 0; j < 2; j++) {
      // current height of ball
      let toss = Number(pattern[current][j]);
      // check if ball is crossing
      let crossing = false;
      if (pattern[current].length - 1 > j) {
        if (pattern[current][j + 1].toUpperCase() == "X") {
          crossing = true;
        }
      }

      // if 0 ball from L
      if (j == 0) {
        if (crossing == true) {
          hand[i] == undefined ? hand[i] = "R" : hand[i] = hand[i] + "R";
        } else {
          hand[i + 1] == undefined ? hand[i + 1] = "L" : hand[i + 1] = hand[i + 1] + "L";
        }
      } else {
        if (crossing == true) {
          hand[i + 1] == undefined ? hand[i + 1] = "L" : hand[i + 1] = hand[i + 1] + "L";
        } else {
          hand[i] == undefined ? hand[i] = "R" : hand[i] = hand[i] + "R";
        }
      }
    }

    // increase position in pattern
    if (pattern.length - 1 >= current) {
      current = 0;
    } else {
      current++;
    }
  }
  document.getElementById("errorMessage").innerHTML = hand + "pattern : " + pattern;
}
