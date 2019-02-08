var mainMenu = document.querySelector('.main-menu');
var menuShow = document.querySelector('.menu-show');
// console.log(mainMenu);
menuShow.addEventListener('click', function(){
  mainMenu.classList.toggle('expanded');
})