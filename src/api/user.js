// 사용자 정보 관련
import api from './axios';

// 최초 이용자 온보딩
export const onboarding = async (status, major, job) => {
  const response = await api.post('/users/me/onboarding', {
    academicStatus: status,
    majorId: major,
    jobId: job,
  });

  return response.data;
};

// 학과 검색
export const searchMajors = async (keyword) => {
  const response = await api.get('/majors', {
    params: {
      keyword: keyword,
    },
  });

  return response.data;
};

// 직무 검색
export const searchJobs = async (keyword) => {
  const response = await api.get('/jobs', {
    params: {
      keyword: keyword,
    },
  });

  return response.data;
};

// 홈 화면 조회
export const homeProfile = async () => {
  const response = await api.get('/home');

  return response.data;
};
