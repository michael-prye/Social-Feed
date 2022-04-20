import Post from "../Post/Post";


const DisplayPosts = (props) => {
    return ( 
    <table>
        <tbody>
            {props.posts.map((post)=>{
                return(
                    <div>
                        <Post name ={post.name} post ={post.post}/>
                    </div>
                )
            })}
        </tbody>
    </table>
    
    
    
    );
}
 
export default DisplayPosts;