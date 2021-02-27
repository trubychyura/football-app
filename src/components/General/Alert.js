import React, { useContext } from 'react';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import { AlertContext } from './../../context/alert/alertContext';

const Alert = ({
  title = 'Oops',
  text = 'Something go wrong !!',
  variant = 'danger',
  children,
}) => {
  const { alert, hideAlert } = useContext(AlertContext);

  if (!alert.visible) {
    return null;
  }
  return (
    <BootstrapAlert variant={variant} onClose={hideAlert} dismissible>
      {title && <BootstrapAlert.Heading>{title}</BootstrapAlert.Heading>}
      <p>{text}</p>
    </BootstrapAlert>
  );
};

export default Alert;
