const Post = (props) => {
    console.log(props)
    return (
        <div>
            <h3>{props.name}</h3>
            <p>{props.post}</p>
            <div><button>THUMBS UP</button></div>
            <div><button>THUMBS DOWN</button></div>

        </div>
        
     );
}
 
export default Post;