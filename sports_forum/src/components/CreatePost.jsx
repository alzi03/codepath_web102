import { useState } from 'react'
import { supabase } from '../supabase'

export default function CreatePost(){
  const [iname, setName] = useState()
  const [idescr, setDescr] = useState()
  const [ititle, setTitle] = useState()

  const handleSubmit = async(e) => {

    if (!iname || !idescr || !ititle){
      alert('Please enter all fields!')
      return
    }
    e.preventDefault();

    await supabase
    .from('Sports_Posts')
    .insert({
      name: iname,
      descr: idescr,
      title: ititle
    })
    .select();
    
    window.location="/posts"
  }



  return(
    <div className='createPost'>
      <h1>Create New Post</h1>
      <form className='createForm'>
        <div className="formSection">
          <div className='formTitle'>Name:</div>
          <input type="text" placeholder="name" value={iname} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div className="formSection">
          <div className='formTitle'>Description:</div>
          <input type="text" placeholder="description" value={idescr} onChange={(e) => setDescr(e.target.value)} id="descr"></input>
        </div>
        <div className="formSection">
          <div className='formTitle'>Title:</div>
          <input type="text" placeholder="title" value={ititle} onChange={(e) => setTitle(e.target.value)} id="descr"></input>
        </div>
      </form>
      <div className="submitButton" onClick={handleSubmit}>
        Submit
      </div>
    </div>
  )
}