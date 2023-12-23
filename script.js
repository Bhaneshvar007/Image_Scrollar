let cardContainer = document.querySelector(".cardContainer")
let cards = document.querySelectorAll(".cards")

let preveBtn = document.querySelector(".LeftAro")
let NextBtn = document.querySelector(".RightAro")


let cardIndex = 0;
cards[cardIndex].classList.add("active");

preveBtn.addEventListener("click", () => {
    cards[cardIndex].classList.remove("active");

    if (cardIndex === 0) {
        cardIndex = cards.length - 1;
    }
    else {
        cardIndex = cardIndex - 1;
    }
    cards[cardIndex].classList.add("active");
    cardContainer.style.transform = `translateX(-${90 * cardIndex}%)`
})

NextBtn.addEventListener("click", () => {
    // alert("")
    cards[cardIndex].classList.remove("active");

    if (cardIndex === cards.length - 1) {
        cardIndex = 0;
    }
    else {
        cardIndex = cardIndex + 1;
    }
    cards[cardIndex].classList.add("active");
    cardContainer.style.transform = `translateX(-${90 * cardIndex}%)`
})