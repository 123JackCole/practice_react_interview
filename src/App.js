import React from "react";
import "./App.css";
import User from "./User.js";

const { useState, useEffect } = React;

function App() {
  // counter
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  // api fetch
  const [APIData, setAPIData] = useState("");
  const [UserData, setUserData] = useState([]);
  const endpoint = "https://randomuser.me/api";

  const fetchAPIData = () => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setAPIData(...data.results);
      });
  };

  useEffect(() => {
    fetchAPIData();
  }, []);

  useEffect(() => {
    if (APIData) setUserData((prev) => [...prev, APIData]);
  }, [APIData]);

  // const users = [];
  // UserData.forEach((user, index) => {
  //   users.push(<User data={user} key={index} />);
  // });

  const users = () => {
    return UserData.map((user, index) => {
      return <User data={user} key={index} />;
    })
  };

  return (
    <div>
      <h1>Times Clicked : {counter}</h1>
      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => fetchAPIData()}> Another User </button>
      {users()}
      <br></br>
    </div>
  );
}

export default App;
