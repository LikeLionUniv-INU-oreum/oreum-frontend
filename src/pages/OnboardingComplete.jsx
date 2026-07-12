import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingComplete.styles';
import ProgressBar from '../components/common/ProgressBar';
import Emoji from '../assets/images/Emoji.png';
import OnboardingCompleteImg from '../assets/images/OnboardingCompleteImg.png';

export default function OnboardingComplete() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <S.Container>
      <S.Header>
        <ProgressBar currentStep={3} totalSteps={3} emojiSrc={Emoji} />
      </S.Header>

      <S.CardSection>
        <S.CardImage src={OnboardingCompleteImg} alt="완료 화면 일러스트" />

        <S.CardContent>
          <S.Title>
            오름을 시작하기 위한 준비가
            <br />
            모두 완료되었어요 🎉
          </S.Title>

          <S.StartButton type="button" onClick={handleStart}>
            첫 등반 시작하기
          </S.StartButton>
        </S.CardContent>
      </S.CardSection>
    </S.Container>
  );
}
