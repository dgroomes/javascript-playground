import {greeting} from "./greeting";

const greetingEl: Element = document.createElement('div');
greetingEl.innerHTML = greeting();

document.body.appendChild(greetingEl);
