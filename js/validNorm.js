// check if a normal pattern is valid or not
function validNorm(pattern) {
  valid = true;

  // the position in the patter as the program loops through it
  let position = 0;
  // the height of balls in pattern as looping through
  let throws = [];

  // run through pattern
  for (let i = 0; i < pattern.length * 10; i++) {
    // the current throw the pattern is testing
    throws[i] = Number(pattern[posiiton]);

    // every beat there should be one ball in hand
    let throwsInHand = 0;
    // check how many balls in hand that beat
    for (let j = 0; j < i < j++) {
      if (throws[j] == 0) {
        throwsInHand++;
      }
      throws[j] = throws[j] - 1;
    }

    // check how many balls in hand that beat
    if (throwsInHand > 1) {
      valid = false;
    }
    
    // advance to next position in pattern
    if (position == pattern.length - 1) {
      position = 0;
    } else {
      position++;
    }
  }
}
