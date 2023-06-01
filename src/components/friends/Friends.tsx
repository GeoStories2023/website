import React, { useRef, useState } from "react";
import "@/style/Friends.scss";
import FriendItem from "./FriendItem";
import { BsPersonFillAdd as AddFriend } from "react-icons/bs";
import { IoPersonCircle as ProfilePicture } from "react-icons/io5";
import { FetchApi } from "@/FetchApi";
import { User } from "@prisma/client";
import Loading from "../utils/Loading/Loading";

function Friends({ user, setUser }: { user: User; setUser: any }) {
  const accessToken = localStorage.getItem("accessToken") ?? "";
  const friendSearchRef = useRef < HTMLInputElement > (null);
  const [error, setError] = useState < string > ("");
  // Fetching friends from current user

  function handleAddFriend(e: any) {
    e.preventDefault();
    if (!friendSearchRef.current?.value) return;
    const friendName = friendSearchRef.current.value;
    if (friendName === user.username) {
      setError("You can't add yourself as a friend");
      return;
    }
    FetchApi.post(`/users/friends`, accessToken, {
      friendName: friendName,
    })
      .then((friend) => {
        setError("");
        setUser((prev: any) => {
          return { ...prev, friends: [...prev.friends, friend] };
        });
        friendSearchRef.current!.value = "";
      })
      .catch((err) => {
        setError(err.responseText ?? err.statusText);
      });
  }

  function handleStatusChange(status: string) {
    FetchApi.put(`/users`, accessToken, {
      user: { status: status },
    });
    setUser((prev: any) => {
      return { ...prev, status: status };
    });
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
            placeholder="Add friend with name"
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
            <select
              id="status"
              name="status"
              onChange={(e) => {
                handleStatusChange(e.target.value);
              }}
              defaultValue={user?.status}
            >
              <option value="" selected={user?.status === ""}>
                Choose your status ...
              </option>
              <option
                value="On an adventure"
                selected={user?.status === "On an adventure"}
              >
                On an adventure
              </option>
              <option value="At home" selected={user?.status === "At home"}>
                At home
              </option>
              <option
                value="Not available"
                selected={user?.status === "Not available"}
              >
                Not available
              </option>
            </select>
          </div>
        </div>
      </div>
      <section className="friends-list-container">
        {user ? (
          user.friends?.map((friend: any) => {
            const friendData = friend.friendUser;
            return (
              <FriendItem
                key={friend.id}
                friend={friendData}
                setUser={setUser}
              />
            );
          })
        ) : (
          <Loading />
        )}
      </section>
    </div>
  );
}

export default Friends;
