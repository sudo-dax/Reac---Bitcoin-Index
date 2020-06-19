import React from 'react'
import CurrencySelector from './components/CurrencySelector'
import DataDisplay from './components/DataDisplay'

/**
* @author
* @function App
**/

const App = (props) => {
  return(
    <div>
      <h1>Bitcoin Index</h1>
      <CurrencySelector />
      <DataDisplay />
    </div>
   )

 }

export default App