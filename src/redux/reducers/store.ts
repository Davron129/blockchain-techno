import { combineReducers } from "redux";
import { scroll } from "./scroll";
import { colorScheme } from "./colorScheme";

export default combineReducers({
    scroll,
    colorScheme
})