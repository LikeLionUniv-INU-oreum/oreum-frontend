// 마이페이지 관련
import api from './axios';

// 마이페이지 전체 조회
export const getMypage = async () => {
  const response = await api.get('/mypage');

  return response.data;
};
