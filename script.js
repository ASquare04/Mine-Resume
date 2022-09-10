document.querySelector('.header__moon').onclick = function() {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header__mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome,
}