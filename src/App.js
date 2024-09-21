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
      name: "Paul",
      id: Date.now() * Math.random(),
      balSheet: [],
    },
  ]);

  const [billFormIsOpen, setBillFormIsopen] = useState(false);
  const [activeFriend, setActiveFriend] = useState(null);

  function handleSelectBtn(id) {
    setActiveFriend(friends.find((friend) => friend.id === id));
    setBillFormIsopen(true);
  }

  function handleCancel() {
    setActiveFriend(null);
    setBillFormIsopen(false);
  }

  function handleBillForm(e, amt, id) {
    e.preventDefault();
    const arr = activeFriend.balSheet;
    const index = friends.findIndex((friend) => friend.id === id);
    friends.splice(index, 1);
    setFriends([{ ...activeFriend, balSheet: [...arr, amt] }, ...friends]);
  }

  return (
    <div className="container">
      <FriendsDisplay
        handleSelectBtn={handleSelectBtn}
        handleCancel={handleCancel}
        friends={friends}
        activeFriend={activeFriend}
        setFriends={setFriends}
      />
      {billFormIsOpen && (
        <BillForm
          handleCancel={handleCancel}
          activeFriend={activeFriend}
          handleBillForm={handleBillForm}
        />
      )}
    </div>
  );
}
