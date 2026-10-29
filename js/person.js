// create a person to juggle the pattern
function person() {
  let startTime = new Date().getTime();

  let armPosition1;
  let armPosition2;
  if (type == "norm") {
    armPosition1 = 0;
    armPosition2 = 4;
  } else if (type == "mult") {
    armPosition1 = 2;
    armPosition2 = 6;
  } else if (type == "sync") {
    armPosition1 = 0;
    armPosition2 = 0;
  } else if (type == "both") {
    armPosition1 = 1;
    armPosition2 = 1;
  }
  
  personInterval = setInterval(movePerson, 2);
  function movePerson() {
    let currentTime = new Date().getTime();
    if (startTime + (time) < currentTime) {
      startTime = new Date().getTime();

      // four different positions of lower arm
      if (armPosition1 == 0 || armPosition1 == 6) {
        document.getElementById("arm1").setAttribute("x2", `${70}`);
        document.getElementById("arm1").setAttribute("y2", `${250}`);
      } else if (armPosition1 == 1) {
        document.getElementById("arm1").setAttribute("x2", `${105}`);
        document.getElementById("arm1").setAttribute("y2", `${265}`);
      } else if (armPosition1 == 2) {
        document.getElementById("arm1").setAttribute("x2", `${135}`);
        document.getElementById("arm1").setAttribute("y2", `${250}`);
      } else if (armPosition1 == 4) {
        document.getElementById("arm1").setAttribute("x2", `${105}`);
        document.getElementById("arm1").setAttribute("y2", `${250}`);
      } else if (armPosition1 == 7) {
        armPosition1 = -1;
      }
      armPosition1++;

      if (armPosition2 == 0 || armPosition2 == 6) {
        document.getElementById("arm2").setAttribute("x2", `${330}`);
        document.getElementById("arm2").setAttribute("y2", `${250}`);
      } else if (armPosition2 == 1) {
        document.getElementById("arm2").setAttribute("x2", `${295}`);
        document.getElementById("arm2").setAttribute("y2", `${265}`);
      } else if (armPosition2 == 2) {
        document.getElementById("arm2").setAttribute("x2", `${265}`);
        document.getElementById("arm2").setAttribute("y2", `${250}`);
      } else if (armPosition2 == 4) {
        document.getElementById("arm2").setAttribute("x2", `${295}`);
        document.getElementById("arm2").setAttribute("y2", `${250}`);
      } else if (armPosition2 == 7) {
        armPosition2 = -1;
      }
      armPosition2++;
    }
  }
}
