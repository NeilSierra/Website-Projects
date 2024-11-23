const button_1 = document.getElementById('button-1');
const audio_1 = document.getElementById('audio-1');
const originalBackgroundColor = 'white';

let isPlaying = false;

function changeAccentColor(color) {
  document.documentElement.style.setProperty('--accent-color', color);
}

button_1.addEventListener('click', () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    audio_1.play();
    button_1.style.backgroundColor = 'transparent';
    button_1.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;
    
    changeAccentColor('#A27F61');
  } else {
    audio_1.pause();
    button_1.style.backgroundColor = originalBackgroundColor;
    button_1.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;
    
    changeAccentColor('#1DB954');
  }
});

const button_2 = document.getElementById('button-2');
const audio_2 = document.getElementById('audio-2');

let isPlaying2 = false;

button_2.addEventListener('click', () => {
  isPlaying2 = !isPlaying2;

  if (isPlaying2) {
    audio_2.play();
    button_2.style.backgroundColor = 'transparent';
    button_2.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#535353');
  } else {
    audio_2.pause();
    button_2.style.backgroundColor = originalBackgroundColor;
    button_2.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});

// Repeat the structure for buttons 3 to 8

const button_3 = document.getElementById('button-3');
const audio_3 = document.getElementById('audio-3');

let isPlaying3 = false;

button_3.addEventListener('click', () => {
  isPlaying3 = !isPlaying3;

  if (isPlaying3) {
    audio_3.play();
    button_3.style.backgroundColor = 'transparent';
    button_3.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#4070B8');
  } else {
    audio_3.pause();
    button_3.style.backgroundColor = originalBackgroundColor;
    button_3.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});


const button_4 = document.getElementById('button-4');
const audio_4 = document.getElementById('audio-4');

let isPlaying4 = false;

button_4.addEventListener('click', () => {
  isPlaying4 = !isPlaying4;

  if (isPlaying4) {
    audio_4.play();
    button_4.style.backgroundColor = 'transparent';
    button_4.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#535353');
  } else {
    audio_4.pause();
    button_4.style.backgroundColor = originalBackgroundColor;
    button_4.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});

const button_5 = document.getElementById('button-5');
const audio_5 = document.getElementById('audio-5');

let isPlaying5 = false;

button_5.addEventListener('click', () => {
  isPlaying5 = !isPlaying5;

  if (isPlaying5) {
    audio_5.play();
    button_5.style.backgroundColor = 'transparent';
    button_5.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#D03860');
  } else {
    audio_5.pause();
    button_5.style.backgroundColor = originalBackgroundColor;
    button_5.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});

const button_6 = document.getElementById('button-6');
const audio_6 = document.getElementById('audio-6');

let isPlaying6 = false;

button_6.addEventListener('click', () => {
  isPlaying6 = !isPlaying6;

  if (isPlaying6) {
    audio_6.play();
    button_6.style.backgroundColor = 'transparent';
    button_6.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#535353');
  } else {
    audio_6.pause();
    button_6.style.backgroundColor = originalBackgroundColor;
    button_6.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});

const button_7 = document.getElementById('button-7');
const audio_7 = document.getElementById('audio-7');

let isPlaying7 = false;

button_7.addEventListener('click', () => {
  isPlaying7 = !isPlaying7;

  if (isPlaying7) {
    audio_7.play();
    button_7.style.backgroundColor = 'transparent';
    button_7.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#247BC4');
  } else {
    audio_7.pause();
    button_7.style.backgroundColor = originalBackgroundColor;
    button_7.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});

const button_8 = document.getElementById('button-8');
const audio_8 = document.getElementById('audio-8');

let isPlaying8 = false;

button_8.addEventListener('click', () => {
  isPlaying8 = !isPlaying8;

  if (isPlaying8) {
    audio_8.play();
    button_8.style.backgroundColor = 'transparent';
    button_8.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z"/>
      </svg>
    `;

    changeAccentColor('#535353');
  } else {
    audio_8.pause();
    button_8.style.backgroundColor = originalBackgroundColor;
    button_8.querySelector('svg').innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/>
      </svg>
    `;

    changeAccentColor('#1DB954');
  }
});


