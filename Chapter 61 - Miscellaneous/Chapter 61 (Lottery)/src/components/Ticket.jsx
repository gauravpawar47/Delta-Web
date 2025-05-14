export default function Ticket({ numbers }) {
  return (
    <div style={{ fontSize: "2rem", margin: "10px" }}>
      🎟️ Ticket: {numbers.join(" ")}
    </div>
  );
}
