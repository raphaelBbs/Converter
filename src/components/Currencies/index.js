import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Currencies = (props) => {
  const { currencies, onButtonClickAmount } = props;

  return (
    <div className="currencies">
      <div className="currencies-title">
        Currencies
      </div>
      <ul className="currencies-list">
        {
          currencies.map((currencyObject) => (
            <li
              key={currencyObject.name}
              onClick={() => {
                onButtonClickAmount(currencyObject.name, currencyObject.rate);
              }}

              className="currency"
            >{currencyObject.name}
            </li>
          ))
        }

      </ul>
    </div>
  );
};

Currencies.propTypes = {
  onButtonClickAmount: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,

};

export default Currencies;
