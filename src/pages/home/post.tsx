import React, { FC, useCallback, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';

import {
  PostTitleStyled,
  PostHeaderStyled,
  PostDescriptionStyled,
  PostHeaderAvatarStyled,
  PostActionButtonStyled,
  PostHeaderUserDetailsStyled,
} from './styles';
import { Card, CardContent, CardHeader, Avatar } from '../../components';

import { EditPostDialog } from './edit-post-dialog';
import { PostModel, UserModel } from '../../models';
import { deletePost } from '../../api/api';
import { usePosts } from '../../hooks';

interface PostProps {
  post: PostModel;
  user: UserModel;
}

export const Post: FC<PostProps> = ({ post, user }) => {
  const [isDialogOpened, setIsDialogOpened] = useState(false);
  const { setPosts, posts } = usePosts();

  const toggleDialog = useCallback(() => {
    setIsDialogOpened((opened) => !opened);
  }, []);

  const onDelete = useCallback(() => {
    if (Array.isArray(posts)) {
      deletePost(post.id).then(() => setPosts(posts.filter((oldPost) => oldPost.id !== post.id)));
    }
  }, [post.id, posts]);

  return (
    <>
      <Card>
        <CardHeader>
          <PostHeaderStyled>
            <PostHeaderAvatarStyled>
              <Avatar alt="avatar" src={user.avatar} />
            </PostHeaderAvatarStyled>
            <PostHeaderUserDetailsStyled>
              <span>{user.username}</span>
              <span>User id: {user.id}</span>
            </PostHeaderUserDetailsStyled>
            <div>
              <PostActionButtonStyled onClick={toggleDialog}>
                <MdEdit size={16} />
              </PostActionButtonStyled>
              <PostActionButtonStyled onClick={onDelete}>
                <MdDelete size={16} />
              </PostActionButtonStyled>
            </div>
          </PostHeaderStyled>
        </CardHeader>
        <CardContent>
          <PostTitleStyled>{post.title}</PostTitleStyled>
          <PostDescriptionStyled>{post.body}</PostDescriptionStyled>
        </CardContent>
      </Card>
      <EditPostDialog open={isDialogOpened} post={post} onClose={toggleDialog} />
    </>
  );
};
