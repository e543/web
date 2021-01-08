const curtain = document.querySelector(".curtain");
const lamp = document.querySelectorAll(".lamp");
const attention = document.querySelectorAll(".attention");
const light = document.querySelector("#light");
const focus = document.querySelectorAll(".focus");

curtain.onclick = () => {
  curtain.style.transition = "top 1s cubic-bezier(0, .5, .5, 1)";
  curtain.style.top = "-100%";
  setTimeout(() => (curtain.style.display = "none"), 1000);
};

lamp[0].addEventListener("mousedown", () => {
  lamp[1].style.top = "11vh";
});

lamp[0].addEventListener("mouseup", () => {
  lamp[1].style.top = "9vh";
  turnLight();
});

turnLight = () => {
  if (light.style.opacity == 0) {
    light.style.opacity = 0.5;
    attention.forEach((item) => {
      item.style.opacity = 1;
    });
  } else {
    light.style.opacity = 0;
    attention.forEach((item) => {
      item.style.opacity = 0;
    });
  }
};

focus.forEach((item) => {
  item.onclick = () => {
    if (focus[0].style.bottom == "35vh") {
      focus[0].style.bottom = "15vh";
      focus[0].style.visibility = "hidden";
      focus[1].style.visibility = "visible";
      focus[1].style.bottom = "35vh";        
    } else {
      focus[1].style.bottom = "15vh";
      focus[1].style.visibility = "hidden";
      focus[0].style.visibility = "visible";
      focus[0].style.bottom = "35vh"; 
    }
  };
});
