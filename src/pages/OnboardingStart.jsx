import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingStart.styles';
import ProgressBar from '../components/common/ProgressBar';
import Emoji from '../assets/images/Emoji.png';
import OnboardingStartImg from '../assets/images/OnboardingStartImg.png';

export default function OnboardingStart() {
  const navigate = useNavigate();

  return (
    <S.Container>
      {/* 1. 상단 프로그레스바 */}
      <S.Header>
        <ProgressBar currentStep={0} totalSteps={3} emojiSrc={Emoji} />
      </S.Header>

      {/* 2. 중앙 환영 문구 */}
      <S.TextBox>
        <S.Title>오름에 오신 걸 환영해요!</S.Title>
        <S.Subtitle>
          첫 등반을 시작하기 전,<br />
          몇 가지 정보를 확인할게요.
        </S.Subtitle>
      </S.TextBox>

      {/* 3. 하단 이미지 + 떠있는 버튼 영역 */}
      <S.ImageSection>
        <S.MainImage src={OnboardingStartImg} alt="산 이미지" />
        <S.StartButton onClick={() => navigate('/onboardinggrade')}>
          시작하기
        </S.StartButton>
      </S.ImageSection>
    </S.Container>
  );
}