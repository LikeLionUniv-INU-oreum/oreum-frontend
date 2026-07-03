import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100dvh;
  background-color: #ffffff;
  padding-top: 1dvh;
  padding-bottom: 4dvh;
  box-sizing: border-box;
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

export const Text = styled.div`
  color: #3b7d5a;
  width: 80%;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`

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

export const Image = styled.img`
  width: 110px;
  height: 110px;
  margin-bottom: 20px;
`;