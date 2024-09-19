import { useState } from "react";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

export default function FriendsDisplay({ friends, setFriends }) {
  const [formIsOpen, setFomIsOpen] = useState(false);

  function handleDisplay() {
    setFomIsOpen(!formIsOpen);
  }

  return (
    <div className="friend-div">
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
      {formIsOpen ? (
        <FriendForm
          handleDisplay={handleDisplay}
          friends={friends}
          setFriends={setFriends}
        />
      ) : (
        <button className="add-frnd-btn" onClick={handleDisplay}>
          Add Friend
        </button>
      )}
    </div>
  );
}
