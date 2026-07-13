import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CompleteStar.styles';
import OnboardingCompleteImg from '../assets/images/OnboardingCompleteImg.png';

export default function CompleteStar() {
  const navigate = useNavigate();

  // 페이지 이동 타이머
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/basecamp');
    }, 5500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <S.Container>

      <S.CardSection>
        <S.CardImage src={OnboardingCompleteImg} />

        <S.CardContent>
          <S.Title>
            축하해요!
            <br />
            코스 등반에 성공했어요 🎉
          </S.Title>

          <S.Subtitle>
            마이페이지에서 통계를 확인할 수 있어요.
            <br />
            5초 뒤 베이스캠프로 이동됩니다.
          </S.Subtitle>
        </S.CardContent>
      </S.CardSection>
    </S.Container>
  );
}
