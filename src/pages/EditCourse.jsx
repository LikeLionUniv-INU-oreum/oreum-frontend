import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './EditCourse.styles';
import BottomNav from '../components/common/BottomNav';

export default function EditCourse() {
  const location = useLocation();
  const navigate = useNavigate();

  const todoId = location.state?.todoId;

  const [selectedCategory, setSelectedCategory] = useState(null); // 선택된 카테고리 저장
  const [courseName, setCourseName] = useState(''); // 코스명 입력값
  const [weeklyPlan, setWeeklyPlan] = useState(''); // 주차별 세부 계획 입력값

  const [originalData, setOriginalData] = useState({
    category: null,
    courseName: '',
    weeklyPlan: ''
  });

  const categories = ['교내', '대외활동', '자격증', '인턴'];

  const categoryMap = {
    '자격증': 1,
    '대외활동': 2,
    '교내': 3,
    '인턴': 4
  };

  const tipPlaceholder = `• 1주차: 공부법 정리, 교재 구매\n• 2-5주차: 주 5일 이론 진도 나가기\n• 6-7주차: 시간 재고 실습하기\n• 8주차: 모의시험 치기`;

  const isFormValid = selectedCategory !== null && courseName.trim().length > 0;

  useEffect(() => {
    const fetchTodoDetail = async () => {
      if (!todoId) {
        alert('올바르지 않은 접근입니다. 할 일 ID가 없습니다.');
        navigate(-1);
        return;
      }

      const accessToken = localStorage.getItem('accessToken');

      try {
        // GET /api/todos/{todoId} 요청 전송
        const response = await axios.get(`/todos/${todoId}`, {
          baseURL: import.meta.env.VITE_API_URL,
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

          setOriginalData({
            category: data.categoryName,
            courseName: data.courseName,
            weeklyPlan: data.weeklyPlan || ''
          });
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
  }, [todoId, navigate]);

  const handleSubmit = async () => {
    if (!isFormValid) return;

    // 변경된 항목만 담을 객체
    const requestData = {};

    if (selectedCategory !== originalData.category) {
      requestData.categoryId = categoryMap[selectedCategory];
    }
    if (courseName !== originalData.courseName) {
      requestData.courseName = courseName;
    }
    if (weeklyPlan !== originalData.weeklyPlan) {
      requestData.weeklyPlan = weeklyPlan;
    }

    // 수정할 필드가 하나도 없는 경우 전송을 막고 안내
    if (Object.keys(requestData).length === 0) {
      alert('수정된 내용이 없습니다.');
      return;
    }

    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.patch(`/todos/${todoId}`, requestData, {
        baseURL: import.meta.env.VITE_API_URL, // 프로젝트 설정에 맞게 제외하셔도 됩니다
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.data.isSuccess) {
        alert('코스 설정이 완료되었습니다!');
        navigate('/basecamp'); // 성공 시 베이스캠프로 렌더링 이동
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('코스 수정 중 에러 발생:', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('수정 중 서버 오류가 발생했습니다.');
      }
    }
  };

  const handleDelete = async () => {
    const isConfirmed = window.confirm("정말 이 코스를 삭제하시겠습니까?");
    if (!isConfirmed) return;

    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.delete(`/todos/${todoId}`, {
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      if (response.data.isSuccess) {
        alert("코스가 삭제되었습니다.");
        navigate('/basecamp');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('코스 삭제 중 에러 발생:', error);
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert('삭제 중 서버 오류가 발생했습니다.');
      }
    }
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => navigate(-1)}>←</S.BackButton>

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