import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// context on app level state
import GithubContext from "../../context/github/GithubContext";

// components
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

function User(props) {
  const githubContext = useContext(GithubContext);
  const { getUser, getUserRepos, loading, user, repos } = githubContext;

  const { match } = props;

  useEffect(() => {
    const login = match.params.login;
    getUser(login);
    getUserRepos(login);
  }, []);

  const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable: {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
      <div className="card grid-2">
        <div className="all-center">
          <img src={avatar_url} alt="" className="round-img" style={{ width: "150px" }} />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          <div>
            <h3>Bio:</h3>
            <p>{bio}</p>
          </div>
          <a href={html_url} className="btn btn-dark my-1">
            GitHub Profile
          </a>
          <ul>
            <li>
              <strong>Username: {login ? login : ""}</strong>
            </li>
            <li>
              <strong>Company: {company ? login : ""}</strong>
            </li>
            <li>
              <strong>Blog: {blog ? blog : ""}</strong>
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
}

export default User;

// ==== ES6 Class based Component ====
/*
import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// components
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

export default class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    repos: PropTypes.array.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const login = this.props.match.params.login;
    console.log(`login: ${login}`);
    this.props.getUser(login);
    this.props.getUserRepos(login);
  }

  render() {
    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = this.props.user;

    const { loading, repos } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        Hireable: {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} alt="" className="round-img" style={{ width: "150px" }} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            <div>
              <h3>Bio:</h3>
              <p>{bio}</p>
            </div>
            <a href={html_url} className="btn btn-dark my-1">
              GitHub Profile
            </a>
            <ul>
              <li>
                <strong>Username: {login ? login : ""}</strong>
              </li>
              <li>
                <strong>Company: {company ? login : ""}</strong>
              </li>
              <li>
                <strong>Blog: {blog ? blog : ""}</strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </>
    );
  }
}
*/
