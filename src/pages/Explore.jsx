import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BottomNav from '../components/common/BottomNav';
import CourseCard from '../components/common/CourseCard';
import * as S from './Explore.styles';
import { useNavigate } from 'react-router-dom';
import { getReviewLists } from '../api/review';

const GRADE_API_MAP = {
  '1학년': 'FIRST_GRADE',
  '2학년': 'SECOND_GRADE',
  '3학년': 'THIRD_GRADE',
  '4학년': 'FOURTH_GRADE',
  ALL: 'ALL',
};

const CATEGORY_API_MAP = {
  교내: 1,
  대외: 2,
  자격증: 3,
  인턴: 4,
  ALL: 'ALL',
};

const REVERSE_GRADE_MAP = {
  FIRST_GRADE: '1학년',
  SECOND_GRADE: '2학년',
  THIRD_GRADE: '3학년',
  FOURTH_GRADE: '4학년',
  ALL: '전학년',
};

export default function Explore() {
  const navigate = useNavigate();
  const location = useLocation();

  // API 최초 호출 시 ALL이 기본값
  const [selectedPeriod, setSelectedPeriod] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [sortBy, setSortBy] = useState('popular');

  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const currentJobId = location.state?.jobId || localStorage.getItem('currentJobId') || 1;
  const currentJobName = location.state?.jobName || localStorage.getItem('currentJobName') || '직무명';

  const fetchReviewLists = async (pageNumber, isInitial = false) => {
    if (isLoading || (!hasNext && !isInitial)) return;
    setIsLoading(true);

    try {
      const apiGrade = GRADE_API_MAP[selectedPeriod] || 'ALL';
      const apiCategoryId = CATEGORY_API_MAP[selectedCategory] || 'ALL';
      const apiSort = sortBy === 'popular' ? 'POPULAR' : 'RECENT';

      const data = await getReviewLists({
        jobId: currentJobId,
        grade: apiGrade,
        categoryId: apiCategoryId,
        sort: apiSort,
        page: pageNumber,
        size: 10,
      });

      if (data.isSuccess) {
        const { reviews: newReviews, hasNext: nextFlag } = data.result;

        if (isInitial) {
          setReviews(newReviews);
        } else {
          setReviews((prev) => [...prev, ...newReviews]);
        }

        setPage(pageNumber);
        setHasNext(nextFlag);
      }
    } catch (error) {
      console.error('리뷰 목록을 불러오지 못했습니다:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviewLists(0, true);
  }, [sortBy, selectedPeriod, selectedCategory]);

  // 더보기 버튼 클릭 핸들러
  const handleLoadMore = () => {
    if (hasNext && !isLoading) {
      fetchReviewLists(page + 1);
    }
  };

  const handlePeriodClick = (value) => {
    setSelectedPeriod(value);
  };

  const handleCategoryClick = (value) => {
    setSelectedCategory(value);
  };

  const handleCardClick = (course) => {
    navigate('/review', { state: { course } });
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
                <S.FilterButton key={item} $active={selectedPeriod === item} onClick={() => handlePeriodClick(item)}>
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
                  $active={selectedCategory === item}
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
            <S.ListTitle>[{currentJobName ?? '직무명'}] 등반 코스</S.ListTitle>
            <S.SortButtonGroup>
              <S.SortButton $active={sortBy === 'popular'} onClick={() => setSortBy('popular')}>
                인기순
              </S.SortButton>
              <S.SortButton $active={sortBy === 'latest'} onClick={() => setSortBy('latest')}>
                등록순
              </S.SortButton>
            </S.SortButtonGroup>
          </S.ListHeader>

          {/* 받아온 리뷰 리스트 렌더링 */}
          {reviews.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '40px', color: '#999' }}>조건에 맞는 코스가 없어요 😥</div>
          ) : (
            reviews.map((review) => {
              const formattedCourse = {
                id: review.courseReviewId,
                title: `[${review.courseName}]`,
                rating: review.rating,
                period: `${REVERSE_GRADE_MAP[review.ascentGrade]}`,
                duration: review.duration,
                recommended: review.recommendedGrades?.map((g) => REVERSE_GRADE_MAP[g]).join(', '),
                likes: review.likeCount,
                isLiked: review.liked,
              };

              return (
                <CourseCard
                  key={formattedCourse.id}
                  course={formattedCourse}
                  onCardClick={() => handleCardClick(formattedCourse)}
                />
              );
            })
          )}

          <S.MoreButton onClick={handleLoadMore} disabled={isLoading}>
            코스 더보기
          </S.MoreButton>
        </S.ListContainer>
      </S.ContentWrapper>

      <BottomNav />
    </S.PageContainer>
  );
}
