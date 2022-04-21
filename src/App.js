import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"



function App() {
  const [posts, setPosts] = useState([
  {name: 'Steve',post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam' }, 
  {name: 'Michael', post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam'}, 
  {name: 'Bob', post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam'}]);

  function addNewPost(entry){
    let tempPosts = [...posts, entry];
    setPosts(tempPosts)
  }
  
  return (
    <div>
      <NavBar/>
      <body class = 'body'>
        <CreatePost addNewPost={addNewPost}/>
        <DisplayPosts posts = {posts}/>
        </body>
      
    </div>
  );
}

export default App;
