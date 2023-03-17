import React from 'react'
import "@/style/User.scss";
import { useParams } from 'react-router-dom';

function User() {
  const { user } = useParams();
  // Fetch user info
  const userInfo = {
    name: "Grogu",
  }
  return (
    <div className="user-container">
      <div className="user-header">
        <h1>Username url: '{user}'</h1>
      </div>
    </div>
  )
}

export default User;
