import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <input type="text" onChange={(e)=>{props.setName(e.target.value)}} />
      <h1>{props.title} : {props.name}</h1>
    </div>
  )
}

export default Cards
