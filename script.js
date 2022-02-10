
const buttonElement = document.querySelector("#openModal");
const modalElement = document.querySelector(".modal-wrapper");

buttonElement.addEventListener("click", () => {
    buttonElement.hidden = true;
    modalElement.classList.remove("invisible");
});

document.addEventListener("keydown", event => {
    const isEscKey = event.code === "Escape";
    const containsInvisibleClass = modalElement.classList.contains("invisible");

    if(isEscKey && !containsInvisibleClass) {
        buttonElement.hidden = false;
        modalElement.classList.add("invisible");
    }
});
