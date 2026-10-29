// inilize the container that the siteswap is running in

{
  for (let i = 0; i < screenWidth * screenHeight; i++) {
    let div = document.createElement("div");
    div.classList.add("pixle");
    div.id = i;
    document.getElementById("container").appendChild(div);
  }

  // if person tries another pattern reset everything
  function reset() {
    // reset screen where pattern is juggled
    for (let i = 0; i < screenWidth * screenHeight; i++) {
      document.getElementById(i).style.backgroundColor = `rgba(${255}, ${255}, ${255}, ${0})`;
    }
    // reset person
    document.getElementById("arm1").setAttribute("x2", `${70}`);
    document.getElementById("arm1").setAttribute("y2", `${250}`);
    document.getElementById("arm2").setAttribute("x2", `${330}`);
    document.getElementById("arm2").setAttribute("y2", `${250}`);
    // reset intervals
    clearInterval(patternInterval);
    clearInterval(personInterval);
  }
}
