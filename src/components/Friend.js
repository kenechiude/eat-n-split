import Status from "./Status";

export default function Friend({
  handleBtnDisplay,
  clicked,
  handleSelectBtn,
  friend,
}) {
  const total = friend.balSheet.reduce((acc, num) => (num += acc), 0);

  return (
    <div className="friend">
      <div className="dp">
        <span>{friend.name.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="cntx">
        <span className="name">{friend.name}</span>
        <Status total={total} name={friend.name} />
      </div>
      <button
        className="frnd-btn"
        onClick={() => {
          handleBtnDisplay(friend.id);
          handleSelectBtn(friend.id);
        }}
      >
        {friend.id === clicked ? "Close" : "Select"}
      </button>
    </div>
  );
}
