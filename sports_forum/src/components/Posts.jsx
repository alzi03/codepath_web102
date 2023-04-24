import '../App.css'
import Post from './Post.jsx'
import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

const data = [
  {
    title: 'FeetFinder',
    upvotes: 0,
    name: 'Jeremy Gallindo',
    descr: 'I really enjoy taking pictures of feet'
  },
  {
    title: 'Midgets',
    upvotes: 0,
    name: 'Adarsh Bharti',
    descr: 'I cannot physically get enough of gay midget porn' 
  },
  {
    title: 'Midgets',
    upvotes: 0,
    name: 'Adarsh Bharti',
    descr: 'I cannot physically get enough of gay midget porn' 
  },
  {
    title: 'Midgets',
    upvotes: 0,
    name: 'Adarsh Bharti',
    descr: 'I cannot physically get enough of gay midget porn' 
  },
  {
    title: 'Midgets',
    upvotes: 0,
    name: 'Adarsh Bharti',
    descr: 'I cannot physically get enough of gay midget porn' 
  },
  {
    title: 'Midgets',
    upvotes: 0,
    name: 'Adarsh Bharti',
    descr: 'I cannot physically get enough of gay midget porn' 
  }
]

export default function Posts() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await supabase.from('Posts').select();
    }
    fetchData().catch(console.error)
  }, [])
  return(
    <div className='postsGallery'>
      {data && 
      data.map((post) => 
      <Post
        name={post.name}
        upvotes={post.upvotes}
        title={post.title}
        descr={post.descr}
      />)}
    </div>
  )
}