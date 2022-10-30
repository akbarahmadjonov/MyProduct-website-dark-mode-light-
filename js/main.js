let body = document.querySelector('body');
// Finding body
let changeBtn = document.querySelector('.mode');
// Finding button to click

changeBtn.addEventListener('click', function () {
    body.classList.toggle('dark');
})
// An event occurs when (changeBtn is clicked)

// Mobile version dropdown

let list = document.querySelector('.sitenav__list');
let modeBtn = document.querySelector('.mobile__mode');

modeBtn.addEventListener('click', function () {
    list.style.display = 'block';
})