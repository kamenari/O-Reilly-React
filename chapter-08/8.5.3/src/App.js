import React, { useState } from "react";
import SearchForm from "./SearchForm";
import { GitHubUser } from "./GithubUser";
import UserRepositories from "./UserRepositories";
import RepositoryReadme from "./RepositoryReadme";

export default function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin(" ");
    setRepo(" ");
  }

  // if (!login)
  //   return (
  //     <SearchForm value={login} onSearch={handleSearch} />
  //   );

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
      {login && <GitHubUser login={login} /> }
      {login && <UserRepositories login={login} selectedRepo={repo} onSelect={setRepo} /> }
      {login && repo && (<RepositoryReadme login={login} repo={repo} />) }
    </>
    
  );
}