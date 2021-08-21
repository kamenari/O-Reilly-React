import { useState } from "react";

export const useInput = initialValue => { // (initialValue) => と同じ
    const [value, setValue] = useState(initialValue);
    return [
        { value, onChange: e => setValue(e.target.value) },
        () => setValue(initialValue)
    ];
};