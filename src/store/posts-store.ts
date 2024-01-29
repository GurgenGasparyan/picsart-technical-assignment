import { create } from 'zustand';

import { PostModel } from '../models';
import { getPosts, getUserPosts } from '../api/api';

interface PostsStore {
  isLoading: boolean;
  posts: Array<PostModel>;
  fetchPosts: (selectedUserId?: number) => void;
  setPosts: (posts: Array<PostModel>) => void;
}

export const usePostsStore = create<PostsStore>((set) => ({
  isLoading: true,
  posts: [],
  setPosts: (posts) => set(() => ({ posts })),
  fetchPosts: async (selectedUserId?: number) => {
    set(() => ({
      isLoading: true,
    }));
    const posts = selectedUserId ? await getUserPosts(selectedUserId) : await getPosts();
    set(() => ({
      posts,
      isLoading: false,
    }));
  },
}));
