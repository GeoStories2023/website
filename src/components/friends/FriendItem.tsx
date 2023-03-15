import React from 'react'
import "@/style/FriendItem.scss";

function FriendItem({ friend }) {
  return (
    <div className="friend-item-container">
      <div className="friend-item-image"></div>
      <div className="friend-item-name">{friend.name}</div>
    </div>
  )
}

export default FriendItem;
