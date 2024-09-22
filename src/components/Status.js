export default function Status({ total, name }) {
  if (!total) return <span className="ash">You and {name} are even 😁</span>;
  else
    return total > 0 ? (
      <span className="rd">{`You owe ${name} $${total}`}</span>
    ) : (
      <span className="grn">{`${name} owes you $${Math.abs(total)}`}</span>
    );
}
