import './style.css';
import Icon from './icon.png';

const element = document.createElement('div');

element.innerText = 'Hello world!';

document.body.appendChild(element);

element.classList.add('hello');

const myIcon = new Image();

myIcon.src = Icon;

element.appendChild(myIcon);

myIcon.classList.add('icon');
