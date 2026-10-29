// what type of pattern is it
function patternType(pattern) {
  valid = true;
  type = "";
  pattern.replaceAll(" ", "");
  if (pattern.search(/[{}*&^%$#@!abcdefghijklmnopqrstuvwyz]/gi) > -1) {
    valid = false;
    document.getElementById("errorMessage").innerHTML = "A symbol that can not be used was used.";
  } else {
    if (pattern.search(/\D/g) == -1) {
      type = "norm";
    } else if (pattern.search(/\(/) > -1 && pattern.search(/\)/) > -1) {
      type = "sync";
      if (pattern.search(/\[/) > -1 && pattern.search(/\]/) > -1) {
        type = "both";
      }
    } else if (pattern.search(/\[/) > -1 && pattern.search(/\]/) > -1) {
      type = "mult";
    } else {
      document.getElementById("errorMessage").innerHTML = "Your pattern is not formatted correctly.";
      valid = false;
    }
  }
}

// how many balls are in the pattern
function numberOfBalls(pattern) {
  if (type == "norm") {
    // total number of all numbers in pattern added
    let total = 0;
    for (let i = 0; i < pattern.length; i++) {
      total = total + Number(pattern[i]);
    }
    ballNumber = total / pattern.length;
  } else if (type == "sync") {
    // total of all numbers added
    let total = 0;
    //length of numbers
    let length = 0;
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] != "(" && pattern[i] != ")" && pattern[i].toUpperCase() != "X") {
        total = total + Number(pattern[i]);
        length++;
      }
    }
    ballNumber = total / length;
  } else if (type == "mult") {
    // total number of all numbers added
    let total = 0;
    // number of numbers
    let length = 0;
    // check if pattern in mult or not
    let inMult = false;
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] == "[") {
        inMult = true;
        length++;
      } else if (pattern == "]") {
        inMult = false;
      } else {
        total = total + Number(pattern[i]);
        if (inMult == false) {
          length++;
        }
      }
    }
    ballNumber = total / length;
  } else if (type == "both") {
    // number of throws all added
    let total = 0;
    // number of numbers
    let length = 0;
    // whether in multi or not
    let inMult = false
    for (let i = 0; i < pattern.length; i++) {
      if (pattern[i] == "[") {
        inMult = true;
        length++;
      } else if (pattern[i] == "]") {
        inMult = false;
      }
      if (Number(pattern[i]) != "NaN") {
        total = total + Number(pattern[i]);
        if (inMult == false) {
          length++;
        }
      }
    }
    ballNumber = total / length;
  }
}
