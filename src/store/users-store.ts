import { create } from 'zustand';
import { UserModel } from '../models';
import { getUsers } from '../api/api';

interface UsersStore {
  isLoading: boolean;
  users: Record<number, UserModel>;
  fetchUsers: () => void;

  setUsers: (users: Record<number, UserModel>) => void;
}

export const useUsersStore = create<UsersStore>((set) => ({
  isLoading: true,
  users: {},
  setUsers: (users) => set((state) => ({ ...state, users })),
  fetchUsers: async () => {
    set(() => ({
      isLoading: true,
    }));
    const users = await getUsers();

    set(() => ({
      users,
      isLoading: false,
    }));
  },
}));
