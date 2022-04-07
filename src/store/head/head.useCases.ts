import * as actions from "./head.actions";

export const reset = () => (dispatch: any) => {
  dispatch(actions.reset());
};
