import '../App.css'
import Post from './Post.jsx'
import { useState, useEffect } from 'react'
import { supabase } from '../supabase'

export default function Posts() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await supabase
      .from('Sports_Posts')
      .select();
      setPosts(response.data)
    }
    fetchData().catch(console.error)
  }, [])

  const newPost = async(e) => {
    e.preventDefault();
    await supabase
    .from('Sports_Posts')
    .insert({name:'hi', title:'heloo', descr:'ok', upvotes:50})
    .select();
  }

  return(
    <div className='postsGallery'>
      <button onClick={newPost}>New Post</button>
      {posts && 
      posts.map((post) => 
      <Post
        name={post.name}
        upvotes={post.upvotes}
        title={post.title}
        descr={post.descr}
      />)}
    </div>
  )
}