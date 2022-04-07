import * as actionsTypes from "./leftArm.actioTypes";

const initialState = {
  ancon: {},
  fist: {},
};

const reset = () => initialState;

const leftArmReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.RESET:
      return reset();

    default:
      return state;
  }
};

export default leftArmReducer;
