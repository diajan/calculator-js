import { numbers, operations, tools } from './tools/constant';
import { setResultClick, setResultKeyup } from './funcs/result';
import { setHistoryEvent } from './funcs/history';
import { runTool } from './funcs/tool/tools';
import './assets/style.css'

numbers.forEach(el => el.addEventListener('click', setResultClick)) //set result input with click

document.body.addEventListener('keyup', setResultKeyup) //set result input with keup

operations.forEach(el => el.addEventListener('click', setHistoryEvent))  // set history

tools.forEach(el => el.addEventListener('click', runTool))// add oparator for tools 
