import React from 'react';
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import {useEffect,useState} from "react";
// import {Posts} from "../../dummyData"

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async()=>{
      const response = await axios.get("http://localhost:8800/api/posts/timeline/65538cda5aff1e1cd9832eed");
      console.log(response);
    };
    fetchPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* { Posts.map(p=>(
          <Post key={p.id} post={p} />
        )) };
        <Post /> */}
         
      </div>
    </div>
  );
}
