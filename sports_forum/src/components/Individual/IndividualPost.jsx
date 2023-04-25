import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import upvote from '../../assets/upvote.png'

import './Individual.css'

export default function Post(){
    const [edit, setEdit] = useState(false)
    const [iname, setName] = useState()
    const [idescr, setDescr] = useState()
    const [ititle, setTitle] = useState()

    const [comments, setComments] = useState([])
    const [newComment, setNew] = useState()

    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const response = await supabase
            .from('Sports_Posts')
            .select()
            .eq('id', id)
            setData(response.data[0])
            setComments(response.data[0].comments)
        }
        fetchData().catch(console.error)
    }, [])

    const handleSubmit = async(e) => {
        setEdit(false)
        await supabase
        .from('Sports_Posts')
        .update({name:iname, descr:idescr, title:ititle})
        .eq('id', id)

        window.location = `/posts/${id}`
    }

    const handleDelete = async(e) => {
        e.preventDefault();
        await supabase
        .from('Sports_Posts')
        .delete()
        .eq('id', id)
        window.location = "/"

    }

    const handleComment = async(e) => {
        e.preventDefault();
        console.log(comments)
        setComments((prevState) => ({...prevState, newComment}))
        console.log(comments)

        await supabase
        .from('Sports_Posts')
        .update({comments: comments})
        .eq('id', id)
    }

    return(
        
        <div className="indContent">
            <div className="content">
                <div className="topContent">
                    {data && 
                    <div>
                        <div className='post' key={id}>
                            <h1 className="title">{data.title}</h1>
                            <div>{data.name}</div>
                            <p>{data.descr}</p>
                            <div id='upvoteSection'>
                                <div id="upvoteButton">
                                <img src={upvote} width="20px"/>
                                </div>
                                <div id="upvoteCount">{data.upvotes}</div>
                            </div>
                            </div>
                        </div>
                    }
                    <div className="buttons">
                        <div className="CRUDbutton" onClick={() => setEdit(true)}>Edit</div>
                        <div className="CRUDbutton" onClick={handleDelete}>Delete</div>
                    </div>
                </div>

                {edit &&
                <div className="editForm">
                    <form className='createForm'>
                        <div className="formSection">
                            <div className='formTitle'>Name:</div>
                            <input type="text" placeholder="name" value={iname} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className="formSection">
                            <div className='formTitle'>Description:</div>
                            <textarea placeholder="description" value={idescr} onChange={(e) => setDescr(e.target.value)} id="descr"></textarea>
                        </div>
                        <div className="formSection">
                            <div className='formTitle'>Title:</div>
                            <input type="text" placeholder="title" value={ititle} onChange={(e) => setTitle(e.target.value)} id="descr"></input>
                        </div>
                    </form>
                    <div className="CRUDbutton" onClick={handleSubmit}>
                        Submit
                    </div>
                </div>
                }
            </div>

            <div className="commentSection">
                <div className="commentHeader">
                    <h3>New Comment</h3>
                    <div className="CRUDbutton" onClick={handleComment}>
                        Submit
                    </div>
                </div>
             
                <textarea placeholder="New Comment" onChange={(e) => setNew(e.target.value)}></textarea>
                <div className="comments">
                    <h1>Comments</h1>
                    <div className="indComments">
                        {comments &&
                        comments.map((comment) =><div className="indComment">{comment}</div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}