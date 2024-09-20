import { useState } from "react";

export default function BillForm({ activeFriend }) {
  const [formData, setFormData] = useState({
    billValue: 0,
    yourExpense: 0,
    friendExpense: 0,
    payer: "",
  });

  return (
    <div className="bill-form">
      <form className="b-f-form">
        <p className="b-f-p">Split a bill with {activeFriend.name}</p>
        <div className="b-f-form-div">
          <span>💰 Bill Value</span>
          <input type="number" />
          <span>🕺 Your Expense</span>
          <input type="number" />
          <span>👨🏽‍🤝‍👨🏼 {activeFriend.name}'s Expense</span>
          <input type="number" />
          <span>🤑 Who's paying?</span>
          <select>
            <option value="you">You</option>
            <option value={activeFriend.name}>{activeFriend.name}</option>
          </select>
          <div></div>
          <button className="sp-btn">Split Bill</button>
        </div>
      </form>
    </div>
  );
}
