import { useCallback, useEffect, useState } from "react";

export const useFetch = (url:any) => {

  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>();

  const getData = useCallback(async () => {
    setLoading(true);
    const res = await fetch(url);
    const json = await res.json();
    setData(json);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data, loading };
};