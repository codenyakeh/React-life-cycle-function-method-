import React, { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UsersAgain = () => {
  let myUsers = [];
  const [users, setUsers] = useState(myUsers);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  });
  return (
    <div style={{padding: "30px"}}>
      <h1>All users</h1>
      <hr />
      <div>
        {users.map((User) => (
          <div>
            <p>{User.name}</p>
            <p>{User.username}</p>
            <p>{User.website}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersAgain;
