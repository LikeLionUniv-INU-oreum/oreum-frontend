import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './AddCourse.styles';
import BottomNav from '../components/common/BottomNav';

export default function AddCourse() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courseName, setCourseName] = useState('');
  const [weeklyPlan, setWeeklyPlan] = useState('');

  const categories = ['교내', '대외활동', '자격증', '인턴'];

  const tipPlaceholder = `TIP\n• 1주차: 공부법 정리, 교재 구매\n• 2-5주차: 주 5일 이론 진도 나가기\n• 6-7주차: 시간 재고 실습하기\n• 8주차: 모의시험 치기`;

  const isFormValid = selectedCategory !== null && courseName.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;

    // 추후 백엔드 데이터 전송 처리를 위한 가이드
    const requestData = {
      category: selectedCategory,
      title: courseName,
      plan: weeklyPlan
    };
    console.log('백엔드로 전송할 데이터:', requestData);
    navigate('/basecamp');
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => window.history.back()}>←</S.BackButton>

      <S.FormSection>
        <h3>어떤 코스를 등반할까요?</h3>
        <S.CategoryGrid>
          {categories.map((category) => (
            <S.CategoryButton
              key={category}
              category={category}
              isSelected={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </S.CategoryButton>
          ))}
        </S.CategoryGrid>
      </S.FormSection>

      <S.FormSection>
        <h3>코스명은 무엇인가요?</h3>
        <S.InputBox
          type="text"
          placeholder="ex. 토익 850점 이상"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </S.FormSection>

      <S.FormSection>
        <h3>주차별 세부 계획이 있나요?</h3>
        <S.TextAreaBox
          placeholder={tipPlaceholder}
          value={weeklyPlan}
          onChange={(e) => setWeeklyPlan(e.target.value)}
        />
      </S.FormSection>

      <S.SubmitButton
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        코스 설정 완료
      </S.SubmitButton>

      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}