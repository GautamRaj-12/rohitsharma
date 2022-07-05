const hamburger = document.querySelector(".hamburger");
const navbarNavCustom = document.querySelector(".navbar-nav-custom");
let navLinks = document.querySelectorAll(".nav-link-custom")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navbarNavCustom.classList.toggle("active");
})

navLinks.forEach(n => n.addEventListener("click",()=>{
    hamburger.classList.remove("active");
    navbarNavCustom.classList.remove("active");
}))

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
