import * as actionTypes from "./rightArm.actioTypes";

const initialState = {
  ancon: {},
  fist: {},
};

const reset = () => initialState;

const rightArmReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.RESET:
      return reset();

    default:
      return state;
  }
};

export default rightArmReducer;
