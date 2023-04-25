import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../supabase";
import upvote from '../../assets/upvote.png'

export default function Post(){
    const {id} = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async() => {
            const response = await supabase
            .from('Sports_Posts')
            .select()
            .eq('id', id)

            setData(response.data[0])
        }

        fetchData().catch(console.error)
    }, [])

    console.log(data)

    return(
        
        <div>
            {data && 
            <div>
                <div className='post' key={id}>
                    <h1>{data.title}</h1>
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
        </div>
    )
}