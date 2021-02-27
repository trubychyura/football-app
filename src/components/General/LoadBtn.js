import React, { useContext } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { SpinnerContext } from '../../context/spinner/spinnerContext';
import { useRouter } from './../../hooks/useRouter';

import { spinnerList, DEFAULT_QUERY } from './../../helper/config';
import PropTypes from 'prop-types';

const spinnerName = spinnerList.buttonSpinner.name;

const LoadBtn = ({ query: queryName }) => {
  const { isLoading } = useContext(SpinnerContext);
  const { query, push, pathname, stringify } = useRouter();

  const changeQuery = (name) => {
    const queryParam = +query[name] || DEFAULT_QUERY[name];
    query[name] = queryParam + queryParam;

    push({
      pathname,
      search: stringify(query),
    });
  };

  return (
    <Button
      variant='outline-primary'
      className='m-3 loading-btn d-block m-auto'
      onClick={() => changeQuery(queryName)}
    >
      {isLoading(spinnerName) ? (
        <>
          <Spinner
            size='sm'
            as='span'
            animation='border'
            role='status'
            aria-hidden='true'
            className='align-middle'
          />
          <span className='align-middle ml-2'>Loading...</span>
        </>
      ) : (
        <span className='align-middle'>Load more!</span>
      )}
    </Button>
  );
};

LoadBtn.propTypes = {
  queryName: PropTypes.string.isRequired,
};

export default LoadBtn;
