import React from "react";

import './Entries.css'

const Entry = (props) => {

  console.log(props.image)
  return(
    <div className="entryBox">
      <img src={props.image} className="entryImage" alt="oops" height="200px"/>
      <p className="entryTeam">{props.team}</p>
      <a href={props.link} classname="entryLink">STATISTICS</a>
    </div>
  )
}

export default Entry