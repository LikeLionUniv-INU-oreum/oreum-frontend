import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
`;

export const IntroImg = styled.img`
  width: 100%;
  height: auto;
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.$margin || 'auto 0'};
  gap: 10px;
`;

export const Subtitle = styled.div`
  color: #acacac;
  font-size: 13px;
  font-weight: bold;
`;

export const LogoImg = styled.img`
  width: 70%;
  height: auto;
`;

export const Slogan = styled.div`
  font-size: 16px;
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b7d5a;
  width: 80%;
  padding: 18px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
`;

export const FooterText = styled.div`
  font-size: 12px;
  color: #aaaaaa;
  font-family: 'Times New Roman', serif;
`;
