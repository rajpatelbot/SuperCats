import { useCallback, useEffect, useState } from "react";
import { apiService } from "../config/apiService";

const useFetch = <T>(url?: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchApi = useCallback(
    async (lUrl?: string) => {
      setLoading(true);
      try {
        const updatedUrl = lUrl || url || "";
        const res = await apiService.get(updatedUrl);
        if (res.status) {
          setResponse(res.data);
        }
      } catch (error) {
        const err = error as string;
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    if (url) {
      fetchApi(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, response, fetchApi, error };
};

export default useFetch;
