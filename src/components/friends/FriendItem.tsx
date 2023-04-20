import React from "react";
import "@/style/FriendItem.scss";
import { IoPersonCircle as ProfilePicture } from "react-icons/io5";
import { BsFillCircleFill as Circle } from "react-icons/bs";
import Friends from "./Friends";

function FriendItem({ friend }: { friend: any }) {
  let colorStatus = "";

  function handleStatusColor() {
    switch (friend.status) {
      case "online": {
        colorStatus = "green";
        break;
      }
      case "offline": {
        colorStatus = "darkred";
        break;
      }
      case "busy": {
        colorStatus = "gold";
        break;
      }
      default: {
        colorStatus = "white";
        break;
      }
    }
  }

  handleStatusColor();

  return (
    <div className="friend-item">
      <div className="friend-item-container">
        <div className="friend-item-image">
          <ProfilePicture className="status-image" size={60} color="darkblue" />
          <Circle className="status-circle" size={15} color={colorStatus} />
        </div>
        <div className="friend-item-name">{friend.name}</div>
      </div>
    </div>
  );
}

export default FriendItem;
