import { result, history } from '../tools/constant';
import calculate from './calc/calculate';
import { getResult, setResult } from './result';
import lockPage from './tool/lock-page';

export function setHistoryEvent() {
    const currentNum = +result.textContent
    if (currentNum != 0 && currentNum != '') {

        if ((getLengthHistory() === 2)) { // if the calculation continued..
            const [num1, operation] = getHistory()
            const num2 = getResult()
            const calc = calculate(num1, num2, operation)

            clearHistory()
            history.textContent = calc + ' '
            history.appendChild(setOperationToHistory(this.children[0].classList.value)) // add operation in history box
            
            if(String(calc).length < 11){
                setResult(calc)
            }else{
                lockPage('Range ERROR')
            }
        }

        else {
            const operation = setOperationToHistory(this.children[0].classList.value)
            if (operation) { // add math oparator in history
                history.textContent = currentNum + ' '
                operation ? history.appendChild(operation) : null
            }

        }
    }

}

export function setHistory(value) {
    history.append(' ', value)
}

export function getHistory() {
    return history.textContent != '' ? Array(history.textContent, history.firstElementChild.classList[1]) : null
}

export function getLengthHistory() {
    return history.textContent.split(' ').length;
}

function clearHistory() {
    history.textContent = ''
}

function setOperationToHistory(classes) {
    const operations = ['fa-minus', 'fa-times', 'fa-plus', 'fa-divide', 'fa-percent']

    const arrClass = classes.split(' ');

    if (operations.includes(arrClass[1])) { // if the class icon is in to operations?
        const icon = document.createElement('i')
        icon.style.color = "#fffdfdc4"
        arrClass.forEach(el => {
            icon.classList.add(el)
        });
        return icon
    }

    return false

}