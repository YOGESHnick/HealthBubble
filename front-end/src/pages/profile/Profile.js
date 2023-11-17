import React from "react";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect,useState} from "react";
import axios from "axios";

export default function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser]=useState({});

  useEffect(() => {
    const fetchUser = async()=>{
      const res = await axios.get("http://localhost:8800/api/users?username=nick");
      // const res = await axios.get(`http://localhost:8800/api/users/65538cda5aff1e1cd9832eed`);
      setUser(res.data)
    };
    fetchUser();
  }, []);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src= {`${PF}post/3.jpeg`} alt="" />
              <img className="profileUserImg" src= {`${PF}person/7.jpeg`} alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="nicky" />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
