import { useState } from 'react';
import * as S from '../../pages/Explore.styles';
import { likeReview } from '../../api/review';

const CourseCard = ({ course, onCardClick }) => {
  const [isLiked, setIsLiked] = useState(course.isLiked || false);
  const [likeCount, setLikeCount] = useState(course.likes || 0);
  const [isLoading, setIsLoading] = useState(false);

  /** 리뷰 좋아요 api */
  const handleLikeClick = async (e) => {
    e.stopPropagation();

    if (isLoading) return;
    setIsLoading(true);

    try {
      const data = await likeReview(course.id);

      if (data.isSuccess) {
        setIsLiked(data.result.liked);
        setLikeCount(data.result.likeCount);
      }
    } catch (error) {
      console.error('좋아요 처리에 실패했습니다:', error);
      alert('오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating) => {
    const filledCount = Math.round(rating);
    const emptyCount = 5 - filledCount;

    return '★'.repeat(filledCount) + '☆'.repeat(emptyCount);
  };

  return (
    <S.CourseCard onClick={() => onCardClick(course.id)}>
      <S.CardHeader>
        <S.CardTitleGroup>
          <S.CardTitle>{course.title}</S.CardTitle>
        </S.CardTitleGroup>

        <S.LikeButton liked={isLiked} onClick={handleLikeClick}>
          <S.HeartIcon liked={isLiked}>♥</S.HeartIcon>
          <span>{likeCount}</span>
        </S.LikeButton>
      </S.CardHeader>

      <S.CardBody>
        <S.InfoRow>
          <S.InfoLabel>등반 시기 |</S.InfoLabel> {course.period}
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>소요 기간 |</S.InfoLabel> {course.duration}
        </S.InfoRow>
        <S.InfoRow>
          <S.InfoLabel>추천 시기 |</S.InfoLabel> {course.recommended}
        </S.InfoRow>

        <S.Stars>{renderStars(course.rating)}</S.Stars>
      </S.CardBody>
    </S.CourseCard>
  );
};

export default CourseCard;
