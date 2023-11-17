import React from "react";
import { MoreVert } from "@material-ui/icons";
import "./post.css";
import axios from "axios";
import { format } from "timeago.js";
import {useEffect,useState} from "react";
import {Link} from "react-router-dom";

export default function Post({post}) {

  const [like,setLike]=useState(post?.likes.length);
  const [isLiked,setIsLiked]=useState(false);
  const [user,setUser]=useState({});
  const PF=process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async()=>{
      const res = await axios.get(`http://localhost:8800/api/users?userId=${post?.userId}`);
      // const res = await axios.get(`http://localhost:8800/api/users/65538cda5aff1e1cd9832eed`);
      setUser(res.data)
    };
    fetchUser();
  }, [post?.userId]);

  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <Link to={`profile/${user.username}`}>
                <img 
                className="postProfileImg" 
                src={user?.profilePicture || PF+"person/noAvatar.png"}  
                alt="" 
                />
                </Link>
                <span className="postUsername">
                  {user?.username}
                </span>
                <span className="postDate" >{format(post?.createdAt)}</span>
            </div>
            <div className="postTopRight">
                <MoreVert />
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={PF+post?.img} alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft" >
                <img className="likeIcon" src={`${PF}like.png`} alt="" onClick={likeHandler} ></img>
                <img className="likeIcon" src={`${PF}heart.png`} alt="" onClick={likeHandler} ></img>
                <span className="postLikeCounter"> {like} people liked it</span>
            </div>
            <div className="postBottomRight" >
            <span className="postCommentText"> {post?.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
