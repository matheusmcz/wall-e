import * as actions from "./rightArm.actions";

export const reset = () => (dispatch: any) => {
  dispatch(actions.reset());
};
