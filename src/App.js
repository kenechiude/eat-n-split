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

  const [isOpen, setIsopen] = useState(false);
  const [activeFriend, setActiveFriend] = useState(null);

  return (
    <div className="container">
      <FriendsDisplay friends={friends} setFriends={setFriends} />
      {isOpen && <BillForm />}
    </div>
  );
}
