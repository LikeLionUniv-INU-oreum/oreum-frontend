import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './OnboardingGrade.styles';
import ProgressBar from '../components/common/ProgressBar';
import Emoji from '../assets/images/Emoji.png';
import OnboardingBackground from '../assets/images/OnboardingBackground.png';

export default function OnboardingGrade() {
  const navigate = useNavigate();
  const [selectedGrade, setSelectedGrade] = useState('');

  const gradeOptions = [
    '대학교 1학년',
    '대학교 2학년',
    '대학교 3학년',
    '대학교 4학년',
    '초과학기',
    '졸업생',
  ];

  const handleNext = () => {
    if (selectedGrade) {
      console.log('저장된 학적 값:', selectedGrade);
      navigate('/onboardingselectdept');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <ProgressBar currentStep={1} totalSteps={3} emojiSrc={Emoji} />
      </S.Header>

      <S.MiddleOne>
        <S.Title>현재 학적을 선택해주세요.</S.Title>
      </S.MiddleOne>

      <S.MiddleTwo>
        {gradeOptions.map((grade) => (
          <S.SelectButton
            key={grade}
            type="button"
            $isSelected={selectedGrade === grade}
            onClick={() => setSelectedGrade(grade)}
          >
            {grade}
          </S.SelectButton>
        ))}
      </S.MiddleTwo>

      <S.FooterBgSection>
        <S.BgImage src={OnboardingBackground} alt="배경 일러스트" />
      </S.FooterBgSection>
      <S.NextButton
        type="button"
        disabled={!selectedGrade}
        onClick={handleNext}
      >
        다음 단계
      </S.NextButton>
    </S.Container>
  );
}
