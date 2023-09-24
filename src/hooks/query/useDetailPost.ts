import { useQuery } from '@tanstack/react-query';
import { searchPoster } from '../../apis/poster';

export const useDetailPost = (postId = '') => {
  const getDetailPost = useQuery(
    ['detail-post', postId],
    () => searchPoster(postId),
    {
      enabled: !!postId,
    }
  );

  return { getDetailPost };
};
