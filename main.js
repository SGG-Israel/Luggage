let offset = 0; // смещение от левого края
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".left-next").addEventListener("click", function () {
  //Тут мы находим нашу кнопку Вправо и слушаем её на действие Click //
  offset = offset + 155; // Запись можно сократить и написать  offset += 200;
  if (offset > 1050) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px"; // Сдвигаем нашу линию с блоками на ширину offset
});
document.querySelector(".right-next").addEventListener("click", function () {
  offset = offset - 155;
  if (offset < 0) {
    offset = 1050;
  }
  sliderLine.style.left = -offset + "px";
});
