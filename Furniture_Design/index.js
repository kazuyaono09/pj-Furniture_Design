const clickBtn = document.querySelector(".humbergar-menu");
const clickMenu = document.querySelector(".header-navi");

clickBtn.addEventListener("click",function() {
  this.classList.toggle("click-btn");
  clickMenu.classList.toggle("active");
});