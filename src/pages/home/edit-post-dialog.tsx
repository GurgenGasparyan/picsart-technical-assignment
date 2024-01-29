import React, { ChangeEvent, FC, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import {
  DialogStyled,
  DialogContentStyled,
  DialogHeaderStyles,
  DialogDividerStyled,
  DialogBodyStyled,
  DialogButtonStyled,
  InputStyled,
  TextareaStyled,
} from './styles';
import { PostModel } from '../../models';
import { editPost } from '../../api/api';
import { usePosts } from '../../hooks';

interface EditPostDialogProps {
  post: PostModel;
  open?: boolean;
  onClose: () => void;
}

const dialogContainer = document.getElementById('dialog-root');

export const EditPostDialog: FC<EditPostDialogProps> = ({ open = false, post, onClose }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.body);

  const { posts, setPosts } = usePosts();

  const onTitleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onContentChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  }, []);

  const onEditSave = useCallback(() => {
    editPost(post.id, {
      ...post,
      title,
      body: content,
    }).then(() => {
      if (Array.isArray(posts)) {
        setPosts(
          posts.map((prevPost) => {
            if (prevPost.id === post.id) {
              return {
                ...prevPost,
                title: title,
                body: content,
              };
            }

            return prevPost;
          })
        );
      }

      onClose();
    });
  }, [title, content]);

  return open && dialogContainer
    ? createPortal(
        <DialogStyled onClick={onClose}>
          <DialogContentStyled onClick={(e) => e.stopPropagation()}>
            <DialogHeaderStyles>Edit: {post.id}</DialogHeaderStyles>
            <DialogDividerStyled />
            <DialogBodyStyled>
              <InputStyled value={title} onChange={onTitleChange} placeholder="Post title" />
              <TextareaStyled
                value={content}
                onChange={onContentChange}
                placeholder="Post content"
              />
            </DialogBodyStyled>
            <DialogDividerStyled />
            <DialogButtonStyled onClick={onEditSave}>Save</DialogButtonStyled>
          </DialogContentStyled>
        </DialogStyled>,
        dialogContainer
      )
    : null;
};
