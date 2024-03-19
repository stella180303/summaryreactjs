import React from 'react'
import ReactDOM from 'react-dom'

// portal demo untuk masukin sesuatu di luar dari root
// Kenapa dipake? biasanya untuk popup menu gitu


function PortalDemo() {
  return  ReactDOM.createPortal(
    <div>
      <h1>Portal Demo</h1>
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo
