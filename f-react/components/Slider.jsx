import React from 'react'

const Slider = (images) => {
    const sliderstyle = {
        backgroundimage:` url(${images[0]})`,
        height:"400px",
        backgroundsize:"cover"
    }
  return (
    <div style={sliderstyle}></div>
  )
}

export default Slider