export default function Status({ total, name }) {
  if (!total) return <span className="ash">You and {name} are even 😁</span>;
  else
    return total > 0 ? (
      <span className="grn">{`${name} owes you $${total}`}</span>
    ) : (
      <span className="rd">{`You owe ${name} $${Math.abs(total)}`}</span>
    );
}
