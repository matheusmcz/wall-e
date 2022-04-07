import { combineReducers } from "redux";
import head from "./head/headReducer";
import leftArm from "./leftArm/leftArmReducer";
import rightArm from "./rightArm/rightArmReducer";

const Reducer = () => combineReducers({ head, leftArm, rightArm });

export default Reducer;
