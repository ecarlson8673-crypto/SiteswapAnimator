// check if a multiplex pattern is valid or not
function validMult(pattern) {
  // array to keep track of throws
  let throws = [];
  // position in pattern
  let position = 0;
  // check if in multiplex or not
  let inMult = false;
  // number of times loop runs while in multiplex
  let times = 0;

  // run through pattern to test it
  for (let i = 0; i < pattern.length * 100; i++) {
    // check going into multiplex or normal throw
    if (pattern[position] == "[") {
      inMult = true;
      times = 0;
    } else if (pattern[position] == "]") {
      inMult = false;

      //check if pattern is valid
      let throwsInHand = 0;
      for (let j = 0; j < throws.length; j++) {
        if (throws[j] == 0) {
          thowsInHand++;
        }
        throws[j]--;
      }
      // check if there is to many or to few balls in hand
      if (throwsInHand != times && i > pattern.length * 10) {
        valid = false;
      }
      times = 1;
    } else {
      let number = Number(pattern[position]);
      throws[throws.length] = number;

      // check if in multiplex if so increase number of times
      if (inMult == true) {
        times++;
      }

      // check if pattern is valid
      if (inMult == false) {
        let throwsInHand = 0;
        for (let j = 0; j < throws.length; j++) {
          if (throws[j] == 0) {
            throwsInHand++;
          }
          throws[j]--;
        }
        if (throwsInHand != times && i > pattern.length * 10) {
          valid = false;
        }
      }
    }
    // increase the position in the pattern
    if (pattern.length - 1 <= position) {
      position = 0;
    } else {
      position++;
    }
  }
}
