import { useEffect, useState } from "react";

export default function Joker() {
  const [joke, setJoke] = useState({});
  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    try {
      const res = await fetch(URL);
      const jsonres = await res.json();
      setJoke({ setup: jsonres.setup, punchline: jsonres.punchline });
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  useEffect(() => {
    const getFirstJoke = async () => {
      try {
        const res = await fetch(URL);
        const jsonres = await res.json();
        setJoke({ setup: jsonres.setup, punchline: jsonres.punchline });
      } catch (error) {
        console.error("Error fetching joke:", error);
      }
    };

    getFirstJoke(); // call it inside
  }, []);

  return (
    <div>
      <h1>Jokes</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>Get New Joke</button>
    </div>
  );
}
