import { useState } from "react";
import Friend from "./Friend";
import FriendForm from "./FriendForm";

export default function FriendsDisplay({
  handleSelectBtn,
  friends,
  setFriends,
}) {
  const [friendFormIsOpen, setFriendformIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  function handleDisplay() {
    setFriendformIsOpen(!friendFormIsOpen);
  }

  function handleBtnDisplay(id) {
    setClicked(id === clicked ? null : id);
  }

  return (
    <div className="friend-div">
      {friends.map((friend) => (
        <Friend
          handleSelectBtn={handleSelectBtn}
          handleBtnDisplay={handleBtnDisplay}
          clicked={clicked}
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
        <button className="add-frnd-btn" onClick={handleDisplay}>
          Add Friend
        </button>
      )}
    </div>
  );
}
