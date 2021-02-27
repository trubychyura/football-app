import { useRef, useEffect } from 'react';

export const usePrevious = (value) => {
  const prevRef = useRef();

  useEffect(() => {
    prevRef.current = value;
  });

  return prevRef.current;
};
