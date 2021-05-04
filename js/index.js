// Your code goes here
// * `mouseover`
// * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

const header = document.querySelector('header');
const logo = document.querySelector('h1.logo-heading');

logo.addEventListener('mouseover', function(event){
    header.style.backgroundColor = 'red';
})