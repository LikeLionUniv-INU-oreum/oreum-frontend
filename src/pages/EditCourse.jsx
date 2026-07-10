import React, { useState } from 'react';
import * as S from './EditCourse.styles';
import BottomNav from '../components/common/BottomNav';

export default function EditCourse() {
  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 저장
  const [courseName, setCourseName] = useState(''); // 코스명 입력값
  const [weeklyPlan, setWeeklyPlan] = useState(''); // 주차별 세부 계획 입력값

  const categories = ['교내', '대외활동', '자격증', '인턴'];

  const tipPlaceholder = `• 1주차: 공부법 정리, 교재 구매\n• 2-5주차: 주 5일 이론 진도 나가기\n• 6-7주차: 시간 재고 실습하기\n• 8주차: 모의시험 치기`;

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
    alert('코스 설정이 완료되었습니다!');
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm("정말 이 코스를 삭제하시겠습니까?");
    if (isConfirmed) {
      console.log("백엔드로 삭제 요청 보낼 카테고리/ID:", selectedCategory);
      alert("코스가 삭제되었습니다.");
      window.history.back();
    }
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => window.history.back()}>←</S.BackButton>

      <S.FormSection>
        <h3>등반 코스 조회</h3>
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
        <h3>코스명</h3>
        <S.InputBox
          type="text"
          placeholder="ex. 토익 850점 이상"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
        />
      </S.FormSection>

      <S.FormSection>
        <h3>주차별 세부 계획</h3>
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
        세부 계획 수정
      </S.SubmitButton>

      <S.DeleteButton onClick={handleDelete}>
        코스 삭제
      </S.DeleteButton>

      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}