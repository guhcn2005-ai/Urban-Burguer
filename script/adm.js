let list = document.querySelectorAll('.navegation ul li');

function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('mouseover', activeLink));

//menu Toggle

let toggle = document.querySelector(".toggle");
let navegation = document.querySelector('.navegation');
let main = document.querySelector('.main');

toggle.onclick = function(){
    navegation.classList.toggle("active");
    main.classList.toggle("active");
};