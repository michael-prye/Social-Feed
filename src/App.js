import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import CreatePost from "./Components/CreatePost/CreatePost";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"



function App() {
  const [posts, setPosts] = useState([
  {date: '1/1/2022, 1:35:00 PM',name: 'Steve',post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam' }, 
  {date: '2/2/2022, 1:35:00 PM',name: 'Michael', post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam'}, 
  {date: '3/3/2022, 1:35: PM',name: 'Bob', post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam'}]);

  function addNewPost(entry){
    let tempPosts = [entry,...posts];
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
