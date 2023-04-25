
import { useState, useEffect } from 'react'
import upvote from '../../assets/upvote.png'
import settings from '../../assets/settings.png'
import './Post.css'
import { supabase } from '../../supabase'

export default function Post({ upvotes, title, descr, name, id }) {
  const [upvoteCount, setUpvotes] = useState(upvotes)

  console.log(id)

  const handleClick = () => {
    window.location=`/posts/${id}`
  }

  const handleUpvote = async() => {
    setUpvotes(prevState => prevState + 1)

    await supabase
    .from('Sports_Posts')
    .update({upvotes: upvoteCount + 1})
    .eq('id', id)
  }

  return(
    <div className='post' key={id}>
      <div className="firstLine">
        <h1>{title}</h1>
        <img src={settings} height="27px" id='settings' onClick={handleClick}/>
      </div>
      <div>{name}</div>
      <p>{descr}</p>
      <div id='upvoteSection'>
        <div id="upvoteButton" onClick={handleUpvote}>
          <img src={upvote} width="20px"/>
        </div>
        <div id="upvoteCount">{upvoteCount}</div>
      </div>
    </div>
  )
}