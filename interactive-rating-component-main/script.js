'use strict mode';

const button = document.querySelector('.text1');
const newPage = document.querySelector('.TY_outer');
const currentPage = document.querySelector('.rating_outer');
const text = document.querySelector('.text2');

const rating1 = document.querySelector('.r1');
const rating2 = document.querySelector('.r2');
const rating3 = document.querySelector('.r3');
const rating4 = document.querySelector('.r4');
const rating5 = document.querySelector('.r5');

let i;

rating1.addEventListener('click', function() {
    rating1.classList.add('r1_color');
    i = 1;
});

rating2.addEventListener('click', function() {
    rating2.classList.add('r2_color');
    i = 2;
});

rating3.addEventListener('click', function() {
    rating3.classList.add('r3_color');
    i = 3;
});

rating4.addEventListener('click', function() {
    rating4.classList.add('r4_color');
    i = 4;
});

rating5.addEventListener('click', function() {
    rating5.classList.add('r5_color');
    i = 5;
});

button.addEventListener('click', function() {
    console.log('Button clicked');
    currentPage.classList.add('before_effect');
    newPage.classList.remove('before_effect');
    text.textContent = `You selected ${i} out of 5`;
});
