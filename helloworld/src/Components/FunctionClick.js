import React from 'react'

function FunctionClick() {
  
    function clickHandler() {
        console.log('Button Clicked')
    }
  
    return (
    <div>
        <p>Event handling lewat Function component</p>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
