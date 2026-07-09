import api from './axios';

// 이메일 인증번호 전송 API
export const sendEmailCode = async (email) => {
  const response = await api.post('/auth/email-verifications', {
    universityEmail: email,
  });

  return response.data;
};

// 이메일 인증번호 확인 API
export const verifyEmailCode = async (email, code) => {
  const response = await api.post('/auth/email-verifications/confirm', {
    universityEmail: email,
    verificationCode: code,
  });

  return response.data;
};

// 회원가입 API
export const signup = async (email, password, nickname) => {
  const response = await api.post('/auth/signup', {
    universityEmail: email,
    password: password,
    nickname: nickname,
  });

  return response.data;
};
