import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './AddCourse.styles';
import BottomNav from '../components/common/BottomNav';

export default function AddCourse() {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [courseName, setCourseName] = useState('');
  const [weeklyPlan, setWeeklyPlan] = useState('');

  const categories = ['자격증', '대외활동', '교내', '인턴'];

  const tipPlaceholder = `TIP\n• 1주차: 공부법 정리, 교재 구매\n• 2-5주차: 주 5일 이론 진도 나가기\n• 6-7주차: 시간 재고 실습하기\n• 8주차: 모의시험 치기`;

  const isFormValid = selectedCategory !== null && courseName.trim().length > 0 && weeklyPlan.trim().length > 0;

  const categoryMap = {
    '교내': 3,
    '대외활동': 2,
    '자격증': 1,
    '인턴': 4
  };

  const handleSubmit = async () => {
    if (!isFormValid) return;

    // 로컬 스토리지 등에서 액세스 토큰 취득 (프로젝트 환경에 맞게 수정 가능)
    const accessToken = localStorage.getItem('accessToken');

    // API 명세서 규격에 맞게 Request Body 데이터 가공
    const requestData = {
      year: 2026, // Basecamp의 selectedPeriod 연도와 매칭 필요 (우선 2026 고정)
      termType: "FIRST_HALF", // 2026년 상반기 기준 매핑
      categoryId: categoryMap[selectedCategory], // 한글 카테고리를 숫자 ID로 치환
      courseName: courseName,
      weeklyPlan: weeklyPlan
    };

    try {
      // POST /api/todos 요청 전송
      const response = await axios.post('/todos', requestData, {
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      // 백엔드 성공 응답 처리 (isSuccess가 true인 경우)
      if (response.data.isSuccess) {
        console.log('코스 등록 성공:', response.data.result);
        navigate('/basecamp');
      } else {
        // 백엔드에서 에러 메시지를 보낸 경우 (예: COMMON_400 등)
        alert(response.data.message);
      }
    } catch (error) {
      // 네트워크 에러 또는 400/500 에러 처리
      console.error('코스 등록 중 에러 발생:', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message || '요청 중 오류가 발생했습니다.');
      } else {
        alert('서버와 연결할 수 없습니다.');
      }
    }
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