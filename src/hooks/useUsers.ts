import { useUsersStore } from '../store';

export const useUsers = () => {
  const users = useUsersStore((state) => state.users);
  const setUsers = useUsersStore((state) => state.setUsers);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);
  const isLoading = useUsersStore((state) => state.isLoading);

  return { users, setUsers, fetchUsers, isLoading };
};
