import React, {useState} from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";



function App() {
  const [posts, setPosts] = useState([
  {name: 'Steve',post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam' }, 
  {name: 'Michael', post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam'}, 
  {name: 'Bob', post: 'faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam'}]);
  
  return (
    <div>
      <DisplayPosts posts = {posts}/>
    </div>
  );
}

export default App;
