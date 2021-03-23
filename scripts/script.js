let modal = document.getElementsByClassName("modal")[0];
let modalImg = document.getElementsByClassName("modal-content")[0];
let images = Array.from(document.getElementsByClassName("chapter-img"));
let query = window.matchMedia("(max-width: 768px)");

console.log(modal);
console.log(modalImg);
console.log(images);

function setModal () {
        modal.style.display = "flex";
        modalImg.src = this.src;
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";
}
images.forEach(image => image.addEventListener("click", setModal));

let span = document.getElementsByClassName("close")[0];
console.log(span);

span.onclick = function() {
    modal.style.display = "none";
};