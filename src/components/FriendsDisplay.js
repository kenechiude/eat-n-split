import { useState } from "react";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

export default function FriendsDisplay({
  handleSelectBtn,
  handleCancel,
  activeFriend,
  friends,
  setFriends,
}) {
  const [friendFormIsOpen, setFriendformIsOpen] = useState(false);

  function handleDisplay() {
    setFriendformIsOpen(!friendFormIsOpen);
  }

  return (
    <div className="friend-div">
      {friends.map((friend) => (
        <Friend
          handleSelectBtn={handleSelectBtn}
          activeFriend={activeFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
      {friendFormIsOpen ? (
        <FriendForm
          handleDisplay={handleDisplay}
          friends={friends}
          setFriends={setFriends}
        />
      ) : (
        <button
          className="add-frnd-btn"
          onClick={() => {
            handleDisplay();
            handleCancel();
          }}
        >
          Add Friend
        </button>
      )}
    </div>
  );
}
