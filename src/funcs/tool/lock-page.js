import { setHistory } from "../history";
import { setResult } from "../result";
import cleaner from "./cleaner";

export default function lockPage(text) {
    cleaner() // clean output
    setResult(text) // set value
    setHistory('PRESS AC BUTTON') // guide

    const btns = [...document.querySelectorAll('.operation')].concat([...document.querySelectorAll('.tools')].slice(1)) // get buttons in an array
    btns.forEach(el => el.setAttribute('disabled', '')) // disabled buttons

    const ac = [...document.querySelectorAll('.tools')][0] // If AC button clicked, returned to previous state
    ac.addEventListener('click', e => btns.forEach(el => el.removeAttribute('disabled'))) // enabled buttons
};
