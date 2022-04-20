import CustomButtons from "./CustomButtons/CustomButtons";

const Post = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.post}</p>
            <CustomButtons/>
            
            
            

        </div>
        
     );
}
 
export default Post;