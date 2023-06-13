import React from "react";
import "@/style/FriendItem.scss";
import { IoPersonCircle as ProfilePicture } from "react-icons/io5";
import { BsFillCircleFill as Circle } from "react-icons/bs";
import { FetchApi } from "@/FetchApi";

function FriendItem({ friend, setUser }: { friend: any; setUser: any }) {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  let colorStatus = "";

  function handleStatusColor() {
    switch (friend.status) {
      case "On an adventure": {
        colorStatus = "gold";
        break;
      }
      case "At home": {
        colorStatus = "green";
        break;
      }
      case "Not available": {
        colorStatus = "darkred";
        break;
      }
      default: {
        colorStatus = "white";
        break;
      }
    }
  }

  handleStatusColor();

  function handleRemoveFriend() {
    FetchApi.delete(`/users/friends/${friend.uid}`, accessToken).then((res) => {
      // res is friend that got removed
      setUser((prev: any) => {
        const newFriends = prev.friends?.filter(
          (friend: any) => friend.friendUserId !== res.friendUserId
        );
        return { ...prev, friends: newFriends };
      });
    });
  }

  return (
    <div className="friend-item">
      <div className="friend-item-header">
        <div className="friend-item-remove" onClick={handleRemoveFriend}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </div>
      <div className="friend-item-container">
        <div className="friend-item-image">
          <ProfilePicture className="status-image" size={60} color="darkblue" />
          <Circle className="status-circle" size={15} color={colorStatus} />
        </div>
        <div className="friend-item-name">{friend.username}</div>
        <div className="friend-item-status">{friend.status}</div>
      </div>
    </div>
  );
}

export default FriendItem;
