import { create } from 'zustand';
import { UserModel } from '../models';
import { getUserDetails } from '../api/api';

interface UserDetailsStore {
  user: UserModel | null;
  isLoading: boolean;
  fetchUserDetails: (userId: string) => void;
}

export const useUserDetailsStore = create<UserDetailsStore>((set) => ({
  isLoading: true,
  user: null,
  fetchUserDetails: async (userId) => {
    set(() => ({
      isLoading: true,
    }));

    const user = await getUserDetails(userId);
    set(() => ({
      user,
      isLoading: false,
    }));
  },
}));
