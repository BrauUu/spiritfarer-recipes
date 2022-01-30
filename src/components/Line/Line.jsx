import React from "react";

import './Line.css'

export default props => {
  const {backgroundColor, highlightedColor } = props

  const style = {
    background: `linear-gradient(90deg, ${backgroundColor} 5%, ${highlightedColor} 50%, ${backgroundColor} 95%)`,
    boxShadow: `1px 1px 30px ${highlightedColor}`
  }

  return (
    <div className="line" 
      style={style}></div>
  )
}