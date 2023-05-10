let container__btn = document.querySelector("#container__btn");
let modal = document.querySelector("#modal");
let modal__btn = document.querySelector("#modal__btn");

container__btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("modal__open")
})
modal__btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.remove("modal__open")
})