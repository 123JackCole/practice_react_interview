import React from "react";
import "./App.css";

const { useState } = React;

function App() {
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    counter++;
  };

  const endpoint = "https://randomuser.me/api";
  const [APIFetch, setAPIFetch] = useState();

  const fetchAPI = (endpoint) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setAPIFetch(data));
  };

  return (
    <div className="App">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      <br></br>
      <br></br>
      <br></br>
      {fetchAPI()}
      <h2>{APIFetch}</h2>
    </div>
  );
}

export default App;
