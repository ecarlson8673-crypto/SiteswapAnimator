// what type of pattern is it
function patternType(pattern) {
  valid = true;
  type = "";
  if (pattern.search(/[{}*&^%$#@!abcdefghijklmnopqrstuvwyz]/gi) > -1) {
    valid = false;
    document.getElementById("errorMessage").innerHTML = "A symbol that can not be used was used. Please try again.";
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
      document.getElementById("errorMessage").innerHTML = "Your pattern is not formatted correctly. Please try again.";
      valid = false;
    }
  }
}
