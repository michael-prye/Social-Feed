import Post from "../Post/Post";
import "./DisplayPosts.css"


const DisplayPosts = (props) => {
    return ( 
    <table class = "table">
        <tbody>
            {props.posts.map((post)=>{
                return(
                    <Post name ={post.name} post ={post.post} date={post.date}/>
                )
            })}
        </tbody>
    </table>
    
    
    
    );
}
 
export default DisplayPosts;