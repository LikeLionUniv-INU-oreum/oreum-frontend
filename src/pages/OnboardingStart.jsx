import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingStart.styles';
import ProgressBar from '../components/common/ProgressBar';
import Emoji from '../assets/images/Emoji.png';
import OnboardingStartImg from '../assets/images/OnboardingStartImg.png';

export default function OnboardingStart() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Header>
        <ProgressBar currentStep={0} totalSteps={3} emojiSrc={Emoji} />
      </S.Header>

      <S.TextBox>
        <S.Title>오름에 오신 걸 환영해요!</S.Title>
        <S.Subtitle>
          첫 등반을 시작하기 전,<br />
          몇 가지 정보를 확인할게요.
        </S.Subtitle>
      </S.TextBox>

      <S.ImageSection>
        <S.MainImage src={OnboardingStartImg} alt="산 이미지" />
        <S.StartButton onClick={() => navigate('/onboardinggrade')}>
          시작하기
        </S.StartButton>
      </S.ImageSection>
    </S.Container>
  );
}