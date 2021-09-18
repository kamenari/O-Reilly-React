import React, { useState } from "react";
import { GithubUser } from "./GithubUser";

export default function App() {
  const [login, setLogin] =useState("moonhighway");
  return (
    <GithubUser login={login} />
  );
}
