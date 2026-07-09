import * as S from './Intro.styles';
import introBackground from '../assets/images/IntroBackground.jpg';
import krLogo from '../assets/images/OreumKrLogo.jpg';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.IntroImg src={introBackground} />

      <S.BrandSection>
        <S.Subtitle>나만의 학업 네비게이션</S.Subtitle>
        <S.LogoImg src={krLogo} />
        <S.Slogan>
          기록을 지도삼아
          <br />
          나만의 정상으로
        </S.Slogan>
      </S.BrandSection>

      <S.BottomSection>
        <S.LoginButton onClick={() => navigate('/login')}>
          시작하기
        </S.LoginButton>
        <S.FooterText>A Carrer navigation for university life</S.FooterText>
      </S.BottomSection>
    </S.Container>
  );
}
