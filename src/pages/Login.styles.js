import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  background-color: #ffffff;
  box-sizing: border-box;
`;

export const Input = styled.input`
  color: #3b7d5a;
  width: 80%;
  height: 55px;
  background-color: #ffffff;
  border: 1.6px solid #3b7d5a;
  border-radius: 10px;
  padding: 0 40px 0 10px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 15px;

  &::placeholder {
    color: #3b7d5a;
    opacity: 0.8;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 80%;
  margin-bottom: 15px;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  /* 클릭 시 브라우저 기본 아웃라인 제거 */
  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  width: 80%;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-top: -5px;
  margin-bottom: 92px;
`;

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b7d5a;
  width: 80%;
  height: 45px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 40px;
  margin-bottom: 15px;
`;

export const SignUpText = styled.div`
  font-size: 13px;
  text-align: center;
  margin-bottom: 20px;

  span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;