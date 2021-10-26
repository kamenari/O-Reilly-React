import React from "react";
import { useIterator } from "./hooks";
import RepositoryReadme from "./RepositoryReadme";

export function Repomenu({
    repositories,
    login
}) {
    const [{ name }, prev, next] = useIterator(
        repositories
    );

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={prev}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
            <RepositoryReadme login={login} repo={name} />
        </>
    )
}