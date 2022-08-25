import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
const revealPassword = document.querySelector('.reveal-password');
const passwordField = document.querySelector('.password-field');
const passwordAnnounce = document.querySelector('.password-announce');
if (revealPassword && passwordField && passwordAnnounce) {
  revealPassword.hidden = false;
  passwordField.classList.add('has-js');
  
  revealPassword.addEventListener('click', (event) => {
    let isPressed = revealPassword.getAttribute('data-pressed') === 'true';
    if (isPressed) {
    passwordField.type = 'password';
      revealPassword.innerText = revealPassword.dataset.textShow;
      passwordAnnounce.innerText = passwordAnnounce.dataset.textHidden;
    } else {
    passwordField.type = 'text';
    revealPassword.innerText = revealPassword.dataset.textHide;
      passwordAnnounce.innerText = passwordAnnounce.dataset.textShown;
    }
    revealPassword.setAttribute('data-pressed', String(!isPressed));
  });
   
}


