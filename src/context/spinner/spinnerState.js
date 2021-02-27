import React, { useReducer } from 'react';
import { HIDE_SPINNER, SHOW_SPINNER } from '../types';
import { SpinnerContext } from './spinnerContext';
import { SpinnerReducer } from './spinnerReducer';

const SpinnerState = ({ children }) => {
  const [state, dispatch] = useReducer(SpinnerReducer, { spinnerKeys: [] });

  const showSpinner = (key) => dispatch({ type: SHOW_SPINNER, payload: key });

  const hideSpinner = (key) => dispatch({ type: HIDE_SPINNER, payload: key });

  const isLoading = (key) => state.spinnerKeys.includes(key);

  return (
    <SpinnerContext.Provider value={{ showSpinner, hideSpinner, isLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerState;
