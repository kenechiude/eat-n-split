import Status from "./Status";

export default function Friend({ activeFriend, handleSelectBtn, friend }) {
  const total = friend.balSheet.reduce((acc, num) => (num += acc), 0);

  return (
    <div className={`friend ${activeFriend?.id === friend.id && "active"}`}>
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
          handleSelectBtn(friend.id);
        }}
      >
        Select
      </button>
    </div>
  );
}
