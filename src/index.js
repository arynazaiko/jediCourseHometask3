import './style.css';
import Icon from './icon.png';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
  const myIcon = new Image();
  const btn = document.createElement('button');

  element.innerText = 'Hello world!';
  element.classList.add('hello');

  myIcon.src = Icon;

  element.appendChild(myIcon);
  myIcon.classList.add('icon');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
