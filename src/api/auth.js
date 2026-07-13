// 인증/권한 관련
import api from './axios';

// 로그인
export const login = async (email, password) => {
  const response = await api.post('/auth/login', {
    universityEmail: email,
    password: password,
  });

  return response.data;
};

// 이메일 인증번호 전송
export const sendEmailCode = async (email) => {
  const response = await api.post('/auth/email-verifications', {
    universityEmail: email,
  });

  return response.data;
};

// 이메일 인증번호 확인
export const verifyEmailCode = async (email, code) => {
  const response = await api.post('/auth/email-verifications/confirm', {
    universityEmail: email,
    verificationCode: code,
  });

  return response.data;
};

// 회원가입
export const signup = async (universityEmail, password, nickname) => {
  const response = await api.post('/auth/signup', {
    universityEmail,
    password,
    nickname,
  });

  return response.data;
};

// 학적 변경
export const changeAcademicStatus = async (grade) => {
  const response = await api.patch('/users/me/profile/academic-status', { grade });

  return response;
};

// 희망 직무 변경
export const changeJob = async (jobName) => {
  const response = await api.patch('/users/me/profile/job', { jobName });

  return response;
};

// 비밀번호 변경
export const changePassword = async (currentPassword, newPassword) => {
  const response = await api.patch('/users/me/password', { currentPassword, newPassword });

  return response;
};
