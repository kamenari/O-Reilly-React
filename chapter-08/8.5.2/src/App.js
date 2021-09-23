import React, { useState } from "react";
import { GitHubUser } from "./GithubUser";

export default function App() {
  const [login, setLogin] =useState("kamenari");
  return (
    <GitHubUser login={login} />
  );
}
