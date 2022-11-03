import {combineReducers} from "redux";
import cardReducer from "./cardReducer";
import blogReducer from "./blogReducer";


const rootReducer = combineReducers({
    cardReducer,
    blogReducer
})

export default rootReducer