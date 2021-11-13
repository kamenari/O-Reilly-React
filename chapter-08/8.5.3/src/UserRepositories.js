import React from "react";
import Fetch from "./Fetch";
import { Repomenu } from "./RepoMenu";

export default function UserRepositories({
    login,
    selectedRepo,
    onSelect = f => f
}) {
    return (
        <Fetch
            uri={`https://api.github.com/users/${login}/repos`}
            renderSuccess={({ data }) => (
                <Repomenu
                    repositories={data}
                    onSelect={onSelect}
                    selected={selectedRepo}
                />
            )}
        />
    )
}