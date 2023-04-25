
import { useState, useEffect } from 'react'
import upvote from '../../assets/upvote.png'

export default function Post({ upvotes, title, descr, name, id }) {
  const [upvoteCount, setUpvotes] = useState(upvotes)

  const URL = `/posts/${id}`

  const handleClick = () => {
    window.location=`/posts/${id}`
  }

  return(
    <div className='post' key={id} onClick={handleClick}>
      <h1>{title}</h1>
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