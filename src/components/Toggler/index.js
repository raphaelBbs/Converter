import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Toggler = (props) => {
  const { opened, onButtonClick } = props;
  const classToApply = opened ? 'toggler toggler--open' : 'toggler';
  return (
    <button onClick={onButtonClick} type="button" className={classToApply}>
      =
    </button>
  );
};

Toggler.propTypes = {
  opened: PropTypes.bool.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default Toggler;
