import * as S from './Review.styles';
import BottomNav from '../components/common/BottomNav';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getReviewDetail } from '../api/review';

const GRADE_MAP = {
  ALL: '전학년',
  FIRST_GRADE: '1학년',
  SECOND_GRADE: '2학년',
  THIRD_GRADE: '3학년',
  FOURTH_GRADE: '4학년',
};

const TERM_MAP = {
  FIRST_HALF: '상반기',
  SECOND_HALF: '하반기',
};

export default function Review() {
  const navigate = useNavigate();
  const location = useLocation();

  const targetReviewId = location.state?.course?.id;
  const [reviewData, setReviewData] = useState(null);

  // 별점 렌더링 함수
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? '★' : '☆');
    }
    return stars.join('');
  };

  /** 리뷰 상세보기 api */
  useEffect(() => {
    const fetchReviewDetail = async () => {
      if (!targetReviewId) {
        alert('잘못된 접근입니다.');
        navigate(-1);
        return;
      }

      try {
        const data = await getReviewDetail(targetReviewId);
        if (data.isSuccess) setReviewData(data.result);
      } catch (error) {
        console.error('리뷰 상세 정보를 불러오지 못했습니다:', error);
      }
    };

    fetchReviewDetail();
  }, [targetReviewId, navigate]);

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <S.BackIcon onClick={() => navigate(-1)}>←</S.BackIcon>
          <S.Title style={{ color: '#ffffff' }}>코스 리뷰</S.Title>
        </S.Header>

        {/* 하단 리뷰 상세 구역 */}
        <S.ContentWrapper>
          <S.Title>[{reviewData?.courseName || ' '}]</S.Title>

          {/* 첫 번째 섹션: 기본 정보 */}
          <S.InfoCard>
            <S.AuthorName>
              {reviewData?.writerNickname || ' '}님의 {reviewData?.categoryName || ' '} 리뷰
            </S.AuthorName>
            <S.RatingStars>{renderStars(reviewData?.rating || 1)}</S.RatingStars>

            <S.InfoList>
              <S.InfoItem>
                <span className="label">소요 기간 | </span> {reviewData?.duration || '99개월'}
              </S.InfoItem>
              <S.InfoItem>
                <span className="label">도전 시기 | </span> {TERM_MAP[reviewData?.ascentSemester] || '상반기'}
              </S.InfoItem>
              <S.InfoItem>
                <span className="label">추천 시기 | </span>{' '}
                {reviewData?.recommendedGrades?.map((g) => GRADE_MAP[g]).join(', ') || '전학년'}
              </S.InfoItem>
            </S.InfoList>
          </S.InfoCard>

          {/* 두 번째 섹션: TIP 한 마디 */}
          <S.TipTitle>💬 TIP 한 마디</S.TipTitle>
          <S.TipCard>
            <S.TipSection>
              <p style={{ margin: 0, lineHeight: '1.4' }}>{reviewData?.tip || '로딩 중...'}</p>
            </S.TipSection>
          </S.TipCard>

          <div style={{ marginTop: '40px', textAlign: 'center', color: '#999', fontSize: '14px' }}>
            코스를 완료하고 직접 리뷰를 남겨보세요 ⛰️
          </div>
        </S.ContentWrapper>

        <S.BottomNavWrapper>
          <BottomNav />
        </S.BottomNavWrapper>
      </S.MainContent>
    </S.Container>
  );
}
