import { useUserDetailsStore } from '../store';

export const useUserDetails = () => {
  const { fetchUserDetails, user, isLoading } = useUserDetailsStore();

  return { fetchUserDetails, user, isLoading };
};
