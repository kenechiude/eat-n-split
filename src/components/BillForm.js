import { useState } from "react";

export default function BillForm({
  handleBillForm,
  handleCancel,
  activeFriend,
}) {
  const [formData, setFormData] = useState({
    billValue: "",
    userExpense: "",
    payer: "you",
  });

  const friendExpense = formData.billValue - formData.userExpense || "";
  const amt = () =>
    formData.payer === "you" ? -friendExpense : formData.userExpense;

  return (
    <div className="bill-form">
      <form
        className="b-f-form"
        onSubmit={(e) => {
          handleBillForm(e, amt(), activeFriend.id);
          handleCancel();
        }}
      >
        <span className="x-btn" onClick={handleCancel}>
          &#10005;
        </span>
        <p className="b-f-p">Split a bill with {activeFriend.name}</p>

        <div className="b-f-form-div">
          <span>💰 Bill Value</span>
          <input
            type="number"
            value={formData.billValue}
            onChange={(e) =>
              setFormData({ ...formData, billValue: +e.target.value })
            }
          />
          <span>🕺 Your Expense</span>
          <input
            type="number"
            value={formData.userExpense}
            onChange={(e) =>
              setFormData({ ...formData, userExpense: +e.target.value })
            }
          />
          <span>👨🏽‍🤝‍👨🏼 {activeFriend.name}'s Expense</span>
          <span className="frnd-exp">{friendExpense}</span>
          <span>🤑 Who's paying?</span>
          <select
            value={formData.payer}
            onChange={(e) =>
              setFormData({ ...formData, payer: e.target.value })
            }
          >
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
