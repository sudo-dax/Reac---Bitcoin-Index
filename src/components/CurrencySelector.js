import React from 'react';
import supportedCurrencies from '../supported-currencies.json';

/**
* @author
* @function CurrencySelector
**/

const CurrencySelector = () => {
  console.log("Currencies: ", supportedCurrencies)
  return(
    <div>
      <select value="AUD">
        {supportedCurrencies.map((currency, index) =>
        <option key={`${index}-${currency.currency}`} value={currency.currency}> {currency.country} </option>)}
      </select>
    </div>
   );

 }

export default CurrencySelector;