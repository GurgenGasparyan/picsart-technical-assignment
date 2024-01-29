const BASE_URL = 'https://jsonplaceholder.typicode.com';

import { PostModel, UserModel } from '../models';
import { avatarList } from '../utils/avatars';

const addAvatar = (user: UserModel) => ({
  ...user,
  avatar: avatarList[Math.floor(Math.random() * 10)],
});

export const getUsers = async (): Promise<Record<number, UserModel>> => {
  try {
    const response = await fetch(`${BASE_URL}/users`, { method: 'GET' });
    const users: Array<UserModel | null | undefined> = await response.json();

    return users.reduce((acc, curr) => {
      if (curr && curr.id != null) {
        acc[curr.id] = addAvatar(curr);
      }
      return acc;
    }, {} as Record<number, UserModel>);
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserDetails = async (id: string): Promise<UserModel> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, { method: 'GET' });
    const user: UserModel = await response.json();

    return addAvatar(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};

export const getPosts = async (): Promise<PostModel[]> => {
  try {
    const response = await fetch(`${BASE_URL}/posts`, { method: 'GET' });
    const posts: PostModel[] = await response.json();

    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const getUserPosts = async (id: number): Promise<PostModel[]> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}/posts`, { method: 'GET' });
    const userPosts: PostModel[] = await response.json();

    return userPosts;
  } catch (error) {
    console.error('Error fetching user posts:', error);
    throw error;
  }
};

export const editPost = async (id: number, data: PostModel): Promise<number> => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });

    const editedPostId: number = await response.json();

    return editedPostId;
  } catch (error) {
    console.error('Error editing post:', error);
    throw error;
  }
};

export const deletePost = async (id: number): Promise<void> => {
  try {
    await fetch(`${BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
