import { useEffect, useState } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface ApiConfig {
  url: string;
  method?: "POST" | "PUT" | "DELETE";
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
  const { url, method = "POST", headers, params } = config;
  const { initialData, enabled = true } = options;

  const [dataResponse, setDataResponse] = useState<T | null>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<AxiosError | null>(null);

  const fetchData = async <TP>(data: TP) => {
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

      setDataResponse(response.data);
      setIsLoading(false);
      setError(null);
    } catch (err) {
      setError(err as any);
      setIsLoading(false);
    }
  };

  return {
    dataResponse,
    isLoading,
    error,
    mutate: fetchData,
  };
}
