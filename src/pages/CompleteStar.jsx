import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CompleteStar.styles';
import OnboardingCompleteImg from '../assets/images/OnboardingCompleteImg.png';

export default function CompleteStar() {

  return (
    <S.Container>
      <S.Header />

      <S.CardSection>
        <S.CardImage src={OnboardingCompleteImg} alt="완료 화면 일러스트" />

        <S.CardContent>
          <S.Title>
            축하해요!<br />
            코스 등반에 성공했어요
          </S.Title>

          <S.Subtitle>
            [마이페이지]에서 직무별 통계를<br />
            확인할 수 있어요.
          </S.Subtitle>

        </S.CardContent>
      </S.CardSection>
    </S.Container>
  );
}