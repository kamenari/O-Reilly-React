import React, { useState, memo } from "react";

const Cat = ({ name, neow = f => f }) => {
    console.log(`rendering${name}`);
    return <p onClick={() => neow(name)}>{name}</p>
}

const PureCat = memo(
      Cat,
      (prevProps, nextProps) => prevProps.name === nextProps.name
    );

export default PureCat;