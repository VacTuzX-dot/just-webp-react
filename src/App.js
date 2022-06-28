import React, { useState } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Input from "./Input";
import Post from "./Post";
import Navbar1 from "./component/Navbar1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pagess/Home'
import Reports from './pagess/Reports'
import Products from './pagess/Products'

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatedPost = posts.filter((post) => post.id !== id);
    setPosts(updatedPost);
  }

  return (
    <div classname="App">
      <Navbar />
      <Router>
        <Navbar1 />
        <Routes>
          <Route path="/" exact component={Home}/>
          <Route path="/reports" component={Reports}/>
          <Route path="/products" component={Products}/>
        </Routes>
      </Router>
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default App;
