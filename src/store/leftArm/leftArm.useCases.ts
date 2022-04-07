import * as actions from "./leftArm.actions";

export const reset = () => (dispatch: any) => {
  dispatch(actions.reset());
};
