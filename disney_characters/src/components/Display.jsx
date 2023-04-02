import { useEffect, useState } from "react";
import Character from "./Character";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Display = () => {
  const [list, setList] = useState([])
  const [games, setGames] = useState([])
  const [filteredList, setFilteredList] = useState()
  const [filmData, setFilmData] = useState({})
  const [showData, setShowData] = useState({})
  const [showChartData, setShowChartData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch (`https://api.disneyapi.dev/character?videoGames=Kingdom%20Hearts`)
      const json = await response.json()
      const data = json.data
      setList(data)
      console.log('hi')
    }
    fetchData().catch(console.error)
  }, [list])


  const newList = list.filter(character => character.tvShows.length !== 0 & character.films.length !== 0)

  useEffect(() => {

    const setFilmChart = () => {
      setFilmData();
      const filmNumbers = {
        zero: 0,
        six: 0,
        ten: 0,
      }
      for (let i of newList){
        if (i.films.length <= 5){
          filmNumbers.zero += 1
        } 
        else if (i.films.length <= 10){
          filmNumbers.six += 1
        } 
        else if(i.films.length > 10){
          filmNumbers.ten += 1
        }
      }
      setFilmData(filmNumbers)
    }

    const setShowChart = () => {
      setShowData();
      const showNumbers = {};
      for (let i of newList){
        for (let j of i.tvShows){
          showNumbers[j] ? showNumbers[j] += 1 : showNumbers[j] = 1
        }
      }
      setShowData(showNumbers)
    }

    const createShowData = () => {
      const showChart = []
      for (let i in showData){
        showChart.push(
          {
            name: i,
            num: showData[i]
          }
        )
      }
      setShowChartData(showChart)
    }

    setShowChart();
    createShowData();
    console.log(showChartData)
    setFilmChart();
    setFilteredList(newList)

  }, [list]) 


  const filmChartData = [
    {
      name: "0-5",
      films: filmData.zero,
    },
    {
      name: "6-10",
      films: filmData.six,
    },
    {
      name: "10+",
      films: filmData.ten,
    }
  ];



  
  const handleChange = (e) => {
    handleSubmit(e.target)

  }


  const handleSubmit = (input) => {

    const value = input.value
    setFilteredList()
    setGames()    

    
    if (value.length == 0){
      setFilteredList(newList)
    } else if (input.placeholder === "name"){
      setFilteredList(newList.filter(character => 
        character.name.slice(0,value.length).toLowerCase() == value.toLowerCase()))
    } else if (input.placeholder === 'game'){
      const gameSet = newList.filter(character => character.videoGames.filter(game => game.slice(0, value.length).toLowerCase() == value.toLowerCase()).length !== 0)
      setFilteredList(gameSet)
    }
  }
  
  

  return(
    <div>
      <div className="chart">
        <h4>Number of Films per Character</h4>
        <BarChart
          width={500}
          height={300}
          data={filmChartData}
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
          <Bar dataKey="films" fill="#82ca9d" />
        </BarChart>
      </div>
      {showChartData && 
      <div className="chart">
        <h4>Most Popular Films</h4>
        <BarChart
          width={500}
          height={300}
          data={showChartData}
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
          <Bar dataKey="num" fill="#82ca9d" />
        </BarChart>
      </div>
    }
      <h1 className="title">Kingdom Hearts Characters</h1>
      <div className="forms">
        <div>
          <label className="form">Name</label>
          <input type="text" placeholder="name" onChange={handleChange}></input>
        </div>
        <div>
          <label className="form">Games</label>
          <input type="text" placeholder="game" onChange={handleChange}></input>
        </div>
      </div>
      <ul>
        {filteredList && filteredList.map(character => 
          <Character
            name={character.name} 
            image={character.imageUrl} 
            tvShows={character.tvShows} 
            films={character.films}
            videoGames={character.videoGames}
          />
        )
        }
      </ul>
    </div>
  )
}

export default Display;