import React from "react";
import './Samosa.css'

import Samosapng from '../assets/Samosa.png'
import github from '../assets/github.png'

const Samosa = () => {

  const [samosas, changeSamosas] = React.useState(0)

  const [multiplier, changeMultiplier] = React.useState(1)

  const twoTimes = () => {
    if (samosas >= 10){
      changeSamosas(prevState => prevState - 10)
      changeMultiplier(prevState => prevState * 2)
    }
  }
  
  const fiveTimes = () => {
    if (samosas >= 100){
      changeSamosas(prevState => prevState - 100)
      changeMultiplier(prevState => prevState * 5)
    }
  }

  const tenTimes = () => {
    if (samosas >= 1000){
      changeSamosas(prevState => prevState - 1000)
      changeMultiplier(prevState => prevState * 10)
    }
  }
  
  const addSamosa = () => {
    changeSamosas(prevState => prevState + multiplier)
  }

  return(
  <div>
    <div className="samosaContainer">
      <div className="header">
        <h1>Samosa</h1>
        <div className="count">Count: {samosas}</div>
      </div>

      <img src={Samosapng} className="samosa" width="300px" onClick={addSamosa}/>

      <div className="buttons">

        <div className="buttonBox">
          <div className="boxHeader">
            <h4>Double Serving</h4>
            <div>2x per click</div>
          </div>
          <button onClick={twoTimes} className="clicker">10 samosas</button>
        </div>

        <div className="buttonBox">
          <div className="boxHeader">
            <h4>5's the charm</h4>
            <div>5x per click</div>
          </div>
          <button onClick={fiveTimes} className="clicker">100 samosas</button>
        </div>

        <div className="buttonBox">
          <div className="boxHeader">
            <h4>Tenshinhan</h4>
            <div>10x per click</div>
          </div>
          <button onClick={tenTimes} className="clicker">1000 samosas</button>
        </div>

      </div>
    </div>

    <div id="footer">
      <a href="https://github.com/alzi03/codepath_web102"><img src={github} width="30px" /></a>
    </div>
  </div>
  )
}

export default Samosa;