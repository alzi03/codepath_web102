
import Post from './Post.jsx'
import { useState, useEffect } from 'react'
import { supabase } from '../../supabase'

export default function Posts() {
  const [posts, setPosts] = useState()
  const [searchTerm, setSearchTerm] = useState()

  const [filtered, setFiltered] = useState()

  useEffect(() => {
    const fetchData = async() => {
      const response = await supabase.from('Sports_Posts').select();
      setPosts(response.data) 
      setFiltered(response.data)
    }
    fetchData().catch(console.error)
  }, [])
  
  useEffect(() => {

  })

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() =>{
    if (searchTerm){
      setFiltered(posts.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase())))}
  }, [searchTerm])

  function sortItemsAlphabetically(items) {
    return items.sort((a, b) => {
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      if (a.upvotes < b) {
        return 1;
      }
      return 0;
    });
  }

  const handleSort = () => {
    const sorted = sortItemsAlphabetically(filtered)
    setFiltered(sorted)
  }



  return(
    <div className='postsGallery'>
      {posts && 
        <div>
          <input type="text" value={searchTerm} onChange={handleSearch} />
          <button onClick={handleSort}>Sort</button>
        </div>
      }
      {filtered && 
      filtered.map((post) => 
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