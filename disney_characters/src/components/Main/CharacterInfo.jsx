import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



export default function CharacterInfo()  {
  const {name} = useParams()
  const [information, setInformation] = useState(null)


  useEffect(() => {
    const createData = async() => {
      const URL = `https://api.disneyapi.dev/character?&videoGames=Kingdom%20Hearts&name=${name}`
      const response = await fetch(URL)
      const json = await response.json()
      setInformation(json.data[0])
    }
    createData();
  }, [name])

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
                <h3>Video Games</h3>
                {information.videoGames && information.videoGames.map(game => 
                  <li>{game}</li>
                )}
              </div>
            </div>
        </div>
        {information &&
        <div className="chart">
          <BarChart
            width={600}
            height={300}
            data={[
              {
                name: "Films",
                count: information.films.length,
              },
              {
                name: "Park Attractions",
                count: information.parkAttractions.length,
              },
              {
                name: "TV Shows",
                count: information.tvShows.length,
              },
              {
                name: "Video Games",
                count: information.videoGames.length
              }
            ]}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#44B3C2" />
          </BarChart>
        </div>}
      </div>
    }
    </div>
  )
}
