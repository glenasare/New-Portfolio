import { useQuery } from 'react-query';

const useFetchData = (queryKey: string, fetchFn: () => any) => {
  const { data, isLoading, error } = useQuery(queryKey, fetchFn);

  return { data, isLoading, error };
};

export default useFetchData;