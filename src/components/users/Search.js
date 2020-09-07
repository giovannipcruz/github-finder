import React, { useState, useContext } from "react";

// context on app level state
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

function Search(props) {
  const githubContext = useContext(GithubContext);
  const { searchUser, clearUsers, users } = githubContext;

  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState("");

  const onSearchTextChange = (e) => {
    setText(e.target.value); // "this" is not rebinded for arrow functions
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert({ msg: "Please enter search text", type: "light" });
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" onChange={onSearchTextChange} name="text" value={text} placeholder="Search Users...."></input>
        <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

export default Search;

// ==== Version where state is not in a Context ====
/*
import React, { useState } from "react";
import PropTypes from "prop-types";

function Search(props) {
  const { alert, searchUser, showClearUsers, clearUsers } = props;

  const [text, setText] = useState("");

  const onChange = (e) => setText(e.target.value); // this is not rebinded for arrow functions

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert({ msg: "Please enter search text", type: "light" });
    } else {
      searchUser(text);
      setText("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" onChange={onChange} name="text" value={text} placeholder="Search Users...."></input>
        <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
      </form>
      {showClearUsers && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

Search.propTypes = {
  searchUser: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClearUsers: PropTypes.bool.isRequired,
};

export default Search;
*/

// ==== ES6 Class based Component ====
/*
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = { text: "" };

  static propTypes = {
    searchUser: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClearUsers: PropTypes.bool.isRequired,
  };

  onChange = (e) => this.setState({ text: e.target.value }); // this is not rebinded for arrow functions

  onSubmit(e) {
    e.preventDefault();

    if (this.state.text === "") {
      this.props.alert({ msg: "Please enter search text", type: "light" });
    } else {
      this.props.searchUser(this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit.bind(this)} className="form">
          <input type="text" onChange={this.onChange} name="text" value={this.state.text} placeholder="Search Users...."></input>
          <input type="submit" value="Search" className="btn btn-dark btn-block"></input>
        </form>
        {this.props.showClearUsers && (
          <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>
            Clear
          </button>
        )}
      </div>
    );
  }
}
*/
