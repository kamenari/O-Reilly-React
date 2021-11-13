import React, { useEffect, useState } from "react";
import { useIterator } from "./hooks";

export function Repomenu({
    repositories,
    selected,
    onSelect = f => f
}) {
    const [{ name }, prev, next] = useIterator(
        repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : undefined
    );

    useEffect(() => {
        if (!name) return;
        onSelect(name);
      }, [name]);

    return (
        <>
            <div style={{ display: "flex" }}>
                <button onClick={prev}>&lt;</button>
                <p>{name}</p>
                <button onClick={next}>&gt;</button>
            </div>
        </>
    )
}