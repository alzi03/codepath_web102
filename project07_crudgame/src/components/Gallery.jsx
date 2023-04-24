import '../App.css'
import { useState, useEffect } from 'react'
import { supabase } from '../client'

import Card from './Card'

export default function Gallery () {
  const [data, setData] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const {data} = await supabase
      .from('Crewmates')
      .select()
      .order('created_at', { ascending: true })
      setData(data)
    }

    fetchData().catch(console.error)

  }, [])
  
  console.log(data)

  return(
    <div className='galleryCards'>
      {data &&
      data.length>0 ?
      data.map(crewmate => 
        <Card 
          id={crewmate.id}
          name={crewmate.name}
          speed={crewmate.speed}
          color={crewmate.color}
        />)
      : <div className='title'>No Crewmates</div>}
    </div>
  )
}