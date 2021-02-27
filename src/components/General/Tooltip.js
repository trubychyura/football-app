import React from 'react';
import { OverlayTrigger, Tooltip as BootstrapTooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Tooltip = ({ children, tip }) => (
  <OverlayTrigger
    placemant='auto'
    overlay={<BootstrapTooltip>{tip}</BootstrapTooltip>}
  >
    {children}
  </OverlayTrigger>
);

Tooltip.propTypes = {
  tip: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Tooltip;
