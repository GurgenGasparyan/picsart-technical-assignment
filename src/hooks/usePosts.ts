import { usePostsStore } from '../store';

export const usePosts = () => {
  const posts = usePostsStore((state) => state.posts);
  const setPosts = usePostsStore((state) => state.setPosts);
  const fetchPosts = usePostsStore((state) => state.fetchPosts);
  const isLoading = usePostsStore((state) => state.isLoading);

  return {
    posts,
    setPosts,
    fetchPosts,
    isLoading,
  };
};
