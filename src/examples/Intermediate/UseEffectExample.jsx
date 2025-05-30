import React, { useState, useEffect } from "react";

/**
 * useEffect Hook Example
 * ---------------------
 * This fetches a random joke from an API whenever the button is clicked.
 * useEffect runs side effects in functional components.
 */
export default function UseEffectExample() {
  const [joke, setJoke] = useState(null);

  const fetchJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => setJoke(data.value));
  };

  // Fetch a joke on initial render
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <div>
        <strong>Joke:</strong>
        <p>{joke || "Loading..."}</p>
      </div>
      <button onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}