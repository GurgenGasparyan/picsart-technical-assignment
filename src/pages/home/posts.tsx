import React, { ChangeEvent, FC, useCallback, useState, useEffect } from 'react';
import { GridStyled } from './styles';
import { Select, Loader } from '../../components';
import { Post } from './post';
import { useUsers, usePosts } from '../../hooks';

const Posts: FC = () => {
  const [selectedUser, setSelectedUser] = useState(0);
  const { users, fetchUsers, isLoading: isLoadingUsers } = useUsers();
  const { posts, fetchPosts, isLoading: isLoadingPosts } = usePosts();

  const onUserChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const userId = parseInt(e.target.value);
      setSelectedUser(userId);
      fetchPosts(userId);
    },
    [users]
  );

  useEffect(() => {
    fetchUsers();
    fetchPosts();
  }, []);

  if (isLoadingUsers || isLoadingPosts) {
    return <Loader />;
  }

  return (
    <>
      <Select onChange={onUserChange} value={selectedUser}>
        <option value={0}>None</option>
        {Object.values(users).map(({ id, username }) => (
          <option value={id} key={id}>
            {username}
          </option>
        ))}
      </Select>
      <GridStyled>
        {posts.map((post) => (
          <Post key={post.id} post={post} user={users[post.userId]} />
        ))}
      </GridStyled>
    </>
  );
};

export default Posts;
