import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem(props) {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img src={avatar_url} alt="avatar" className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

// ==== ES6 Class based Component ====
/* import React, { Component } from "react";

export default class UserItem extends Component {
  constructor() {
    super();
  }

  render() {
    const { login, avatar_url, html_url } = this.props.user;

    return (
      <div className="card text-center">
        <img src={avatar_url} alt="avatar" className="round-img" style={{ width: "60px" }} />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    );
  }
} */
