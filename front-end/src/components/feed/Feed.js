import React from 'react';
import "./feed.css";
import Share from "../share/Share";
import Post from "../post/Post";
import axios from "axios";
import {useEffect,useState} from "react";
// import {Posts} from "../../dummyData"

export default function Feed({username}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async()=>{
      // const response = await axios.get("posts/timeline/65538cda5aff1e1cd9832eed");
      const res = username 
        ? await axios.get("http://localhost:8800/api/posts/profile/"+username)
        : await axios.get("http://localhost:8800/api/posts/timeline/65538cda5aff1e1cd9832eed");
      // console.log(res.data);
      setPosts(res.data)
    };
    fetchPosts([username]);
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        { posts.map(p=>(
          <Post key={p._id} post={p} />
        )) };
        <Post />
      </div>
    </div>
  );
}
