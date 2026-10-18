// check if a syncronous pattern is valid
function validSync(pattern) {
  // remove all uncessary stuff from siteswap
  pattern = pattern.replaceAll("(", "").replaceAll(")", "").replaceAll(",", "");

  // position in pattern
  let position = 0;
  // throws to be tested, keep track of balls as they fly through air
  let throws = [];
  // which hand is ball going to land in
  let hand = [];

  // check which hand balls are going to
  for (let i = 0; i < pattern.length * 10; i++) {
    for (let j = 0; j < 2; j++) {
      // the current number being tested
      let number = Number(pattern[position]);
      if (pattern.length - 2 >= position) {
        if (pattern[position + 1].toUppperCase() == "X") {
          if (j == 0) {
            handEquals((i + number), "L");
          } else {
            handEquals((i + number), "R");
          }
        } else {
          if (j == 0) {
            handEquals((i + number), "R");
          } else {
            handEquals((i + number), "L");
          }
        }
      } else {
        if (j == 0) {
          handEquals((i + number), "R");
        } else {
          handEquals((i + number), "L");
        }
      }

      // the hand the ball is going to land in
      function handEquals(space, durection) {
        if (hand[space] == null) {
          hand[space] = durection;
        } else {
          hand[space + 1] = durection;
        }
      }

      // increase position
      if (position >= pattern.length - 1) {
        position = 0;
      } else {
        position++;
      }
      // if the current position is an X then skip it
      if (pattern[position].toUpperCase() == "X") {
        if (position >= pattern.length - 1) {
          position = 0;
        } else {
          position++;
        }
      }
    }
  }

  // reset position
  position = 0;

  // check how many balls in hand each beat
  for (let i = 0; i < pattern.length * 10; i++) {
    // if current position is an X then move to next
    if (pattern[current].toUpperCase() == "X") {
      if (position >= pattern.length - 1) {
        position = 0;
      } else {
        position++;
      }
    }

    // current number in pattern
    let number = Number(pattern[current]);
    throws[i] = number;

    // increase position
    if (position >= pattern.length - 1) {
      position = 0;
    } else {
      position++;
    }

    //check if there is two balls in hand each beat
    let ballsInHand = 0;
    // check if balls in left and right hand
    let left = false;
    let right = false;
    for (let j = 0; j < i; j++) {
      if (i % 2 == 0) {
        if (throws[j] == 0) {
          ballsInHand++;
          throws[j] = "done";
        }
        // subtract 2 every 2 beats
        throws[j] = throws[j] - 2;
      }
    }

    // check conditions to see pattern is posible
    if (i % 2 == 0 && i > 8) {
      if (ballsInHand != 2) {
        valid = false;
      }
    }

    // check if there is a ball in each hand
    if (i % 2 == 0 && i > 8) {
      if (hand[i] == "R" && hand[i + 1] != "L" || hand[i] == "L" && hand[i + 1] != "R") {
        valid = false;
      }
    }
  }       
}
