const collapse = document.querySelector(".collapsible__content").animate(
    { opacity: [0, 1]},    
    { duration: 300, fill: "both", easing: "ease-out" }
);

const hiddenBtn = document.querySelector(".collapsible__action--visible");
const visibleBtn = document.querySelector(".collapsible__action--hidden");


document.querySelector("button").addEventListener("click", () => {
  if (collapse.playState === "paused") {
    hiddenBtn.style.display = "block";
    visibleBtn.style.display = "none";   
    collapse.play();
    
  } else {   
    
    visibleBtn.style.display = "block";
    hiddenBtn.style.display = "none";
    collapse.reverse();  
  } 
  
});

collapse.pause();
visibleBtn.style.display = "block";
hiddenBtn.style.display = "none";
