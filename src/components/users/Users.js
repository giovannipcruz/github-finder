import React, { useContext } from "react";

// context on app level state
import GithubContext from "../../context/github/GithubContext";

// components
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

function Users() {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={gridStyle}>
        {users.map((u) => (
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    );
  }
}

export default Users;

// ==== Version where state is not in a Context ====
/*
  import React from "react";

// components
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

import PropTypes from "prop-types";

function Users(props) {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  if (props.loading) {
    return <Spinner />;
  } else {
    return (
      <div style={gridStyle}>
        {props.users.map((u) => (
          <UserItem key={u.id} user={u} />
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
*/

// ==== ES6 Class based Component ====
/* import React, { Component } from "react";

// components
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

export default class Users extends Component {
  gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  render() {
    if (this.props.loading) {
      return <Spinner />;
    } else {
      return (
        <div style={this.gridStyle}>
          {this.props.users.map((u) => (
            <UserItem key={u.id} user={u} />
          ))}
        </div>
      );
    }
  }
} */
