import React from "react";

// User component

const User = (props) => {
  const {
    name: { title, last },
    picture: { large },
  } = props.data;
  if (props) {
    return (
      <div>
        <h1>
          {title}. {last}
        </h1>
        <img src={large} alt=""></img>
      </div>
    );
  }
};

export default User;
