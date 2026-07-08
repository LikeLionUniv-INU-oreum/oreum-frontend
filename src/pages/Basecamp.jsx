import React, { useState } from 'react';
import * as S from './Basecamp.styles';
import BottomNav from '../components/common/BottomNav';
import HomeMountain from '../assets/images/HomeMountain.jpg';
import BlackFlag from '../assets/images/BlackFlag.png';

// 1. 산 위의 버튼 배치 데이터
const STAGE_DATA = [
  { id: 1, threshold: 20, bottom: '23.5%', left: '39%' },
  { id: 2, threshold: 40, bottom: '38.8%', left: '56%' },
  { id: 3, threshold: 60, bottom: '54%', left: '44%' },
  { id: 4, threshold: 80, bottom: '64.5%', left: '54.5%' },
];

// 고정할 카테고리 리스트 순서 정의
const CATEGORIES = ['자격증', '대외활동', '교내', '인턴'];

// 2. 내 코스 카테고리 데이터 (교내, 인턴이 비어있는 상태)
const COURSE_DATA = {
  자격증: [
    { id: 1, title: '무역영어 자격증', isCompleted: false },
    { id: 2, title: '토익 850점 이상', isCompleted: true },
  ],
  대외활동: [
    { id: 3, title: '무역영어 자격증', isCompleted: false },
    { id: 4, title: '토익 850점 이상', isCompleted: false },
  ],
  교내: [],
  인턴: []
};

export default function MainPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('2026년 상반기');

  // 진행률 상태 (100일 때만 정상의 깃발이 원래 노란색으로 빛납니다.)
  const [progress, setProgress] = useState(100);

  return (
    <S.Container>

      {/* 상단 메인 카드 섹션 */}
      <S.MainCard>
        <S.CardHeader>
          <S.TitleSection>
            <h2 className="main-title">베이스캠프</h2>
            <p className="sub-title">[해외영업] 산맥 등반 중!</p>
          </S.TitleSection>

          {/* 아코디언 드롭다운 버튼 */}
          <S.DropdownContainer>
            <S.DropdownButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {selectedPeriod} {isDropdownOpen ? '▲' : '▼'}
            </S.DropdownButton>
            {isDropdownOpen && (
              <S.DropdownMenu>
                {['2026년 상반기', '2025년 하반기', '2025년 상반기'].map((period) => (
                  <S.DropdownItem
                    key={period}
                    onClick={() => {
                      setSelectedPeriod(period);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {period}
                  </S.DropdownItem>
                ))}
              </S.DropdownMenu>
            )}
          </S.DropdownContainer>
        </S.CardHeader>

        {/* 고도 및 상위 백분율 정보 */}
        <S.InfoGrid>
          <div>
            <div className="label">현재 고도</div>
            <div className="value">1,250M</div>
          </div>
          <div className="right">
            <div className="label">[해외영업] 산맥</div>
            <div className="value">상위 16%</div>
          </div>
        </S.InfoGrid>

        {/* 등산 진행도 일러스트 영역 */}
        <S.MountainWrapper bgImage={HomeMountain}>
          <S.AltitudeScale>
            {[...Array(12)].map((_, i) => <span key={i} />)}
          </S.AltitudeScale>
          <S.ActivePointer top="40%">◀</S.ActivePointer>

          {/* 스테이지 버튼들 */}
          {STAGE_DATA.map((stage) => (
            <S.StageButton
              key={stage.id}
              bottom={stage.bottom}
              left={stage.left}
              isActive={progress >= stage.threshold}
            />
          ))}

          {/* progress === 100일 때만 회색 필터가 풀리며 노란색으로 변하는 깃발 */}
          <S.FlagIcon isActive={progress === 100}>
            <img src={BlackFlag} alt="flag" style={{ width: '100%', height: '100%' }} />
          </S.FlagIcon>
        </S.MountainWrapper>
      </S.MainCard>

      {/* 내 코스 리스트 섹션 */}
      <S.CourseSection>
        <S.SectionHeader>
          <div>
            <h3>내 코스</h3>
            <p>목표를 관리하고 기록해요.</p>
          </div>
          <S.AddBtn>+ 새 할 일 추가</S.AddBtn>
        </S.SectionHeader>

        {/* 고정된 4가지 카테고리 순서대로 상시 반복 렌더링 */}
        {CATEGORIES.map((category) => {
          const tasks = COURSE_DATA[category] || [];

          return (
            <S.CategoryGroup key={category}>
              <S.CategoryTag category={category}>{category}</S.CategoryTag>

              {/* 할 일이 없을 때 띄워줄 처리 */}
              {tasks.length === 0 ? (
                <S.EmptyTaskPlaceholder>등록된 목표가 없습니다.</S.EmptyTaskPlaceholder>
              ) : (
                tasks.map((task) => (
                  <S.TaskCard
                    key={task.id}
                    isCompleted={task.isCompleted}
                    category={category}
                  >
                    <div className="task-left">
                      {/* 시안처럼 활성화 상태일 땐 녹색 계열, 완료시엔 연회색 처리 */}
                      <span style={{ color: task.isCompleted ? '#bbb' : '#3b7d5a', fontSize: '16px' }}>
                        {task.isCompleted ? '🪦' : '🚩'}
                      </span>
                      <span>{task.title}</span>
                    </div>
                    <div className="task-right">
                      <span>📄</span>
                      <span>🏅</span>
                    </div>
                  </S.TaskCard>
                ))
              )}
            </S.CategoryGroup>
          );
        })}
      </S.CourseSection>

      {/* 하단 고정 탭 바 */}
      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>

    </S.Container>
  );
}