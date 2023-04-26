import React from "react";
import "@/style/Friends.scss";
import FriendItem from "./FriendItem";
import { BsPersonFillAdd as AddFriend } from "react-icons/bs";
import { IoPersonCircle as ProfilePicture } from "react-icons/io5";

function Friends() {
  // Fetching friends from current user
  const friends = [
    {
      name: "Julius123",
      status: "online",
      id: 1,
    },
    {
      name: "Lena123",
      status: "offline",
      id: 2,
    },
    {
      name: "Julius123",
      status: "online",
      id: 3,
    },
    {
      name: "Noah123",
      status: "busy",
      id: 4,
    },
    {
      name: "Julius123",
      status: "online",
      id: 5,
    },
    {
      name: "Julius123",
      status: "online",
      id: 6,
    },
  ];
  return (
    <div className="friends-container">
      <div className="friends-header">
        <span className="friends-title">Friends</span>
        <div className="add-friends">
          <input
            type="text"
            id="friendsName"
            name="friendsName"
            placeholder="Suche nach den Namen deiner Freunde"
          />
          <button className="btn-add-friends">
            <AddFriend size={30} />
            Hinzufügen
          </button>
        </div>
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
        {friends.map((friend: any) => {
          return <FriendItem key={friend.id} friend={friend} />;
        })}
      </section>
    </div>
  );
}

export default Friends;
