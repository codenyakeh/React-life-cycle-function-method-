import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        console.log("users", users);
        this.setState({users: users})
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div style={{padding: "30px"}}>
        <h1>Users</h1>
        <hr/>
        <div>
          {this.state.users.map(User => <div>
            <p>{User.name}</p>
            <p>{User.username}</p>
            <p>{User.website}</p>
            <hr />
          </div>)}
        </div>
      </div>
    );
  }
}

export default User;
