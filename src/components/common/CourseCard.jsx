import React, { useState } from 'react';
import * as S from "../../pages/Explore.styles"; // 기존 스타일 같이 쓰기

const CourseCard = ({ course, onCardClick }) => {
  // 1인 1회 좋아요 상태를 카드 자체에서 관리 (나중에 백엔드 PATCH/POST API 연동 연계)
  const [isLiked, setIsLiked] = useState(course.isLiked || false);
  const [likeCount, setLikeCount] = useState(course.likes || 0);

  const handleLikeClick = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지

    // 임시 토글 로직 (나중에 axios.post('/api/like', { id: course.id }) 형태 추가될 곳)
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <S.CourseCard onClick={() => onCardClick(course.id)}>
      <S.CardHeader>
        <S.CardTitleGroup>
          <S.CardTitle>{course.title}</S.CardTitle>
          <S.Stars>{renderStars(course.rating)}</S.Stars>
        </S.CardTitleGroup>

        <S.LikeButton liked={isLiked} onClick={handleLikeClick}>
          <S.HeartIcon liked={isLiked}>♥</S.HeartIcon>
          <span>{likeCount}</span>
        </S.LikeButton>
      </S.CardHeader>

      <S.CardBody>
        <S.InfoRow><S.InfoLabel>등반 시기 :</S.InfoLabel> {course.period}</S.InfoRow>
        <S.InfoRow><S.InfoLabel>소요 기간 :</S.InfoLabel> {course.duration}</S.InfoRow>
        <S.InfoRow><S.InfoLabel>추천 시기 :</S.InfoLabel> {course.recommended}</S.InfoRow>
      </S.CardBody>
    </S.CourseCard>
  );
};

export default CourseCard;