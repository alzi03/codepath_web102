
import Post from './Post.jsx'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'

export default function Posts() {
  const [posts, setPosts] = useState()
  useEffect(() => {
    const fetchData = async() => {
      const response = await supabase.from('Sports_Posts').select();
      setPosts(response.data)
      console.log(posts)
    }
    fetchData().catch(console.error)
  }, [])
  
  return(
    <div className='postsGallery'>
      {posts && 
      posts.map((post) => 
      <Post
        id={post.id}
        name={post.name}
        upvotes={post.upvotes}
        title={post.title}
        descr={post.descr}
      />)}
      <h1></h1>
    </div>
  )
}