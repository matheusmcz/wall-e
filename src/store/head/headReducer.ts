import * as actionsTypes from "./head.actioTypes";

const initialState = {
  pan: {},
  tilt: {},
};

const reset = () => initialState;

const headReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionsTypes.RESET:
      return reset();

    default:
      return state;
  }
};

export default headReducer;
