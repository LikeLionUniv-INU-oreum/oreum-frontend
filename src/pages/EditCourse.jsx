import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import * as S from './EditCourse.styles';
import BottomNav from '../components/common/BottomNav';

export default function EditCourse() {
  const location = useLocation();

  const todoId = location.state?.todoId;

  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 저장
  const [courseName, setCourseName] = useState(''); // 코스명 입력값
  const [weeklyPlan, setWeeklyPlan] = useState(''); // 주차별 세부 계획 입력값

  const categories = ['교내', '대외활동', '자격증', '인턴'];

  const tipPlaceholder = `• 1주차: 공부법 정리, 교재 구매\n• 2-5주차: 주 5일 이론 진도 나가기\n• 6-7주차: 시간 재고 실습하기\n• 8주차: 모의시험 치기`;

  const isFormValid = selectedCategory !== null && courseName.trim().length > 0;

  useEffect(() => {
    const fetchTodoDetail = async () => {
      if (!todoId) {
        alert('올바르지 않은 접근입니다. 할 일 ID가 없습니다.');
        window.history.back();
        return;
      }

      const accessToken = localStorage.getItem('accessToken');

      try {
        // GET /api/todos/{todoId} 요청 전송
        const response = await axios.get(`https://api.oreumm.site/api/todos/${todoId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });

        // 백엔드 성공 응답 처리 (isSuccess가 true인 경우)
        if (response.data.isSuccess) {
          const data = response.data.result;
          // 서버에서 받아온 한글 카테고리 명칭, 코스명, 계획을 입력 필드 상태에 설정
          setSelectedCategory(data.categoryName);
          setCourseName(data.courseName);
          setWeeklyPlan(data.weeklyPlan || '');
        } else {
          // 명세서에 정의된 각 에러 코드에 대응하는 예외 처리 (401, 403, 404, 409 등)
          alert(response.data.message);
        }
      } catch (error) {
        // 네트워크 에러 및 HTTP 에러 상태코드 예외 처리
        console.error('코스 상세 조회 중 에러 발생:', error);
        if (error.response && error.response.data) {
          alert(error.response.data.message || '데이터를 가져오는 중 오류가 발생했습니다.');
        } else {
          alert('서버와 연결할 수 없습니다.');
        }
      }
    };

    fetchTodoDetail();
  }, [todoId]);

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