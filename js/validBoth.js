// check if a synchronous multiplex pattern is valid
function validBoth(pattern) {
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

  // current position in pattern
  let current = 0;
  // which hands balls going to should also be how many balls needed in that hand that beat
  let hand = [];
  // predict where balls need to go to match against where they actually go they should match
  let predictHand = [];

  // predict where balls are going
  for (let i = 0; i < pattern.length; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < pattern[i][j].length; k++) {
        if (pattern[i][j][k].toUpperCase() != "X") {
          if (j == 0) {
            if (predictHand[i] == undefined) {
              predictHand[i] = "R";
            } else {
              predictHand[i] = predictHand[i] + "R";
            }
          } else {
            if (predictHand[i] == undefined) {
              predictHand[i] = "L";
            } else {
              predictHand[i] = predictHand[i] + "L";
            }
          }
        }
      }
    }
  }

  // current = which (), j = which x or y in (x,y), k = which x or y in ([xy], x) 
  // check if balls going to correct hands
  for (let i = 0; i < pattern.length * 50; i += 2) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < pattern[current][j].length; k++) {
        // if current position in pattern is an X then continue to next
        if (pattern[current][j][k].toUpperCase() == "X") {
          continue;
        }
        // current height of ball
        let toss = Number(pattern[current][j][k]);
        // check if toss is odd
        if (toss % 2 != 0) {
          document.getElementById("errorMessage").innerHTML = "There can be no odd numbers in a synchronous multiplex pattern.";
          valid = false;
          return;
        }
        // check if ball is crossing
        let crossing = false;
        if (pattern[current][j].length - 1 > k) {
          if (pattern[current][j][k + 1].toUpperCase() == "X") {
            if (j == 0) {
              updateHand((i + toss), "L");
            } else {
              updateHand((i + toss), "R");
            }
          } else {
            if (j == 0) {
              updateHand((i + toss), "R");
            } else {
              updateHand((i + toss), "L");
            }
          }
        } else {
          if (j == 0) {
            updateHand((i + toss), "R");
          } else {
            updateHand((i + toss), "L");
          }
        }
      }
    }

    // increase position in pattern
    if (pattern.length - 1 <= current) {
      current = 0;
    } else {
      current++;
    }
  }

  // assyn hand a value of "R" or "L"
  function updateHand(i, durection) {
    if (hand[i] == undefined) {
      hand[i] = durection;
    } else {
      hand[i] = hand[i] + durection;
    }
  }

  // remove all blank spaces from the hand code
  for (let i = 0; i < hand.length; i++) {
    if (hand[i] == undefined) {
      hand.splice(i, 1);
    }
  }

  // compare predicted from actual to see if pattern is posible
  for (let i = 0; i < predictHand.length - (predictHand.length / 10); i++) {
    let RActual = 0;
    let LActual = 0;
    let RPredict = 0;
    let LPredict = 0;
    for (let j = 0; j < predictHand[i].length; j++) {
      // the number of R and L in predicted
      if (predictHand[i][j] == "R") {
        RPredict++;
      } else if (predictHand[i][j] == "L") {
        LPredict++;
      }
      // number of R and L in actual
      if (hand[i + (pattern.length * 2)][j] == "R") {
        RActual++;
      } else if (hand[i + (pattern.length * 2)][j] == "L") {
        LActual++;
      }
    }
    // check if actual and predicted are the same
    if (RActual != RPredict || LActual != LPredict) {
      valid = false;
    }
  }

  // tell user pattern is not valid
  if (valid == false) {
    //document.getElementById("errorMessage").innerHTML = "Sorry, this pattern is not possible.";
    document.getElementById("errorMessage").innerHTML = predictHand + "<br><br>" + hand;;
  }
}
