// create a person to juggle the pattern
function person() {
  let startTime = new Date().getTime();

  let armPosition = 2;
  setInterval(movePerson, 2);
  function movePerson() {
    let currentTime = new Date().getTime();
    if (startTime + (time * 2) < currentTime) {
      startTime = new Date().getTime();

      // four different positions of lower arm
      // catch, lower, throw, and middle
      // 0, 1, 2, 3
      if (armPosition == 0) {
        document.getElementById("arm1").setAttribute("x2", `${70}`);
        document.getElementById("arm1").setAttribute("y2", `${250}`);
        document.getElementById("arm2").setAttribute("x2", `${265}`);
        document.getElementById("arm2").setAttribute("y2", `${250}`);
        armPosition = 1;
      } else if (armPosition == 1) {
        document.getElementById("arm1").setAttribute("x2", `${105}`);
        document.getElementById("arm1").setAttribute("y2", `${280}`);
        document.getElementById("arm2").setAttribute("x2", `${295}`);
        document.getElementById("arm2").setAttribute("y2", `${250}`);
        armPosition = 2;
      } else if (armPosition == 2) {
        document.getElementById("arm1").setAttribute("x2", `${135}`);
        document.getElementById("arm1").setAttribute("y2", `${250}`);
        document.getElementById("arm2").setAttribute("x2", `${330}`);
        document.getElementById("arm2").setAttribute("y2", `${250}`);
        armPosition = 3;
      } else if (armPosition == 3) {
        document.getElementById("arm1").setAttribute("x2", `${105}`);
        document.getElementById("arm1").setAttribute("y2", `${250}`);
        document.getElementById("arm2").setAttribute("x2", `${295}`);
        document.getElementById("arm2").setAttribute("y2", `${280}`);
        armPosition = 0;
      }
    }
  }
}
