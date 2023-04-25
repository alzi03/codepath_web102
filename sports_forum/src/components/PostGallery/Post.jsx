
import { useState, useEffect } from 'react'
import upvote from '../../assets/upvote.png'
import settings from '../../assets/settings.png'
import './Post.css'

export default function Post({ upvotes, title, descr, name, id }) {
  const [upvoteCount, setUpvotes] = useState(upvotes)
  

  const handleClick = () => {
    window.location=`/posts/${id}`
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
        <div id="upvoteButton" onClick={(e) => setUpvotes(prevState => prevState + 1)}>
          <img src={upvote} width="20px"/>
        </div>
        <div id="upvoteCount">{upvoteCount}</div>
      </div>
    </div>
  )
}