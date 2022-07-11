
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 



const frontButton = document.querySelectorAll(".btn-front");
const card = document.querySelectorAll(".card-container")

for(let i=0; i<frontButton.length;i++){
  frontButton[i].addEventListener("click",()=>{
    card[i].classList.toggle("hover");
  })  
}

const backButton = document.querySelectorAll(".btn-back");
for(let i=0;i<backButton.length;i++){
  backButton[i].addEventListener("click",()=>{
    card[i].classList.toggle("hover");
  })
}


//   all ------------------
function initParadoxWay() {
  "use strict";
 
  if ($(".testimonials-carousel").length > 0) {
      var j2 = new Swiper(".testimonials-carousel .swiper-container", {
          preloadImages: false,
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          grabCursor: true,
          mousewheel: false,
          centeredSlides: true,
          pagination: {
              el: '.tc-pagination',
              clickable: true,
              dynamicBullets: true,
          },
          navigation: {
              nextEl: '.listing-carousel-button-next',
              prevEl: '.listing-carousel-button-prev',
          },
          breakpoints: {
              1024: {
                  slidesPerView: 3,
              },
              
          }
      });
  }
  
// bubbles -----------------
  
  
  setInterval(function () {
      var size = randomValue(sArray);
      $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
      $('.individual-bubble').animate({
          'bottom': '100%',
          'opacity': '-=0.7'
      }, 4000, function () {
          $(this).remove()
      });
  }, 350);
  
}

//   Init All ------------------
$(document).ready(function () {
  initParadoxWay();
});