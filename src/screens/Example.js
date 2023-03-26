import axios from "axios";
import React, {useState,useEffect} from "react";

const baseURL = "http://localhost:8080/1";

export default function Example() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
        {console.log(post.name)}
      <h1>{post._id}</h1>
      <p>{post.image}</p>
    </div>
  );
}