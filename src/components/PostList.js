import React, { useState, useEffect } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(resp => resp.json())
      .then(json => setPosts(json))
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {posts.map(post =>
          <Post key={post.id} title={post.title} />
        )}
      </ul>
    </div>
  );
}

export default PostList;


const Post = ({ title }) => {
  return <li>{title}</li>
}
