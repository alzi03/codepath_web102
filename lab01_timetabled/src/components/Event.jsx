import React from "react";


const Event = (props) => {
  return(
    <td className={"Event " + props.color}>
      <h5>{props.title}</h5>
    </td>
  )
}

export default Event;