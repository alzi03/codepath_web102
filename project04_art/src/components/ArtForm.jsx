import React from "react";
import { useState, useEffect } from 'react'
import './ArtForm.css'
import noImage from '../assets/noImageAvailable.png'

const apikey = import.meta.env.VITE_ACCESS_KEY

const ArtForm = ({}) => {

  const [json, setJson] = useState()

  const [image, setImage] = useState()
  const [century, setCentury] = useState()
  const [classification, setClassification] = useState()
  const [period, setPeriod] = useState()
  const [title, setTitle] = useState()
  const [verification, setVerification] = useState()

  const [banlist, setBanList] = useState([])

  const JsonResponse = async ( banlist ) => {
    const URL = `https://api.harvardartmuseums.org/object?title=rabbit&size=134&apikey=${apikey}`
    const response = await fetch(URL)
    const json = await response.json();

    // setting random art piece from selected array 
    setJson(json.records)
  }

  useEffect(() => {
    JsonResponse();
  }, [])


  const newImage = () => {
    setImage(), setCentury(), setClassification(), setPeriod(), setVerification()
    JsonResponse();

    const filteredPhotos = json.filter((record) => {
      const attributes = [record.century, record.classification, record.period, record.verification];
      return !attributes.some((attribute) => banlist.includes(attribute))
    })


    const randomElement = filteredPhotos[Math.floor(Math.random()*filteredPhotos.length)]
    
    if (randomElement.primaryimageurl){
      setImage(randomElement.primaryimageurl)
    }
    else{
      setImage(noImage)
    }
    setCentury(randomElement.century)
    setClassification(randomElement.classification)
    setPeriod(randomElement.period)
    setVerification(randomElement.verificationleveldescription)
  }

  const ban = (e) => {
    if (!banlist.includes(e.target.textContent)){
    setBanList((prevState) => ([
      ...prevState,
      e.target.textContent
    ]))
  }
  }

  const remove = (attribute) => {
    console.log(attribute)
    setBanList(banlist.filter((item) => item !== attribute))
  }

  console.log(banlist)
  
  

  return(
    <div>
      <div className="main">
      <h1>Harvard Art</h1>
        <div onClick={newImage} className="newImage">NEW</div>
        <div className="content">
          <div className="categories">
            {century && <div className="category" onClick={ban}>{century}</div>}
            {classification && <div className="category" onClick={ban}>{classification}</div>}
            {period && <div className="category" onClick={ban}>{period}</div>}
            {verification && <div className="category" onClick={ban}>{verification}</div>}
            <img src={image} height="450px" className="image"/>
          </div>
        </div>
      </div>
      <div className="banlist">
        <h1>Ban List</h1>
        <ul>
          {banlist.map((attribute, index) => (
            <li key={index} onClick={() => remove(attribute)}>{attribute}</li>))}
        </ul>
      </div>
  
    </div>
  )
}

export default ArtForm;