import React from 'react'

const Hello = (props) => {
    
  return (
    <div><h1>Hello KLU {props.name} id {props.id}
    {props.children}
    </h1>
    </div>
  )
}

export default Hello