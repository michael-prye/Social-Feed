import CustomButtons from "./CustomButtons/CustomButtons";
import "./Post.css"

const Post = (props) => {
    console.log(props)
    return (
        <div class ="div">
            <h3 class = "name">{props.name}</h3>
            <p class="post">{props.post}</p>
            <CustomButtons/>
            
            
            

        </div>
        
     );
}
 
export default Post;