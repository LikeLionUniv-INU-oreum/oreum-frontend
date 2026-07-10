import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Basecamp.styles';
import BottomNav from '../components/common/BottomNav';
import HomeMountain from '../assets/images/HomeMountain.jpg';
import GrayFlag from '../assets/images/GrayFlag.png';
import GreenFlag from '../assets/images/GreenFlag.png';
import Goaddreview from '../assets/images/Goaddreview.png';
import Goeditcourse from '../assets/images/Goeditcourse.png';

const STAGE_DATA = [
  { id: 1, threshold: 20, bottom: '23.5%', left: '39%' },
  { id: 2, threshold: 40, bottom: '38.8%', left: '56%' },
  { id: 3, threshold: 60, bottom: '54%', left: '44%' },
  { id: 4, threshold: 80, bottom: '64.5%', left: '54.5%' },
];

const CATEGORIES = ['자격증', '대외활동', '교내', '인턴'];

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
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('2026년 상반기');

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const handlePeriodSelect = (period) => {
    setSelectedPeriod(period);
    setIsDropdownOpen(false);
  };

  const topPercent = 16;

  return (
    <S.Container>

      <S.TopHeaderSection>
        <S.TitleArea>
          <h2>베이스캠프</h2>
          <p><span>[해외영업]</span> 산맥 등반 중!</p>
        </S.TitleArea>

        <S.DropdownContainer>
          <S.DropdownButton onClick={toggleDropdown}>
            {selectedPeriod} <span>{isDropdownOpen ? '▲' : '▼'}</span>
          </S.DropdownButton>
          {isDropdownOpen && (
            <S.DropdownMenu>
              <div onClick={() => handlePeriodSelect('2026년 상반기')}>2026년 상반기</div>
              <div onClick={() => handlePeriodSelect('2025년 하반기')}>2025년 하반기</div>
              <div onClick={() => handlePeriodSelect('2025년 상반기')}>2025년 상반기</div>
            </S.DropdownMenu>
          )}
        </S.DropdownContainer>
      </S.TopHeaderSection>

      <S.MountainBox onClick={() => navigate('/basecamp')}>
        <S.HomeInfo>
          <S.InfoText>
            <div>현재 고도</div>
            <span>2,550M</span>
          </S.InfoText>
          <S.InfoText style={{ textAlign: 'right' }}>
            <div>[해외영업] 산맥</div>
            <span>상위 16%</span>
          </S.InfoText>
        </S.HomeInfo>

        <S.MountainContent>
          <S.GaugeContainer>
            {Array.from({ length: 20 }).map((_, index) => (
              <S.GaugeLine key={index} />
            ))}
            <S.Indicator topPercent={topPercent} />
          </S.GaugeContainer>

          <S.HomeMountain src={HomeMountain} />
        </S.MountainContent>
      </S.MountainBox>

      <S.Divider />

      {/* 내 코스 리스트 섹션 */}
      <S.CourseSection>
        <S.SectionHeader>
          <div>
            <h3>내 코스</h3>
            <p>목표를 관리하고 기록해요.</p>
          </div>
          <S.AddBtn onClick={() => navigate('/addcourse')}>+ 새 할 일 추가</S.AddBtn>
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
                      <S.StatusFlag
                        src={task.isCompleted ? GrayFlag : GreenFlag}
                        alt="상태 깃발"
                      />
                      <span
                        style={{
                          textDecoration: task.isCompleted ? 'line-through' : 'none',
                          color: '#333'
                        }}
                      >
                        {task.title}
                      </span>
                    </div>
                    <div className="task-right">
                      <S.ActionIcon
                        src={Goeditcourse}
                        onClick={(e) => {
                          navigate('/editcourse');
                        }}
                      />
                      <S.ActionIcon
                        src={Goaddreview}
                        onClick={(e) => {
                          navigate('/addreview');
                        }}
                      />
                    </div>
                  </S.TaskCard>
                ))
              )}
            </S.CategoryGroup>
          );
        })}
      </S.CourseSection>

      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>

    </S.Container>
  );
}