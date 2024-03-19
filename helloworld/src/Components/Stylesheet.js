import React from 'react'
import './css/myStyle.css'


//styling and css basics

function Stylesheet(props) {
    
    let className = props.primary ? 'primary' : ''
  
    return (
    <div>
      <h1 className={`${className} font-xl`}>Style Sheets</h1>
    </div>
  )
}

export default Stylesheet
