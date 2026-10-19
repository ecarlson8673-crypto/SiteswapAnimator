{
  document.getElementById("cover").style.display = "none";
  document.getElementById("explanationText").style.display = "none";
  document.getElementById("ideasText").style.display = "none";
  // check if either page is open
  let ideasOpen = false;
  let explanationOpen = false;
  // ideas for new juggling patterns to learn or try
  function ideas() {
    if (ideasOpen == false && explanationOpen == false) {
      ideasOpen = true;
      document.getElementById("cover").style.display = "";
      document.getElementById("ideasText").style.display = "";
    } else if (ideasOpen == true) {
      ideasOpen = false;
      document.getElementById("cover").style.display = "none";
      document.getElementById("ideasText").style.display = "none";
    }
  }
  // instructions for how to siteswap works
  function explanation() {
    if (explanationOpen == false && ideasOpen == false) {
      explanationOpen = true;
      document.getElementById("cover").style.display = "";
      document.getElementById("explanationText").style.display = "";
    } else if (explanationOpen == true) {
      explanationOpen = false;
      document.getElementById("cover").style.display = "none";
      document.getElementById("explanationText").style.display = "none";
    }
  }
}
