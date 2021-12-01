import React, { useState } from "react";
import SearchForm from "./SearchForm";

export default function App() {
  const [login, setLogin] = useState();
  const [repo, setRepo] = useState();

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin(" ");
    setRepo(" ");
  }

  if (!login)
    return (
      <SearchForm value={login} onSearch={handleSearch} />
    );

  return (
    <>
      <SearchForm value={login} onSearch={handleSearch} />
      
    </>
    
  );
}