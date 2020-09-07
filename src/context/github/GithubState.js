import React, { useReducer } from "react";
import Axios from "axios";

import GithubContext from "./GithubContext";
import githubReducer from "./githubReducer";

import { LOAD_USERS, SEARCH_USERS, CLEAR_USERS, GET_USER, GET_REPOS, SET_LOADING } from "../types";

let githubClientId;
let gitHubClientSecret;

if (process.env.NODE_ENV !== "production") {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  gitHubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  gitHubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

function GithubState(props) {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatcher] = useReducer(githubReducer, initialState);

  const setLoading = () => {
    dispatcher({ type: SET_LOADING });
  };

  // Load Initial Set of Users
  const loadUsers = async () => {
    setLoading();
    const response = await Axios.get(`https://api.github.com/users?client_id=${githubClientId}&client_secret${gitHubClientSecret}`);
    dispatcher({ type: LOAD_USERS, payload: response.data });
  };

  const searchUser = async (text) => {
    setLoading(true);
    const response = await Axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret${gitHubClientSecret}`);
    dispatcher({ type: SEARCH_USERS, payload: response.data.items });
  };

  const getUser = async (username) => {
    setLoading();
    const response = await Axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret${gitHubClientSecret}`);
    dispatcher({ type: GET_USER, payload: response.data });
  };

  const getUserRepos = async (username) => {
    setLoading();
    const response = await Axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret${gitHubClientSecret}`);
    dispatcher({ type: GET_REPOS, payload: response.data });
  };

  const clearUsers = () => {
    dispatcher({ type: CLEAR_USERS });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        loadUsers,
        searchUser,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
}

export default GithubState;
