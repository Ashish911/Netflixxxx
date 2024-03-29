import fetcher from "@/lib/fetcher";
import useSwr from "swr";

const useMovies = () => {
  const { data, error, isLoading, mutate } = useSwr("/api/movies", fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useMovies;
