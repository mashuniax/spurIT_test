const collapse = document.querySelector(".collapsible__content").animate(
    { opacity: [0, 1]},    
    { duration: 300, fill: "both", easing: "ease-out" }
);

const hiddenBtn = document.querySelector(".collapsible__action--visible");
const visibleBtn = document.querySelector(".collapsible__action--hidden");


document.querySelector("button").addEventListener("click", () => {
  if (visibleBtn.style.display == "block" && hiddenBtn.style.display == "none") {
    visibleBtn.style.display = "none";
    hiddenBtn.style.display = "block";
  } else {
    visibleBtn.style.display = "block";
    hiddenBtn.style.display = "none";
  }
  if (collapse.playState === "paused") {    
    collapse.play();    
  } else {   
    collapse.reverse();  
  } 
  
});
collapse.pause();
visibleBtn.style.display = "block";
hiddenBtn.style.display = "none";
