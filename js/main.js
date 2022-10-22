let body = document.querySelector('body');
let changeBtn = document.querySelector('.mode');

changeBtn.addEventListener('click', function () {
    body.classList.toggle('dark');
})