import { useAsyncError } from './useAsyncError';
import { useEffect, useState, useContext } from 'react';
import { SpinnerContext } from './../context/spinner/spinnerContext';

export const useFetchData = (func, deps, spinnerName, ...rest) => {
  const [data, setData] = useState({});
  const { showSpinner, hideSpinner } = useContext(SpinnerContext);
  const throwError = useAsyncError();

  useEffect(() => {
    const fetchData = async () => {
      showSpinner(spinnerName);
      try {
        const data = await func(...rest);

        if (data.errorCode) {
          throwError(new Error(data.message));
        }

        setData(data);
        hideSpinner(spinnerName);
      } catch (err) {
        throwError(new Error(err));
      }
    };

    fetchData();
  }, [...deps, spinnerName, func, throwError]);

  return data;
};
