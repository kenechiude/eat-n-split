import { useState } from "react";

export default function FriendForm({ handleDisplay, friends, setFriends }) {
  const [formData, setFormData] = useState({
    name: "",
    id: Date.now() * Math.random(),
    balSheet: [],
  });

  function handleAddFriend(e) {
    e.preventDefault();
    if (!formData.name) {
      alert("Please input a name!");
      return;
    }

    setFriends([...friends, formData]);
    setFormData({
      name: "",
      id: Date.now() * Math.random(),
      balSheet: [],
    });
  }

  return (
    <form className="friend-form">
      <div className="form-div">
        <span>👨🏼‍🤝‍👨🏼Friend name</span>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-div btn-div">
        <button
          onClick={(e) => {
            handleAddFriend(e);
            handleDisplay();
          }}
        >
          Add
        </button>
        <button className="cl-btn" onClick={handleDisplay}>
          Close
        </button>
      </div>
    </form>
  );
}
