import { HIDE_SPINNER, SHOW_SPINNER } from '../types';

export const SpinnerReducer = (state, action) => {
  const { spinnerKeys } = state;
  const { payload } = action;

  switch (action.type) {
    case SHOW_SPINNER:
      return { ...state, spinnerKeys: spinnerKeys.concat(payload) };
    case HIDE_SPINNER:
      return {
        ...state,
        spinnerKeys: spinnerKeys.filter((key) => key !== payload),
      };
    default:
      return state;
  }
};
