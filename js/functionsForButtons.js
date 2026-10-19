{
  document.getElementById("cover").style.display = "none";
  let ideasOpen = false;
  let explanationOpen = false;
  // ideas for new juggling patterns to learn or try
  function ideas() {
    if (ideasOpen == false && explanationOpen == false) {
      document.getElementById("cover").style.display = "";
    } else {
      document.getElementById("cover").style.display = "none";
    }
  }
  // instructions for how to siteswap works
  function explanation() {
    if (explanationOpen == false && ideasOpen == false) {
      document.getElementById("cover").style.display = "";
    } else {
      document.getElementById("cover").style.display = "none";
    }
  }
}
