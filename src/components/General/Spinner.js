import React, { useContext } from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import { SpinnerContext } from '../../context/spinner/spinnerContext';
import PropTypes from 'prop-types';

const Spinner = ({ name, variant, styles, children }) => {
  const { isLoading } = useContext(SpinnerContext);

  return isLoading(name) ? (
    <div className='d-flex justify-content-center aligh-items-center  w-100'>
      <BootstrapSpinner
        animation='border'
        variant={variant}
        className={styles}
      />
    </div>
  ) : (
    children
  );
};

Spinner.propTypes = {
  name: PropTypes.string.isRequired,
  varian: PropTypes.string,
  styles: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Spinner.defaultProps = {
  variant: 'primary',
  styles: 'my-5',
};

export default Spinner;
