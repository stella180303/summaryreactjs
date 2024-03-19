import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* button on click untuk manggil function yang ada di parent component */}
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
