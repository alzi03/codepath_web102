import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterInfo(){
  const {name} = useParams()
  const [information, setInformation] = useState(null)


  useEffect(() => {
    const createData = async() => {
      const URL = `https://api.disneyapi.dev/character?&videoGames=Kingdom%20Hearts&name=${name}`
      const response = await fetch(URL)
      const json = await response.json()
      console.log(json.data)
      setInformation(json.data[0])
    }
    createData();
  }, [])


  return(
    <div>
    {information &&
      <div className="characterDescription">
        <h1>{information.name}</h1>
        <img 
          src={information.imageUrl}
          alt={`${name} picture`}
          width="400px"
        />
        <div className="characterCategories">

          <div className="categoryRow">
            <div className="characterSection">
              <h3>Films</h3>
              {information.films && information.films.map(film => 
                <li>{film}</li>
              )}
            </div>

            {information.parkAttractions ?
              <div className="characterSection">
                <h3>Park Attractions</h3>
                <div className="bulletPoints">
                  {information.parkAttractions && information.parkAttractions.map(attraction => 
                    <li>{attraction}</li>
                  )}
                </div>
              </div>
              : <h3>Park Attractions</h3>
            }
            </div>

            <div className="categoryRow">
              <div className="characterSection">
                <h3>TV Shows</h3>
                {information.tvShows && information.tvShows.map(show => 
                  <li>{show}</li>
                )}
              </div>

              <div className="characterSection">
                <h3>Video games</h3>
                {information.videoGames && information.videoGames.map(game => 
                  <li>{game}</li>
                )}
              </div>
            </div>
        </div>
      </div>
    }
    </div>
  )
}
