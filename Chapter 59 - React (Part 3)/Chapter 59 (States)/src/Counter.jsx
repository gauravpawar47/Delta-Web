import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let incCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incCount}> Count : {count}</button>
    </div>
  );
}
