const buttonone = document.querySelector(".slide-button-one");
const buttontwo = document.querySelector(".slide-button-two");
const buttonthree = document.querySelector(".slide-button-three");
const slideone = document.querySelector(".slide-one");
const slidetwo = document.querySelector(".slide-two");
const slidethree = document.querySelector(".slide-three");


buttonone.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.add("slide-current");
    buttonone.classList.add("slider-active-button");
    slidetwo.classList.remove("slide-current");
    buttontwo.classList.remove("slider-active-button-two");
    slidethree.classList.remove("slide-current");
    buttonthree.classList.remove("slider-active-button-three");
});

buttontwo.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.remove("slide-current");
    buttonone.classList.remove("slider-active-button");
    slidetwo.classList.add("slide-current");
    buttontwo.classList.add("slider-active-button-two");
    slidethree.classList.remove("slide-current");
    buttonthree.classList.remove("slider-active-button-three");
});

buttonthree.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    slideone.classList.remove("slide-current");
    buttonone.classList.remove("slider-active-button");
    slidetwo.classList.remove("slide-current");
    buttontwo.classList.remove("slider-active-button-two");
    slidethree.classList.add("slide-current");
    buttonthree.classList.add("slider-active-button-three");
});