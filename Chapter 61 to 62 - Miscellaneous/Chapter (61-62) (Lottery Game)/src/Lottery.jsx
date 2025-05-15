import { use, useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./Helper";
import Ticket from "./Ticket";

export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game !</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning && "Congratulations You Won !!"}</h3>
    </div>
  );
}
