// inilize the container that the siteswap is running in

{
  let screenWidth = 110;
  let screenHeight = 160;

  for (let i = 0; i < screenWidth * screenHeight; i++) {
    let div = document.createElement("div");
    div.classList.add("pixle");
    div.id = i;
    document.getElementById("container").appendChild(div);
  }
}
