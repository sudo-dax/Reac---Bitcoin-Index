import React from 'react'

/**
* @author
* @function DataDisplay
**/

const DataDisplay = (props) => {
  const {data} = props
  return(
    <div>
      DataDisplay:
      {Object.keys(data).map((date) =>
        <div key={date}>
          Date: {date} Value: {data[date]}
        </div>)}  
    </div>
  );
}

export default DataDisplay;