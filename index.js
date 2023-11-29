let burger = document.querySelector ('.burger');
let menu = document.querySelector ('.nav');
let menuLinks = menu.querySelectorAll ('.nav__link');

burger.addEventListener ('click',

function () {

burger.classList.toggle('burger--active');

menu.classList.toggle('nav--active');

document.body.classList.toggle('stop-scroll');

})

menuLinks.forEach(function(el){
  el.addEventListener('click', function() {

    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');

  }) 
})


$(document).ready(function(){

  $('.feedback__left').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

