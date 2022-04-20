import React, {useState} from "react";

const CreatePost = (props) => {
    const [name, setName] = useState('');
    const [post, setPost] = useState('');


    return ( 
        <form>
            <label>Name</label>
            <input type='text' value={name} onChange={(event)=> setName(event.target.value)}/>
            <label>Post</label>
            <input type="text" value={post} onChange={(event)=> setPost(event.target.value)} />
        </form>
     );
}
 
export default CreatePost;