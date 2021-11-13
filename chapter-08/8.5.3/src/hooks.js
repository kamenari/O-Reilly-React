import React, { useCallback, useMemo, useState, useRef, useEffect } from "react";

export const useIterator = (
    items = [],
    initialValue = 0
) => {
    const [i, setIndex] =useState(initialValue);

    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length = 1);
        setIndex(i - 1);
    }, [i]);

    const next = useCallback(() => {
        if (i === items.length - 1) return setIndex(0);
        setIndex(i + 1);
    }, [i]);

    const item = useMemo(() => items[i], [i]);

    return [item || items[0], prev, next];
};

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);
    return [
      { value, onChange: e => setValue(e.target.value) },
      () => setValue(initialValue)
    ];
  };

export function useMountedRef() {
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => (mounted.current = false);
    });
    return mounted;
}