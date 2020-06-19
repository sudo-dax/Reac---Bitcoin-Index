import React, {useState} from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'

/**
* @author
* @function App
**/

const App = (props) => {

  const defaultCurrency = "AUD"
  const [currency, setCurrency] = useState(defaultCurrency)
  const [bitcoinData, setBitcoinData] = useState({})

  function handleCurrencyChange(newCurrency) {
    setCurrency(newCurrency)
    console.log('currency: ', currency)
  }
  
  return(
    <div>
      <h1>Bitcoin Index</h1>
      {/* Passing currency state to a Property called currency */}
      <CurrencySelector currency={currency} handleCurrencyChange={handleCurrencyChange} />
      <DataDisplay data={bitcoinData}/>
    </div>
  )

 }

export default App;   