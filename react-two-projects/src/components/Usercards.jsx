import React from 'react'
import muditme from '../assets/muditme.png'
import "./Usercards.css"


const Usercards = (props) => {
  return (
      <div className="user-container" style={props.style}>
          <img id="img-me" src={props.image} alt=""   style={{"border-radius": "50%"}}/>
          <h3 id="headline">{props.name}</h3>
          <p id="description">{props.desc}</p>
      </div>
  );
}

export default Usercards
