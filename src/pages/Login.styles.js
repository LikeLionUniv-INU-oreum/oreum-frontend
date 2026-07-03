import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  background-color: #ffffff;
  padding-top: 12dvh;
  padding-bottom: 4dvh;
  box-sizing: border-box;
`;

export const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  margin-bottom: 40px;
`;

export const Text = styled.div`
  color: #000000;
  padding: 0px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: bold;
`;

export const Title = styled.h1`
  font-size: 55px;
  color: #3B7D5A;
  margin: 0px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Slogan = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 1.4;
  color: #000000;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  color: #3B7D5A;
  width: 80%;
  height: 45px;
  background-color: #FFFFFF;
  border: 1.6px solid #3B7D5A;
  border-radius: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 15px;

  &::placeholder {
    color: #3b7d5a;
    opacity: 0.8;
  }
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  width: 80%;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  margin-top: -5px;
  margin-bottom: 15px;
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
  width: 210px;
  height: 12px;
  text-align: center;

  span {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`;
