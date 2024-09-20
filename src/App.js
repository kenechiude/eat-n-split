import { useState } from "react";
import FriendsDisplay from "./components/FriendsDisplay";
import BillForm from "./components/BillForm";

export default function App() {
  const [friends, setFriends] = useState([
    {
      name: "Jane",
      id: Date.now() * Math.random(),
      balSheet: [230, -345, 500],
    },
    {
      name: "Jimmy",
      id: Date.now() * Math.random(),
      balSheet: [],
    },
    {
      name: "John",
      id: Date.now() * Math.random(),
      balSheet: [23, -345, 50, 34, -67],
    },
  ]);

  const [billFormIsOpen, setBillFormIsopen] = useState(false);
  const [activeFriend, setActiveFriend] = useState(null);

  function handleSelectBtn(id) {
    setActiveFriend(friends.find((friend) => friend.id === id));
    setBillFormIsopen(activeFriend?.id === id ? false : true);
  }

  return (
    <div className="container">
      <FriendsDisplay
        handleSelectBtn={handleSelectBtn}
        friends={friends}
        setFriends={setFriends}
      />
      {billFormIsOpen && <BillForm activeFriend={activeFriend} />}
    </div>
  );
}
