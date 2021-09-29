import { sum, subtraction, multiply, division, percent } from './math';

const math = {
    'fa-plus': sum,
    'fa-minus': subtraction,
    'fa-times': multiply,
    'fa-divide': division, 
    'fa-percent': percent
}

export default function calculate(num1, num2, operation) {
    return math[operation] ? math[operation](+num1,+num2): null
}