import React from "react";
import { useState, useEffect } from 'react'
import './DogForm.css'


const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY

const options = {
  method: 'GET',
  headers: {
    "x-api-key": ACCESS_KEY,
  }
};

const DogForm =  ({ inputs, banlist }) => {
  const [name, setName] = useState()
  const chooseDog = () => {
    useEffect(() => {
      const getNewDog = async() => {

        const options = {
          method: 'GET',
          headers: {
            "x-api-key": ACCESS_KEY,
          }
        };
        
        const response = await fetch("https://api.thecatapi.com/v1/images/search", options)
        console.log(response)
        const results = await response.json();
        console.log(results)

        return results
        
        // set new name
        }

      getNewDog().then(setName);
    }, [])


  }

  chooseDog();
  /*




    const dog = name.breeds
    const categories = {
      height: dog.height,
      life_span: dog.life_span,
      name: dog.name,
      breed_group: dog.breed_group
    }

    for (const ban of banList){
      for (const [ key, value ] of categories){
        if ( ban == value ){
          continue3
        }
      }
    }

    return name
  }




const DogForm =  ({ inputs, banlist }) => {

  const [data, setData] = useState([])

  setData(chooseDog(banlist))

  const URL = data.url 
  const breedInfo = data.breeds

  const categories = {
    height: breedInfo.height.imperial,
    life_span: breedInfo.life_span, 
    name: breedInfo.name,
    breed_group: breedInfo.breed_group
  } 
*/

  return( 
    <div>
      {URL}
    </div>
  )
}

export default DogForm;