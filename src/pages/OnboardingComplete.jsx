import React from 'react';
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
      {/* 1. 상단 독립된 헤더 영역 */}
      <S.Header>
        <ProgressBar currentStep={3} totalSteps={3} emojiSrc={Emoji} />
      </S.Header>

      {/* 2. 헤더 밑에 여백을 두고 시작하는 라운드 카드 구조의 이미지 영역 */}
      <S.CardSection>
        {/* 카드 영역의 배경으로 들어가는 통짜 사진 */}
        <S.CardImage src={OnboardingCompleteImg} alt="완료 화면 일러스트" />

        {/* 사진 위에 얹어지는 텍스트와 버튼 */}
        <S.CardContent>
          <S.Title>
            오름을 시작하기 위한 준비가<br />
            모두 완료되었어요!
          </S.Title>

          <S.StartButton type="button" onClick={handleStart}>
            첫 등반 시작하기
          </S.StartButton>
        </S.CardContent>
      </S.CardSection>
    </S.Container>
  );
}