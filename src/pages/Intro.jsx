import styled from 'styled-components';
import introBackground from '../assets/images/IntroBackground.jpg';
import krLogo from '../assets/images/OreumKrLogo.jpg';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const IntroImg = styled.img`
  width: 100%;
  height: auto;
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-top: -20px;
`;

const Subtitle = styled.div`
  color: #acacac;
  font-size: 13px;
  font-weight: bold;
`;

const LogoImg = styled.img`
  width: 85%;
  height: auto;
`;

const Slogan = styled.div`
  font-size: 18px;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
  gap: 30px;
`;

const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b7d5a;
  width: 80%;
  padding: 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
`;

const FooterText = styled.div`
  font-size: 13px;
  color: #aaaaaa;
  font-family: 'Times New Roman', serif;
`;

export default function Intro() {
  const navigate = useNavigate();

  return (
    <Container>
      <IntroImg src={introBackground} />

      <BrandSection>
        <Subtitle>나만의 학업 네비게이션</Subtitle>
        <LogoImg src={krLogo} />
        <Slogan>
          기록을 지도삼아
          <br />
          나만의 정상으로
        </Slogan>
      </BrandSection>

      <BottomSection>
        <LoginButton onClick={() => navigate('/login')}>시작하기</LoginButton>
        <FooterText>A Carrer navigation for university life</FooterText>
      </BottomSection>
    </Container>
  );
}
