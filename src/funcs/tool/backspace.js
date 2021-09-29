import { result } from "../../tools/constant";
import { getHistory, getLengthHistory } from "../history";
import cleaner from "./cleaner";

export default function backSpace() {
    const history = getHistory()
    if (history && getLengthHistory() > 2) {
        cleaner()
    }
    result.textContent = result.textContent.length !== 1 ? result.textContent.slice(0, -1) : '0'
}