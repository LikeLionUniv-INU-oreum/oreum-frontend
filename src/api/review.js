// 코스 리뷰 관련
import api from './axios';

// 직무별 탐색 리뷰 목록 조회
export const getReviewLists = async ({
  jobId,
  grade = 'ALL',
  categoryId = 'ALL',
  sort = 'POPULAR',
  page = 0,
  size = 10,
}) => {
  const response = await api.get('/course-reviews', {
    params: {
      jobId,
      grade,
      categoryId,
      sort,
      page,
      size,
    },
  });

  return response.data;
};

// 리뷰 상세보기
export const getReviewDetail = async () => {
  const response = await api.get('/course-reviews/{courseReviewId}');

  return response.data;
};

// 리뷰 좋아요
export const likeReview = async () => {
  const response = await api.post('/course-reviews/{courseReviewId}/like');

  return response.data;
};
