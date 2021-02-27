import { SHOW_MODAL, HIDE_MODAL } from './../types';

export const ModalReducer = (state, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...action.payload, visible: true };
    case HIDE_MODAL:
      return { ...state, visible: false };
    default:
      return state;
  }
};
