let sliders = document.querySelector(".sliders");
let slider = document.querySelectorAll(".slider");
let preveBtn = document.querySelector(".preveBtn");
let NextBtn = document.querySelector(".NextBtn");

let counter = 0;

slider[counter].classList.add("active");

preveBtn.addEventListener("click", () => {
    slider[counter].classList.remove("active");

    if (counter === 0) {
        counter = slider.length - 1;
    }

    else {
        counter = counter - 1;
    }

    // counter = (counter === slider.length - 1) ? 0 : counter + 1;  // secound Methode.
    slider[counter].classList.add("active");
    sliders.style.transform = `translateX(-${counter * 100}%)`
})

NextBtn.addEventListener("click", () => {
    slider[counter].classList.remove("active");

    if (counter === slider.length - 1) {
        counter = 0;
    }

    else {
        counter = counter + 1;
    }
    // counter = (counter === slider.length - 1) ? 0 : counter + 1;  // secound Methode.
    slider[counter].classList.add("active");
    sliders.style.transform = `translateX(-${counter * 100}%)`
})
