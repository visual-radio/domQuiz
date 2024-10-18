var disneyImg = document.querySelectorAll(".query_selector img");
console.log(disneyImg.length);

for (i = 0; i < disneyImg.length; i++) {
  disneyImg[i].style.width = "160px";
  if (i === 1) {
    disneyImg[i].style.border = "2px solid #f00";
  }
}