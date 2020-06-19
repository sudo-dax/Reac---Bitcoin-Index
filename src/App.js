import React, {useState, useEffect} from 'react'
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

  useEffect(() => {
    console.log("in useEffect")
    // componentDidMount
    const data = {"2020-01-10":11866.0075,"2020-01-11":11619.6983,"2020-01-12":11858.2603}
    setBitcoinData(data)
    // Override componentWillUnmount with the returned callback function
    return () => {console.log("This executes on componentWillUnmount")}
  }, [currency])


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