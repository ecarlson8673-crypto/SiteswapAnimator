// what type of pattern is it
function type(type, pattern, valid, errorMessage) {
  if (pattern.search(/[{}*&^%$#@!abcdefghijklmnopqrstuvwyz]/gi) > -1) {
    valid = false;
    errorMessage = "An invalid symbol was used";
  } else {
    if (pattern.search(/\D/g) == -1) {
      type = "norm;
    } else if (pattern.search(/\(/) > -1) {
      type = "sync";
      if (pattern.search(/\[/) > -1) {
        type = "both";
      }
    } else if (pattern.search(/\[/) > -1) {
      type = "mult";
    }
  }
}
