{
  document.getElementById("cover").style.display = "none";
  document.getElementById("explanationText").style.display = "none";
  document.getElementById("ideasText").style.display = "none";
  document.getElementById("settingsPage").style.display = "none";
  // check if either page is open
  let ideasOpen = false;
  let explanationOpen = false;
  let settingsOpen = false;

  // ideas for new juggling patterns to learn or try
  function ideas() {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    if (ideasOpen == false && explanationOpen == false && settingsOpen == false) {
      ideasOpen = true;
      // show text
      document.getElementById("cover").style.display = "";
      document.getElementById("ideasText").style.display = "";
      // hide other buttons
      document.getElementById("explanation").style.display = "none";
      document.getElementById("settings").style.display = "none";
      // change current button
      document.getElementById("ideas").innerHTML = "Back";
    } else if (ideasOpen == true) {
      ideasOpen = false;
      // hide text
      document.getElementById("cover").style.display = "none";
      document.getElementById("ideasText").style.display = "none";
      // change buttons back to original display
      document.getElementById("explanation").style.display = "";
      document.getElementById("settings").style.display = "";
      document.getElementById("ideas").innerHTML = "Siteswaps";
    }
  }

  // instructions for how to siteswap works
  function explanation() {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    if (explanationOpen == false && ideasOpen == false && settingsOpen == false) {
      explanationOpen = true;
      // show text
      document.getElementById("cover").style.display = "";
      document.getElementById("explanationText").style.display = "";
      // hide other buttons
      document.getElementById("ideas").style.display = "none";
      document.getElementById("settings").style.display = "none";
      // change current button
      document.getElementById("explanation").innerHTML = "Back";
    } else if (explanationOpen == true) {
      explanationOpen = false;
      // hide text
      document.getElementById("cover").style.display = "none";
      document.getElementById("explanationText").style.display = "none";
      // show all buttons and change current one back
      document.getElementById("ideas").style.display = "";
      document.getElementById("settings").style.display = "";
      document.getElementById("explanation").innerHTML = "Siteswap Explained";
    }
  }

  // settings page
  function settings() {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
    if (settingsOpen == false && ideasOpen == false && explanationOpen == false) {
      settingsOpen = true;
      // show settings
      document.getElementById("cover").style.display = "";
      document.getElementById("settingsPage").style.display = "";
      // hide other buttons
      document.getElementById("ideas").style.display = "none";
      document.getElementById("explanation").style.display = "none";
      // change current button
      document.getElementById("settings").innerHTML = "Back";
    } else if (settingsOpen == true) {
      settingsOpen = false;
      // hide settings
      document.getElementById("cover").style.display = "none";
      document.getElementById("settingsPage").style.display = "none";
      // reset buttons
      document.getElementById("ideas").style.display = "";
      document.getElementById("explanation").style.display = "";
      document.getElementById("settings").innerHTML = "Settings";
    }
  }

  
  // functions for settings buttons
  // speed of the pattern slider
  document.getElementById("speed").oninput = function() {
    document.getElementById("speedValue").innerHTML = this.value;
    time = -1 * (Number(this.value) - 200);
  }

  // rgb ball color sliders
  document.getElementById("red").oninput = function() {
    red = this.value;
    document.getElementById("redValue").innerHTML = this.value;
    ballColor = `rgb(${red}, ${green}, ${blue})`;
  }
  document.getElementById("green").oninput = function() {
    green = this.value;
    document.getElementById("greenValue").innerHTML = this.value;
    ballColor = `rgb(${red}, ${green}, ${blue})`;
  }
  document.getElementById("blue").oninput = function() {
    blue = this.value;
    document.getElementById("blueValue").innerHTML = this.value;
    ballColor = `rgb(${red}, ${green}, ${blue})`;
  }

  let personOn = true;
  function personVisibility() {
    if (personOn == true) {
      personOn = false;
      document.getElementById("personVisibility").innerHTML = "Show Person";
      document.getElementById("svgContainer").style.display = "none";
    } else if (personOn == false) {
      personOn = true;
      document.getElementById("personVisibility").innerHTML = "Hide Person";
      document.getElementById("svgContainer").style.display = "";
    }
  }

  // make it rain for the hell of it
  // create rain
  let rainNumber = 200;
  let dropSpeed = [];
  let dropY = [];
  document.getElementById("rainContainer").style.display = "none";
  for (let i = 0; i < rainNumber; i++) {
    // create a element
    const div = document.createElement("div");
    // style it
    div.classList.add("rain");
    div.id = `drop${i}`;
    div.style.left = `${Math.random() * window.innerWidth}px`;
    div.style.height = `${(Math.random() * 10) + 10}px`;
    let g = (Math.random() * 200);
    div.style.backgroundColor = `rgba(${0}, ${g}, ${175}, ${0.25})`;
    // add it to a container
    document.getElementById("rainContainer").appendChild(div);
    // set up vaiables for positioning it
    dropSpeed[i] = (Math.random() * 10) + 5;
    dropY[i] = 0;
  }
  // add clouds
  let cloudNumber = 40;
  let cloudSpeed = [];
  let cloudX = [];
  for (let i = 0; i < cloudNumber; i++) {
    let div = document.createElement("div");
    div.id = `cloud${i}`;
    // style cloud
    let width = (Math.random() * 60) + 20;
    div.style.width = `${width}px`;
    let height = (Math.random() * 30) + 10;
    div.style.height = `${height}px`;
    div.style.position = "fixed";
    div.style.left = `${0}px`;
    let top = Math.random() * 20;
    div.style.top = `${top}px`;
    let a = (Math.random() * 0.25) + 0.5;
    div.style.backgroundColor = `rgba(${0}, ${0}, ${0}, ${a})`;
    // add element to container
    document.getElementById("rainContainer").appendChild(div);
    cloudSpeed[i] = (Math.random() * 5) + 1;
    cloudX[i] = 0;
  }
  let rainOn = false;
  let rainInterval;
  function rain() {
    if (rainOn == false) {
      rainOn = true;

      rainInterval = setInterval(moveRain, 100);
      function moveRain() {
        for (let i = 0; i < rainNumber; i++) {
          let drop = document.getElementById(`drop${i}`);
          if (dropY[i] + dropSpeed[i] > window.innerHeight) {
            drop.style.top = `${0}px`;
            let left = Math.random() * window.innerWidth;
            drop.style.left = `${left}px`;
            dropY[i] = 0;
          } else {
            dropY[i] = dropY[i] + dropSpeed[i];
            drop.style.top = `${dropY[i]}px`;
          }
        }
        for (let i = 0; i < cloudNumber; i++) {
          let cloud = document.getElementById(`cloud${i}`);
          if (cloudX[i] + cloudSpeed[i] > window.innerWidth) {
            cloud.style.left = `${0}px`;
            let top = Math.random() * 10;
            cloud.style.top = `${top}px`;
            cloudX[i] = 0;
            cloudSpeed[i] = (Math.random() * 5) + 1;
          } else {
            cloudX[i] = cloudX[i] + cloudSpeed[i];
            cloud.style.left = `${cloudX[i]}px`;
          }
        }
      }
      document.getElementById("rainButton").innerHTML = "Rain Off";
      document.getElementById("rainContainer").style.display = "";
    } else if (rainOn == true) {
      rainOn = false;
      clearInterval(rainInterval);
      document.getElementById("rainButton").innerHTML = "Rain On";
      document.getElementById("rainContainer").style.display = "none";
    }
  }
}
