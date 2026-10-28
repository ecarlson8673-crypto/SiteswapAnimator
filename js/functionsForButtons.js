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
    if (settingsOpen == false && ideasOpen == false && explanationOpen == false) {
      settingsOpen = true;
      // show settings
      document.getElementById("cover").style.display = "";
      document.getElementById("settingsPage").style.display = "";
      document.getElementById("settingsText").style.display = "";
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
}
