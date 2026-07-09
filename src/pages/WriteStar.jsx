import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './WriteStar.styles';
import BottomNav from '../components/common/BottomNav';

export default function WriteStar() {
  const navigate = useNavigate();

  // 4대 요소 상태(State) 관리
  const [situation, setSituation] = useState('');
  const [task, setTask] = useState('');
  const [action, setAction] = useState('');
  const [result, setResult] = useState('');

  // 4개 입력칸이 전부 공백 제외 한 글자 이상씩 채워졌는지 실시간 검증
  const isFormValid =
    situation.trim().length > 0 &&
    task.trim().length > 0 &&
    action.trim().length > 0 &&
    result.trim().length > 0;

  const handleSubmit = () => {
    if (!isFormValid) return;

    const starPayload = {
      courseName: "무역영어 자격증",
      situation,
      task,
      action,
      result
    };

    console.log("백엔드로 보낼 STAR 매핑 데이터:", starPayload);
    navigate('/completestar');
  };

  return (
    <S.Container>
      {/* 상단 뒤로가기 화살표 */}
      <S.BackButton onClick={() => window.history.back()}>←</S.BackButton>

      {/* 메인 타이틀 영역 */}
      <S.PageTitleSection>
        <h2>STAR 기법을 사용하여<br />등반 완료 깃발을 획득하세요.</h2>
        <p>STAR 기법이란, 면접이나 자기소개서에서 자신의 경험을 논리적으로 전달하기 위한 답변 작성법이에요.</p>
      </S.PageTitleSection>

      <S.Divider />

      {/* 진행 중인 대상 코스 정보 표시 */}
      <S.CourseBadgeCard>
        <span>🚩</span> 무역영어 자격증
      </S.CourseBadgeCard>

      {/* [S] - Situation (상황) */}
      <S.FormSection>
        <h3>Situation - 상황</h3>
        <p className="desc">경험이 발생한 배경과 맥락을 설명하는 단계예요.<br />언제, 어디서 일어난 일인지 구체적인 정황을 간략하게 제시하면 돼요.</p>
        <S.TextAreaBox
          placeholder="예시 예시 예시"
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
        />
      </S.FormSection>

      {/* [T] - Task (과제) */}
      <S.FormSection>
        <h3>Task - 과제</h3>
        <p className="desc">당시에 주어진 목표, 해결해야 할 과제, 또는 직면했던 문제 상황이 무엇이었는지 명확히 밝히면 돼요.</p>
        <S.TextAreaBox
          placeholder="예시 예시 예시"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </S.FormSection>

      {/* [A] - Action (행동) */}
      <S.FormSection>
        <h3>Action - 행동</h3>
        <p className="desc">가장 핵심이 되는 단계예요.<br />목표를 달성하기 위해 구체적으로 어떤 생각과 행동을 했는지를 자세히 설명하면 돼요.</p>
        <S.TextAreaBox
          placeholder="예시 예시 예시"
          value={action}
          onChange={(e) => setAction(e.target.value)}
        />
      </S.FormSection>

      {/* [R] - Result (결과) */}
      <S.FormSection>
        <h3>Result - 결과</h3>
        <p className="desc">행동의 결과로 어떤 성과를 얻었는지 제시하면 돼요.<br />정량적 수치와 정성적 성과를 포함하는 것이 좋아요.</p>
        <S.TextAreaBox
          placeholder="예시 예시 예시"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
      </S.FormSection>

      {/* 4가지 항목 만족 시 잠금 해제되는 최종 완료 버튼 */}
      <S.SubmitButton
        disabled={!isFormValid}
        onClick={handleSubmit}
      >
        코스 등반 완료
      </S.SubmitButton>

      {/* 하단 탭바 영역 고정 */}
      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}