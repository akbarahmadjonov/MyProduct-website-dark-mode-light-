let body = document.querySelector('body');
// Finding body
let changeBtn = document.querySelector('.mode');
// Finding button to click

changeBtn.addEventListener('click', function () {
    body.classList.toggle('dark');
})
// An event occurs when (changeBtn is clicked)