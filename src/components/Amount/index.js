import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Amount = (props) => {
 
  const { amount, currency , onButtonClickAmount } = props;
  return (
    <div className="amount">
      <p className="amount-value">{amount}</p>
      <p className="amount-currency">{currency}</p>
      
    </div>
  );
};

Amount.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
