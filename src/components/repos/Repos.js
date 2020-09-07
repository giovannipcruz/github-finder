import React from "react";
import PropTypes from "prop-types";

// components
import RepoItem from "./RepoItem";

function Repos(props) {
  const { repos } = props;

  return (
    <div>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
}

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
