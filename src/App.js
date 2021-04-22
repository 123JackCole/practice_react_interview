import React from "react";
import "./App.css";
import User from './User.js'

const { useState, useEffect } = React;

function App() {
  // counter
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  // api fetch
  const [APIData, setAPIData] = useState("");
  const endpoint = "https://randomuser.me/api";

  const fetchAPIData = (endpoint) => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        return setAPIData(JSON.stringify(data, null, 2));
      });
  };

  useEffect(() => {
    fetchAPIData(endpoint);
  }, []);

  return (
    <div>
      <h1>Times Clicked : {counter}</h1>
      <button onClick={() => handleClick()}>+1</button>
      <br></br>
      <br></br>
      <br></br>
      <pre>{APIData}</pre>
      <User data={APIData}/>
    </div>
  );
}

export default App;
