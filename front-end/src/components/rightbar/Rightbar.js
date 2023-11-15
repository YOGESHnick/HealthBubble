import React from "react";
import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Nicky Zan</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online friends :</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City : </span>
            <span className="rightBarInfoValue">Chennai </span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From : </span>
            <span className="rightBarInfoValue">Chennai : Pallikaranai </span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship : </span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/1.jpeg" alt="" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/2.jpeg" alt="" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/3.jpeg" alt="" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/4.jpeg" alt="" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/5.jpeg" alt="" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src="/assets/person/6.jpeg" alt="" />
            <span className="rightbarFollowingName" >John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
