import calculate from '../calc/calculate';
import { getHistory, getLengthHistory, setHistory, } from '../history';
import { getResult, setResult } from '../result';
import backSpace from './backspace';
import cleaner from './cleaner';
import lockPage from './lock-page';

export function runTool() {
    const tool = this.firstElementChild?.classList.value || this.innerText;
    switch (tool) {
        case 'AC':
            cleaner()
            break;

        case 'fas fa-backspace':
            backSpace()
            break;

        case 'fas fa-equals':
            if (getLengthHistory() === 2){
                const [num1, operation] = getHistory()
                const num2 = getResult()
                const calc = calculate(num1, num2, operation)
                setHistory(num2)
                if(String(calc).length < 11){
                    setResult(calc)
                }else{
                    lockPage('Range ERROR')
                }
            }
            
            break;

        default:
            console.log('Not Found');
    }
}
