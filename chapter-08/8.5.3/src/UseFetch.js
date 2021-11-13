import React, { useEffect, useState } from "react";
import { useMountedRef } from "./hooks";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const mounted = useMountedRef();


  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;
    setLoading(true);
    fetch(uri)
      .then(res => {
        if (!mounted.current) throw new Error("component is not mounted");
        return res;
      })
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(error => {
        if (!mounted.current) return;
        setError(error);
      });
  }, [uri]);

  return {
    data,
    error,
    loading
  }
}