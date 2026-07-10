import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CompleteStar.styles';
import OnboardingCompleteImg from '../assets/images/OnboardingCompleteImg.png';

export default function CompleteStar() {
  const navigate = useNavigate();

  /*useEffect(() => {
    // 🚩 5초(5000ms) 후에 /basecamp 주소로 이동하는 타이머 설정
    const timer = setTimeout(() => {
      navigate('/basecamp');
    }, 5000);

    // ⚠️ 컴포넌트가 사라질 때 타이머를 청소(clear)해주는 메모리 관리 누수 방지 코드
    return () => clearTimeout(timer);
  }, [navigate]);*/

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