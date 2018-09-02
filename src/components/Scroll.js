import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '1px solid #000', height: '600px'}}>
        {props.children}
    </div>
  )
}

export default Scroll;