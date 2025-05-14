import { useState } from "react";
import Ticket from "./Ticket";

export default function Lottery() {
  const [ticket, setTicket] = useState([]);
  const [message, setMessage] = useState("");

  const generateTicket = () => {
    const newTicket = Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * 10)
    );
    const sum = newTicket.reduce((acc, val) => acc + val, 0);
    setTicket(newTicket);
    if (sum === 15) {
      setMessage("🎉 You won the Lottery!");
    } else {
      setMessage("😢 Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <button onClick={generateTicket} style={{ padding: "10px 20px" }}>
        Generate Ticket
      </button>
      {ticket.length > 0 && (
        <>
          <Ticket numbers={ticket} />
          <p>{message}</p>
        </>
      )}
    </div>
  );
}
