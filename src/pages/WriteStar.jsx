import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as S from './WriteStar.styles';
import BottomNav from '../components/common/BottomNav';
import GrayFlag from '../assets/images/GrayFlag.png';

export default function WriteStar() {
  const navigate = useNavigate();
  const location = useLocation();

  // AddReview에서 넘겨준 state 받기
  const todoId = location.state?.todoId;
  const courseName = location.state?.courseName || '코스명 없음';
  const reviewData = location.state?.reviewData;

  const [situation, setSituation] = useState('');
  const [task, setTask] = useState('');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    // 하나라도 입력되어 있다면 STAR 카드를 작성한 것으로 간주
    const isStarFilled = situation.trim() || task.trim() || action.trim() || result.trim();

    const starCard = isStarFilled ? { situation, task, action, result } : null;

    // 최종 전송할 Request Body 조합
    const payload = {
      ...reviewData,
      starCard,
    };

    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.post(`/todos/${todoId}/course-review`, payload, {
        baseURL: import.meta.env.VITE_API_URL,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data.isSuccess) {
        // 완료 시 베이스캠프로 이동 (Basecamp에서 해당 todoId 상태 변경됨)
        navigate('/completestar');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
        navigate('/basecamp');
      } else {
        alert('서버와 연결할 수 없습니다.');
      }
    }
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => window.history.back()}>←</S.BackButton>

      <S.PageTitleSection>
        <h2>
          STAR 기법을 사용하여
          <br />
          등반 완료 깃발을 획득하세요.
        </h2>
        <p>STAR 기법이란, 면접이나 자기소개서에서 자신의 경험을 논리적으로 전달하기 위한 답변 작성법이에요.</p>
      </S.PageTitleSection>

      <S.Divider />

      {/* 진행 중인 대상 코스 정보 표시 */}
      <S.CourseBadgeCard>
        <S.CourseFlag src={GrayFlag} />
        {courseName}
      </S.CourseBadgeCard>

      {/* [S] - Situation (상황) */}
      <S.FormSection>
        <h3>Situation - 상황</h3>
        <p className="desc">
          경험이 발생한 배경과 맥락을 설명하는 단계예요.
          <br />
          언제, 어디서 일어난 일인지 구체적인 정황을 간략하게 제시하면 돼요.
        </p>
        <S.TextAreaBox placeholder="예시 예시 예시" value={situation} onChange={(e) => setSituation(e.target.value)} />
      </S.FormSection>

      {/* [T] - Task (과제) */}
      <S.FormSection>
        <h3>Task - 과제</h3>
        <p className="desc">
          당시에 주어진 목표, 해결해야 할 과제, 또는 직면했던 문제 상황이 무엇이었는지 명확히 밝히면 돼요.
        </p>
        <S.TextAreaBox placeholder="예시 예시 예시" value={task} onChange={(e) => setTask(e.target.value)} />
      </S.FormSection>

      {/* [A] - Action (행동) */}
      <S.FormSection>
        <h3>Action - 행동</h3>
        <p className="desc">
          가장 핵심이 되는 단계예요.
          <br />
          목표를 달성하기 위해 구체적으로 어떤 생각과 행동을 했는지를 자세히 설명하면 돼요.
        </p>
        <S.TextAreaBox placeholder="예시 예시 예시" value={action} onChange={(e) => setAction(e.target.value)} />
      </S.FormSection>

      {/* [R] - Result (결과) */}
      <S.FormSection>
        <h3>Result - 결과</h3>
        <p className="desc">
          행동의 결과로 어떤 성과를 얻었는지 제시하면 돼요.
          <br />
          정량적 수치와 정성적 성과를 포함하는 것이 좋아요.
        </p>
        <S.TextAreaBox placeholder="예시 예시 예시" value={result} onChange={(e) => setResult(e.target.value)} />
      </S.FormSection>

      <S.SubmitButton onClick={handleSubmit}>코스 등반 완료</S.SubmitButton>

      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}
