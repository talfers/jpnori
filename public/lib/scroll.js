const nav = document.querySelector('nav');
const brand = document.querySelector('.logo');

window.onload = function() {
  if(window.scrollY >= 50) {
    nav.style.height = nav.style.minHeight
    brand.style.height = brand.style.minHeight
  }
  nav.style.height = 200 - window.scrollY + 'px';
  brand.style.height = 72 - window.scrollY + 'px';
}

window.addEventListener('scroll', function(e){
  nav.style.height = 200 - window.scrollY + 'px';
  brand.style.height = 72 - window.scrollY + 'px';
  if(window.scrollY >= 50) {
    nav.classList = 'nav-horiz';
  } else {
    nav.classList = 'nav-vert';
  }
})
