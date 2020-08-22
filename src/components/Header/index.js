import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { baseAmount } = props;
  return (
    <header className="header">
      <h1 className="header-title">Converter</h1>
      {/* <label htmlFor="nom">Valeur :</label> */}
      <input type="number" onChange={baseAmount} />
      <p className="header-amount">{baseAmount.target} euro</p>
    </header>
  );
};

Header.propTypes = {
  baseAmount: PropTypes.number.isRequired,
};

export default Header;
