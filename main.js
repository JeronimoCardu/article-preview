const shareBtn = document.getElementById("shareBtn");
const authorContainer = document.getElementById("author-container");
const shareContainer = document.getElementById("share-container");
const optionShare = document.querySelectorAll("#optionShare");
const svgElement = shareContainer.querySelector("svg");

let widthWindow = window.innerWidth;
window.addEventListener("resize", () => {
  widthWindow = window.innerWidth;
});

shareBtn.addEventListener("click", () => {
  if (shareContainer.style.display == "flex") {
    shareContainer.style.display = "none";
  } else {
    shareContainer.style.display = "flex";
  }
  if (widthWindow > 375) {
    svgElement.style.display = "none";
  } else {
    svgElement.style.display = "block";
  }
  if (widthWindow <= 375) {
    authorContainer.style.padding = "0";
  }
});

optionShare.forEach((a) => {
  a.addEventListener("click", () => {
    shareContainer.style.display = "none";
    authorContainer.style.padding = "1rem 2rem";
  });
});
