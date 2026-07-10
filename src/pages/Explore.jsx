import { useState, useEffect } from 'react';
import BottomNav from '../components/common/BottomNav';
import CourseCard from '../components/common/CourseCard';
import * as S from './Explore.styles';
import { useNavigate } from 'react-router-dom';

// 임시 데이터 (백엔드 연동 전 화면 확인용)
const INITIAL_COURSES = [
  {
    id: 1,
    title: '[OPIC]',
    rating: 3,
    period: '2학년 2학기',
    duration: '4개월',
    recommended: '1학년, 2학년',
    likes: 183,
    isLiked: false,
  },
  {
    id: 2,
    title: '[컴활 1급]',
    rating: 4,
    period: '1학년 2학기',
    duration: '3개월',
    recommended: '1학년',
    likes: 120,
    isLiked: false,
  },
  {
    id: 3,
    title: '[무역영어]',
    rating: 3,
    period: '3학년 2학기',
    duration: '6개월',
    recommended: 'ALL',
    likes: 90,
    isLiked: false,
  },
];

export default function Explore() {
  const [selectedPeriods, setSelectedPeriods] = useState(['1학년']); // 1. 추천 시기 필터 상태 (다중 선택, 초기값 1학년)
  const [selectedCategories, setSelectedCategories] = useState(['교내']); // 2. 카테고리 필터 상태 (다중 선택, 초기값 교내)
  const [sortBy, setSortBy] = useState('popular'); // 3. 정렬 상태 (인기순 / 등록순 단일 선택, 기본값 인기순)
  const [courses, setCourses] = useState(INITIAL_COURSES); // 4. 카드 리스트 데이터 상태
  const navigate = useNavigate();

  // 정렬 기준(sortBy)이나 필터가 바뀔 때 실행될 훅 (나중에 백엔드 API 연동할 핵심 구역)
  useEffect(() => {
    console.log(
      `서버 요청 파라미터 -> 정렬: ${sortBy}, 시기: ${selectedPeriods}, 카테고리: ${selectedCategories}`,
    );
    // 여기서 나중에 axios.get(`/api/courses?sort=${sortBy}...`).then(res => setCourses(res.data)) 처리하시면 됩니다!
  }, [sortBy, selectedPeriods, selectedCategories]);

  // 추천 시기 버튼 클릭 핸들러 (ALL 누르면 옆에 꺼 다 꺼지는 로직)
  const handlePeriodClick = (value) => {
    if (value === 'ALL') {
      setSelectedPeriods(['ALL']);
    } else {
      let updated = selectedPeriods.filter((p) => p !== 'ALL');
      if (updated.includes(value)) {
        updated = updated.filter((p) => p !== value);
        if (updated.length === 0) updated = ['ALL']; // 아무것도 선택 안 하면 자동으로 ALL 켜짐
      } else {
        updated.push(value);
      }
      setSelectedPeriods(updated);
    }
  };

  // 카테고리 버튼 클릭 핸들러 (ALL 누르면 옆에 꺼 다 꺼지는 로직)
  const handleCategoryClick = (value) => {
    if (value === 'ALL') {
      setSelectedCategories(['ALL']);
    } else {
      let updated = selectedCategories.filter((c) => c !== 'ALL');
      if (updated.includes(value)) {
        updated = updated.filter((c) => c !== value);
        if (updated.length === 0) updated = ['ALL'];
      } else {
        updated.push(value);
      }
      setSelectedCategories(updated);
    }
  };

  // 카드 클릭 시 이동 핸들러
  const handleCardClick = (course) => {
    // 클릭한 카드 데이터를 state 객체에 담아서 넘겨줍니다.
    navigate('/review', { state: { course: course } });
  };

  return (
    <S.PageContainer>
      <S.ContentWrapper>
        {/* 상단 타이틀 섹션 */}
        <S.HeaderSection>
          <S.Title>코스 탐색</S.Title>
          <S.SubTitle>
            같은 직무를 희망하는 학우들은
            <br />
            언제 무엇을 준비하고 있을까요?
          </S.SubTitle>
        </S.HeaderSection>

        {/* 필터 섹션 (추천시기 & 카테고리 ALL 토글 완벽 포함) */}
        <S.FilterSection>
          <S.FilterGroup>
            <S.FilterLabel>추천 시기</S.FilterLabel>
            <S.ButtonGroup>
              {['1학년', '2학년', '3학년', '4학년', 'ALL'].map((item) => (
                <S.FilterButton
                  key={item}
                  active={selectedPeriods.includes(item)}
                  onClick={() => handlePeriodClick(item)}
                >
                  {item}
                </S.FilterButton>
              ))}
            </S.ButtonGroup>
          </S.FilterGroup>

          <S.FilterGroup style={{ marginTop: '10px' }}>
            <S.ButtonGroup>
              {['교내', '대외', '자격증', '인턴', 'ALL'].map((item) => (
                <S.FilterButton
                  key={item}
                  active={selectedCategories.includes(item)}
                  onClick={() => handleCategoryClick(item)}
                >
                  {item}
                </S.FilterButton>
              ))}
            </S.ButtonGroup>
          </S.FilterGroup>
        </S.FilterSection>

        {/* 리스트 섹션 */}
        <S.ListContainer>
          <S.ListHeader>
            <S.ListTitle>[해외영업] 등반 코스</S.ListTitle>
            <S.SortButtonGroup>
              <S.SortButton
                active={sortBy === 'popular'}
                onClick={() => setSortBy('popular')}
              >
                인기순
              </S.SortButton>
              <S.SortButton
                active={sortBy === 'latest'}
                onClick={() => setSortBy('latest')}
              >
                등록순
              </S.SortButton>
            </S.SortButtonGroup>
          </S.ListHeader>

          {/* 분리된 카드 컴포넌트에 데이터 넘겨서 렌더링 */}
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onCardClick={() => handleCardClick(course)} // id 대신 객체 통째로 전달
            />
          ))}
        </S.ListContainer>
      </S.ContentWrapper>

      <BottomNav />
    </S.PageContainer>
  );
}
