import React, { useRef, useState } from "react";
import "@/style/Friends.scss";
import FriendItem from "./FriendItem";
import { BsPersonFillAdd as AddFriend } from "react-icons/bs";
import { IoPersonCircle as ProfilePicture } from "react-icons/io5";
import { FetchApi } from "@/FetchApi";
import { User } from "@prisma/client";
import Loading from "../utils/Loading/Loading";

function Friends({ user }: { user: User }) {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const friendSearchRef = useRef < HTMLInputElement > (null)
  const [error, setError] = useState < string > ("")
  // Fetching friends from current user

  function handleAddFriend(e: any) {
    e.preventDefault()
    if (!friendSearchRef.current?.value) return
    const friendUid = friendSearchRef.current.value
    // Check if friendUid exists
    FetchApi.get(`/users/${friendUid}`, accessToken)
      .then((res) => {
        if (res) {
          setError("")
          // Add friend
          FetchApi.post(`/users/${user.uid}/friends`, accessToken, {
            friendUid: friendUid
          })
        } else {
          setError("UserId not found")
        }
      })
  }

  return (
    <div className="friends-container">
      <div className="friends-header">
        <span className="friends-title">Friends</span>
        <form onSubmit={handleAddFriend} className="add-friends">
          {error ? <span className="error-message">{error}</span> : null}
          <input
            ref={friendSearchRef}
            type="text"
            id="friendsName"
            name="friendsName"
            placeholder="Add user with UserID"
          />
          <button className="btn-add-friends">
            <AddFriend size={30} />
            Hinzufügen
          </button>
        </form>
      </div>
      <div className="status">
        <div className="status-container">
          <ProfilePicture size={100} />
          <div className="status-options">
            <span className="status-text">Dein Status:</span>
            <select id="status" name="status">
              <option value="choose">Choose your status ...</option>
              <option value="onAdventure">On an adventure</option>
              <option value="atHome">At home</option>
              <option value="notAvailable">Not available</option>
            </select>
          </div>
        </div>
      </div>
      <section className="friends-list-container">
        {user ? user.friends?.map((friend: any) => {
          const friendData = friend.friendUser;
          return <FriendItem key={friend.id} friend={friendData} />;
        }) : <Loading />}
      </section>
    </div>
  );
}

export default Friends;
