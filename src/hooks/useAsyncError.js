import { useState, useCallback } from 'react';

export const useAsyncError = () => {
  const [_, setError] = useState();

  return useCallback(
    (err) => {
      setError(() => {
        throw err;
      });
    },
    [setError],
  );
};
