import { nums, result, history } from '../tools/constant';
import { getLengthHistory } from './history';
import backSpace from './tool/backspace';
import cleaner from './tool/cleaner';

export function setResultKeyup(event) {
    const his = history.textContent // history value 
    
    if (event.key === 'Backspace'){ // event backspace
        backSpace()
    }

    if (his) {   // if exists history

        if (getLengthHistory() === 3){ // After calculation (pressed equal) if click number for new calculation, call cleaner func
            cleaner()
        }

        else if (+result.textContent === +his.trim() && nums[event.key]) { // epmty input (result) when ...
            result.textContent = ''
        }

        if (result.textContent.length === 1 && +result.textContent === 0 && nums[event.key]) result.textContent = '' // clean result box
        result.textContent.length < 11 && +nums[event.key]? result.textContent += +nums[event.key] : 0
    }
    
    else if (nums[event.key]) { // fix problem when pressed other key output, not be epmty
        if (event.key && result.textContent.length < 11) { // for keyup
            if (result.textContent.length === 1 && +result.textContent === 0 && nums[event.key]) result.textContent = ''
            result.textContent += nums[event.key] ? nums[event.key] : '';
        }
    }
}

export function setResultClick(event) {
    const his = history.textContent // history value 

    if (his) {   // if exists history
        if (getLengthHistory() === 3){// After calculation (pressed equal) if click number for new calculation, call cleaner func
            cleaner()
        }
        else if (+result.textContent === +his.trim()) { // epmty input (result) when ...
            result.textContent = ''
        }
        if (result.textContent.length === 1 && +result.textContent === 0) result.textContent = '' // clean result box
        result.textContent.length < 11? result.textContent += event.target.textContent : null

    }

    else if (result.textContent.length < 11) {  // for click
        if (result.textContent.length === 1 && +result.textContent === 0) result.textContent = '' // clean result box
        
        if (event.target.textContent === '.' && result.textContent.indexOf('.') !== -1) { // If the point is over clicked again
            null
        }else{
            result.textContent += event.target.textContent
        }
        
    }
}

export function setResult(value) {
    result.textContent = value
}

export function getResult() {
    return result.textContent
}