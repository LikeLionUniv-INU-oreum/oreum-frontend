import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #ffffff;
  padding: 20px 30px;
  overflow: hidden;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto 0;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  flex-grow: 1;
  margin-bottom: 1dvh;
`;

export const SmallButton = styled.button`
  background-color: #3b7d5a;
  width: 85px;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 5px 12px;
  font-size: 11px;
  cursor: pointer;
  margin-bottom: 3px;

  &:disabled {
    background-color: #a3a3a3;
  }
`;

export const Input = styled.input`
  color: #3b7d5a;
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: 1.6px solid #3b7d5a;
  border-radius: 10px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 5px;

  &::placeholder {
    color: #3b7d5a;
    opacity: 0.8;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const Text = styled.div`
  color: #3b7d5a;
  width: 70%;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const MessageContainer = styled.div`
  width: 99%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5dvh;
`;

export const ErrorMessage = styled.div`
  color: #ef4444;
  //width: 80%;
  font-size: 14px;
  font-weight: 500;
  //text-align: left;
  //margin-top: -5px;
  //margin-bottom: 15px;
`;

export const TimerText = styled.div`
  color: #ef4444;
  font-size: 13px;
`;

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b7d5a;
  width: 100%;
  padding: 18px;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;

  &:disabled {
    background-color: #a3a3a3;
    cursor: not-allowed;
  }
`;
