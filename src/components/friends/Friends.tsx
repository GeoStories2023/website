import React from 'react'
import "@/style/Friends.scss";
import FriendItem from './FriendItem';

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
    }
  ]
  return (
    <div className="friends-container">
      <div className="friends-header">
        <h1>Friends</h1>
        <div></div>
      </div>
      <section className="friends-list-container">
        {friends.map((friend: any) => {
          return <FriendItem key={friend.id} friend={friend} />
        })}
      </section>
    </div>
  )
}

export default Friends;
