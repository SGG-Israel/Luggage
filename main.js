let offset = 0;
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".left-next").addEventListener("click", function () {
  offset = offset + 155;
  if (offset > 1050) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
document.querySelector(".right-next").addEventListener("click", function () {
  offset = offset - 155;
  if (offset < 0) {
    offset = 1050;
  }
  sliderLine.style.left = -offset + "px";
});
