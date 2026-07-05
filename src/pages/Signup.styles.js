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
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  position: relative;
  margin-top: 3dvh;
  margin-bottom: 5dvh;
`;

export const BackButton = styled.button`
  position: absolute;
  left: 4dvh;
  background: none;
  border: none;
  font-size: 24px;
  color: #3b7d5a;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
`;

export const Image = styled.img`
  width: 30%;
  height: 100%;
  margin-bottom: 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 360px;
  //flex: 1; /* 남은 화면 높이를 전부 차지 */
  padding-bottom: 4dvh; /* 최하단 버튼 밑 여백 */
  
  /* ⭐️ 핵심: 입력 박스들과 맨 밑 회원가입 버튼 사이의 간격을 균등하게 배분 */
  justify-content: space-between; 
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  flex-grow: 1;
  justify-content: center;
  margin-bottom: 1dvh; 
`;

export const SmallButton = styled.button`
  background-color: #3b7d5a;
  width: 90px;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 5px 12px;
  font-size: 11px;
  cursor: pointer;
  &:disabled {
    background-color: #a3a3a3;
  }
`;

export const Input = styled.input`
  color: #3B7D5A;
  width: 100%;
  height: 45px;
  background-color: #FFFFFF;
  border: 1.6px solid #3B7D5A;
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
  margin-bottom: 5px;
`;

export const Text = styled.div`
  color: #3b7d5a;
  width: 70%;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 1.5dvh;
  min-height: 18px;
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
  width: 90%;
  height: 60px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 4dvh;
  margin-bottom: 15px;
  transition: background-color 0.2s ease;
  //margin-top: auto;
  min-height: 48px;

  &:disabled {
    background-color: #a3a3a3;
    cursor: not-allowed;      
  }
`;

