import React, { useReducer } from 'react';
import { HIDE_MODAL, SHOW_MODAL } from '../types';
import { ModalContext } from './modalContext';
import { ModalReducer } from './modalReducer';

const ModalState = ({ children }) => {
  const [state, dispatch] = useReducer(ModalReducer, { visible: false });

  const showModal = (matchId) =>
    dispatch({ type: SHOW_MODAL, payload: { matchId } });

  const hideModal = () => dispatch({ type: HIDE_MODAL });

  return (
    <ModalContext.Provider value={{ showModal, hideModal, modal: state }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalState;
