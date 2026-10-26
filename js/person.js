// create a person to juggle the pattern
function person() {
  // code to create svg elements with js
  {
    let points = "0,0 0,0 0,0 0,0";
    const body = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    body.classList.add("polygon");
    body.id = "body";
    document.getElementById("svgContainer").appendChild(body);
  }
  {
    const head = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    head.classList.add("circle");
    head.setAttribute("cx", "0");
    head.setAttribute("cy", "0");
    head.setAttribute("r", "0");
    head.id = "head";
    document.getElementById("svgContainer").appendChild(head);
  }
  for (let i = 0; i < 4; i++) {
    const arm = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    arm.classList.add("arm");
    arm.id = `arm${i}`;
    document.getElementById("svgContainer").appendChild(arm);
  }
  
  // create lines for arms here
  // move them based on time
}
