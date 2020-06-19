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
  const bitcoinApi = "https://api.coindesk.com/v1/bpi/historical/close.json"

  useEffect(() => {
    console.log("in useEffect")
    function getData() {
      fetch(`${bitcoinApi}?currency=${currency}`)
      .then((response) => response.json())
      .then((data) => setBitcoinData(data.bpi))
      .catch((error) => console.error(error))
    }
    getData()
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