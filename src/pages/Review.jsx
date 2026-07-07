import React from 'react';
import * as S from './Review.styles';
import BottomNav from '../components/common/BottomNav';
import { useNavigate } from 'react-router-dom';

// 예시 데이터 구조 (실제 구현 시 라우터 파라미터나 상태(State)를 통해 전달받게 됩니다)
const dummyData = {
  title: "컴활 1급",
  author: "작성자 닉네임?",
  rating: 4, // 별점 개수
  duration: "1개월 반",
  challengePeriod: "4학년 여름학기",
  recommendedPeriod: "ALL",
  tips: {
    satisfaction: "취업 시장에서 기본으로 요구하므로",
    activity: "필기 따고 바로 실기 진입할 것. 함수 파트 엑셀 문제 버리지 마시고 기출 무한 반복하길!!",
    recommendation: "개정 후 문제가 어려워져서 노베는 2급 먼저 따고 도전하는 게 나을지도? 시간 많을 때 준비하는게 베스트니 저학년 방학에 미리 따면 좋을듯"
  }
};

export default function Review({ data = dummyData }) {
  const navigate = useNavigate(); // 2. 네비게이트 함수 선언

  // 클릭 시 주소를 이동시키는 함수
  const handleGoBack = () => {
    navigate('/explore'); // 3. 이동하고 싶은 주소(경로)를 여기에 적어주세요.
    // 만약 단순히 '브라우저 이전 페이지'로 가고 싶다면 navigate(-1); 을 적으시면 됩니다.
  };

  // 별점 렌더링을 위한 배열 생성 (5점 만점 기준)
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? '★' : '☆');
    }
    return stars.join('');
  };

  return (
    <S.Container>
      {/* 상단 초록색 헤더 구역 */}
      <S.Header>
        <S.BackButton onClick={handleGoBack}>&lt; 뒤로가기</S.BackButton>
      </S.Header>

      {/* 하단 리뷰 상세 팝업/카드 구역 */}
      <S.ContentWrapper>
        <S.CloseButton onClick={handleGoBack}>X</S.CloseButton>

        {/* 대괄호 사이의 제목 */}
        <S.Title>[{data.title}]</S.Title>

        {/* 첫 번째 섹션: 기본 정보 */}
        <S.InfoCard>
          <S.AuthorName>{data.author}</S.AuthorName>
          <S.RatingStars>{renderStars(data.rating)}</S.RatingStars>

          <S.InfoList>
            <S.InfoItem>
              <span className="label">소요기간 :</span> {data.duration}
            </S.InfoItem>
            <S.InfoItem>
              <span className="label">도전 시기 :</span> {data.challengePeriod}
            </S.InfoItem>
            <S.InfoItem>
              <span className="label">추천 시기 :</span> {data.recommendedPeriod}
            </S.InfoItem>
          </S.InfoList>
        </S.InfoCard>

        {/* 두 번째 섹션: TIP 한 마디 */}
        <S.TipTitle>💬 TIP 한 마디</S.TipTitle>
        <S.TipCard>
          <S.TipSection>
            <span className="tip-label">만족도:</span>
            <p>{data.tips.satisfaction}</p>
          </S.TipSection>

          <S.TipSection>
            <span className="tip-label">활동 관련:</span>
            <p>{data.tips.activity}</p>
          </S.TipSection>

          <S.TipSection>
            <span className="tip-label">추천 시기:</span>
            <p>{data.tips.recommendation}</p>
          </S.TipSection>
        </S.TipCard>
      </S.ContentWrapper>

      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}