import { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface ApiConfig {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

interface UseApiQueryOptions {
  initialData?: any;
  enabled?: boolean;
}

export function useApiQuery<T>(
  config: ApiConfig,
  options: UseApiQueryOptions = {}
) {
  const { url, method = "GET", headers, params } = config;
  const { initialData, enabled = true } = options;

  const [data, setData] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = async (isMounted: boolean) => {
    if (!enabled) {
      return;
    }

    setIsLoading(true);
    try {
      const response: AxiosResponse<T> = await axios.request({
        url,
        method,
        headers,
        data,
        params,
      });

      if (isMounted) {
        setData(response.data);
        setIsLoading(false);
        setError(null);
      }
    } catch (err) {
      if (isMounted) {
        setError(err as any);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    let isMounted = true;

    fetchData(isMounted);

    return () => {
      isMounted = false;
    };
  }, [url, method, headers, data, params, enabled]);

  return {
    data,
    isLoading,
    error,
    refetch: () => fetchData(true),
  };
}
