import React from "react";
import Entry from "./Entry";


//images
import Bucks from "../assets/bucks.png"
import Boston from "../assets/boston.png"
import Philly from "../assets/Philly.png"
import Cavs from "../assets/cavs.png"
import Knicks from "../assets/knicks.png"
import Nets from "../assets/nets.svg"

import Nuggets from "../assets/Nuggets.png"
import Grizzlies from "../assets/Grizzlies.png"
import Kings from "../assets/Kings.png"
import Suns from "../assets/Suns.png"
import Clippers from "../assets/Clippers.png"
import Mavericks from "../assets/Mavericks.png"

const Entries = () => {


  const easternConference = [
    {
      team: 'Milkwaukee Bucks',
      image: Bucks,
      link: "https://www.espn.com/nba/team/_/name/mil/milwaukee-bucks"
    },
    {
      team:'Boston Celtics',
      image: Boston,
      link: "https://www.espn.com/nba/team/_/name/bos/boston-celtics"
    },
    {
      team:'Philadelphia 76ers',
      image: Philly,
      link: "https://www.espn.com/nba/team/_/name/phi/philadelphia-76ers"
    },
    {
      team:'Cleveland Cavaliers',
      image: Cavs,
      link: "https://www.espn.com/nba/team/_/name/cle/cleveland-cavaliers"
    },
    {
      team: 'New York Knicks',
      image: Knicks,
      link:"https://www.espn.com/nba/team/_/name/ny/new-york-knicks"
    },
    {
      team:'Brooklyn Frauds',
      image: Nets,
      link: "https://www.espn.com/nba/team/_/name/bkn/brooklyn-nets"
    }


  ]

  const westernConference  = [
    {
      team: 'Denver Nuggets',
      image: Nuggets,
      link: "https://www.espn.com/nba/team/_/name/den/denver-nuggets"
    },
    {
      team: 'Memphis Grizzlies',
      image: Grizzlies,
      link: "https://www.espn.com/nba/team/_/name/mem/memphis-grizzlies"
    },
    {
      team: 'Sacramento Kings',
      image: Kings,
      link: "https://www.espn.com/nba/team/_/name/sac/sacramento-kings"
    },
    {
      team:'Phoenix Suns',
      image: Suns,
      link: "https://www.espn.com/nba/team/_/name/phx/phoenix-suns"
    },
    {
      team: 'LA Clippers',
      image: Clippers,
      link: "https://www.espn.com/nba/team/_/name/lac/la-clippers"
    },
    {
      team: 'Dallas Mavericks',
      image: Mavericks,
      link: "https://www.espn.com/nba/team/_/name/dal/dallas-mavericks"
    }
  ]
  const west = westernConference.map(org =>
    <Entry 
      key={org.team}
      team={org.team}
      image={org.image}
      link={org.link}
    />
    )
  const east = easternConference.map(org => 
    <Entry 
      key={org.team}
      team={org.team}
      image={org.image}
      link={org.link}
    />
  )

  const output = []

  for (let i of east){
    output.push(i)
  }
  for (let i of west){
    output.push(i)
  }

  const [items, changeItems] = React.useState(output)


  const eastButton = () => {
    changeItems(prevState => east)
  }

  const westButton = () => {
    changeItems(prevState => west)
  }
  

  

  return(
    <div className="middle">
      <div className="buttons">
        <button onClick={eastButton} className="button">East</button>
        <button onClick={westButton} className="button">West</button>
      </div>
      <div className="entriescontainer">
        <div className="box">
          {items}
        </div>
      </div>
    </div>
  )
}

export default Entries;