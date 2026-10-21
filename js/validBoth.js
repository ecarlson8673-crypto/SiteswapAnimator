// check if a synchronous multiplex pattern is valid

/*
needs to do
  check if right number of balls in each had every beat
  check if balls going to correct hand
*/
function validBoth(pattern) {
  // example pattern to help me think (2,4)([4x4],2x)
  // should be R,L,RR,L,R,L,RR,L
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

  let test = "";

  // current = which (), j = which x or y in (x,y), k = which x or y in ([xy], x) 
  // check if balls going to correct hands
  for (let i = 0; i < pattern.length * 50; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < pattern[current][j].length; k++) {
        test = pattern[current][j][k] + "" + test;
        // if current position in pattern is an X then continue to next
        if (pattern[current][j][k].toUpperCase() == "X") {
          continue;
        }
        // current height of ball
        let toss = Number(pattern[current][j][k]);
        // check if ball is crossing
        let crossing = false;
        if (pattern[current][j][k].length - 1 < k) {
          if (pattern[current][j][k + 1].toUpperCase() == "X") {
            crossing = true;
          }
        }

        // if 0 ball from L
        if (j == 0) {
          if (crossing == true) {
            updateHand((i + toss), "R");
          } else {
            updateHand((i + toss + 1), "L");
          }
        } else {
          if (crossing == true) {
            updateHand((i + toss + 1), "L");
          } else {
            updateHand((i + toss), "R");
          }
        }
      }
    }

    // increase position in pattern
    if (pattern.length - 1 > current) {
      current = 0;
    } else {
      current++;
    }
  }

  // assyn hand a value of "R" or "L"
  function updateHand(i, durection) {
    if (hand[i] != "L" && hand[i] != "R") {
      hand[i] = durection;
    } else {
      hand[i] = hand[i] + durection;
    }
  }

  // how many balls will land in each hand each beat
  for (let i = 0; i < pattern.length * 50; i += 2) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < pattern[current][j].length; k++) {
      
      }
    }

    // increase position in pattern
    if (pattern.length - 1 >= current) {
      current = 0;
    } else {
      current++;
    }
  }
  document.getElementById("errorMessage").innerHTML = hand + "pattern : " + pattern + "<br>" + test;
}
