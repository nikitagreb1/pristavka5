const burgerLink = document.querySelector('.burger__link');
const burgerList = document.querySelector('.burger__list');
if (burgerLink) {
    burgerLink.addEventListener("click", function (e) {
        burgerList.classList.add('_off');
    });
}
console.log('Hello')