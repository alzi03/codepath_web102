import React from "react";
import { useState, useEffect } from 'react'
import APIForm from './APIform'
import Gallery from "./Gallery";

const Display = () => {
  const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY
  const [currentImage, setCurrentImage] = useState(null)
  const [inputs, setInputs] = useState({
    url:"",
    format:"",
    no_ads:"",
    no_cookies_banners:"",
    width:"",
    height:"",
    time_zone:""
  })
  const [prevImages, setPrevImages] = useState([])
  
  const submitForm = () => {
    let defaultValues = {
      format:"jpeg",
      no_ads: "true",
      no_cookies_banners: "true",
      width: 1440,
      height: 1080,
      time_zone: "America/New_York"
    }
    if (inputs.url == "" || inputs.url == " "){
      alert("You forgot to submit a url!");
    }
    else{
      for (const [key, value] of Object.entries(inputs)) {
        if (value == ""){
          inputs[key] = defaultValues[key]
    }}
    const query = makeQuery();
    callAPI(query).catch(console.error)
  }
  }
  const makeQuery = () => {
    let wait_until = "network_idle";
    let response_type = "json";
    let fail_on_status = "400%2C404%2C500-511";
    let url_starter = "https://";
    let fullURL = url_starter + inputs.url;
    let query = `https://api.apiflash.com/v1/urltoimage?access_key=${ACCESS_KEY}&url=${fullURL}&format=${inputs.format}&width=${inputs.width}&height=${inputs.height}&no_cookie_banners=${inputs.no_cookie_banners}&no_ads=${inputs.no_ads}&wait_until=${wait_until}&response_type=${response_type}&fail_on_status=${fail_on_status}`;
    return query

  }

  const callAPI = async (query) => {
    const response = await fetch(query)
    const json = await response.json()
    if (json.url == null){
      alert("Oops! Something went wrong with that query, let's try again!")
    } else{
      if (currentImage != null){
        setPrevImages(prevState => ([
          ...prevState,
          currentImage
        ]))
      }
      console.log(prevImages)
      setCurrentImage(json.url);
      reset();
    }
  }

  const reset = () => {
    setInputs({
      url:"",
      format:"",
      no_ads:"",
      no_cookies_banners:"",
      width:"",
      height:"",
      time_zone:""
  })
  }

  return (
    <div>
      <APIForm 
        inputs={inputs}
        handleChange={(e) => 
          setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.trim()
          }))
        }
        onSubmit={submitForm}
      />
      <br />
      {currentImage ? (
      <img
        className="screenshot"
        src={currentImage}
        alt="Screenshot Returned"
      />) : (
        <div></div>
      )}

      <h2>Previous Images</h2>
      <Gallery images={prevImages} />
    </div>
  )
}

export default Display;