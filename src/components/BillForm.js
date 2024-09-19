export default function BillForm() {
  return (
    <div className="bill-form">
      <form className="b-f-form">
        <p className="b-f-p">Split a bill with X</p>
        <div className="b-f-form-div">
          <span>💰 Bill Value</span>
          <input type="number" />
          <span>🕺 Your Expense</span>
          <input type="number" />
          <span>👨🏽‍🤝‍👨🏼 X's Expense</span>
          <input type="number" />
          <span>🤑 Who's paying?</span>
          <select>
            <option value="you">You</option>
            <option value={"x"}>X</option>
          </select>
          <div></div>
          <button className="sp-btn">Split Bill</button>
        </div>
      </form>
    </div>
  );
}
