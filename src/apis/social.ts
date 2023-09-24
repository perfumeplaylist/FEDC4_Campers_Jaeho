import instance from './axios';
import { AxiosError } from 'axios';

export const CreateRecommend = async (postId: string) => {
  try {
    await instance.post('likes/create', { postId });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message);
    }
  }
};

export const deleteRecommend = async (postId: string) => {
  try {
    await instance.delete('likes/delete', { data: { id: postId } });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message);
    }
  }
};

// 특정 유저 팔로우
export const createFollow = async (userId: string) => {
  try {
    await instance.post('follow/create', { userId });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message);
    }
  }
};

//특정 유저 언팔로우
export const deleteFollow = async (userId: string) => {
  try {
    await instance.delete('follow/delete', { data: { id: userId } });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message);
    }
  }
};
