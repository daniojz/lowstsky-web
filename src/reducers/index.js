import { combineReducers } from "redux";
import { addTypeBeat } from "./addTypeBeat";

const rootReducer = combineReducers({
    addTypeBeat : addTypeBeat,
 })
 
 export default rootReducer