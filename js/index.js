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

// change logo background color to red on mouseover of logo
logo.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'red';
})

// change logo background color back to white when mousing out of logo
logo.addEventListener('mouseout', function(event){
    event.target.style.backgroundColor = 'white';
})

// change header background color to green when keydown of "g" key
function gKey(event) {
    console.log(event.key);
    if (event.key === "g") {
    header.style.backgroundColor = 'green';
    }
}

document.addEventListener('keydown', gKey);

// change header background color to white when keyout of "g"
document.addEventListener('keyup', function(event){
    if (event.key === "g") {
        header.style.backgroundColor = 'white';
    }
})


// zoom in on main photo on wheel scroll
const image = document.querySelector('img');
let scale = 1;

function zoom(event) {
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(1, scale), 1.5);
    image.style.transform = `scale(${scale})`;
}

document.addEventListener('wheel', zoom);

// change background to yellow on load
const home = document.querySelector('div.home');
window.addEventListener('load', function(event){
    console.log('page is fully loaded');
    home.style.backgroundColor = 'yellow';
    setTimeout(function() {
       home.style.backgroundColor = "";
    }, 400);
});

// change text color of whatever element is clicked
// document.addEventListener('click', function(event){
//     event.target.style.backgroundColor = "red";
//     console.log('currentTarget: ', event.currentTarget);
//     event.stopPropagation();
// });

// change text color of whatever element is double clicked
document.addEventListener('dblclick', function(event){
    event.target.style.backgroundColor = "blue";
})

// change background color on window resize
window.addEventListener('resize', function(event){
    header.style.backgroundColor = 'lightblue';
})

// change color of text of something copied

document.addEventListener('copy', function(event){
    const selection = document.getSelection();
    event.target.style.color = 'purple';
})


// prevent default behavior of nav links to prevent refresh
Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    })
})





const paragraph = document.querySelector('p');
const intro = document.querySelector('header.intro');

paragraph.addEventListener('click', function(event){
    paragraph.style.backgroundColor = "green";
    event.stopPropagation();
});

intro.addEventListener('click', function(event){
    intro.style.backgroundColor = "purple";
});