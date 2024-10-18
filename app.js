const hamburger = document.querySelector('.hamburger');
const navBox = document.querySelector('.nav-box');
const closeIcon = document.querySelector('.close-icon');
const signup = document.querySelector('#sign-up');

hamburger.addEventListener('click', () => {
    navBox.style.display = 'block';
    signup.style.display = 'none';
});

closeIcon.addEventListener('click', () => {
    navBox.style.display = 'none';
    signup.style.display = 'block';
});
