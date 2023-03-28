import { useEffect, useState } from "react";
import Character from "./Character";

const Display = () => {
  const [list, setList] = useState([])
  const [games, setGames] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch (`https://api.disneyapi.dev/character?videoGames=Kingdom%20Hearts`)
      const json = await response.json()
      const data = json.data
      setList(data)
    }

    fetchData().catch(console.error)
  }, [])

  const newList = list.filter(character => character.tvShows.length !== 0 & character.films.length !== 0)
  
  const [filteredList, setFilteredList] = useState()

  useEffect(() => {
    setFilteredList(newList)

  }, [list]) 

  

  const handleChange = (e) => {
    console.log(e.target)
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