import { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './AddReview.styles';
import BottomNav from '../components/common/BottomNav';
import GrayFlag from '../assets/images/GrayFlag.png';

export default function AddReview() {
  const navigate = useNavigate();
  const location = useLocation();
  const todoId = location.state?.todoId; // Basecamp에서 받아온 todoId
  const courseName = location.state?.courseName || '코스명 없음'; // Basecamp에서 받아오기

  const ratingRef = useRef(null);

  const [rating, setRating] = useState(4.0); // 클릭해서 확정된 별점
  const [hoverRating, setHoverRating] = useState(null); // 마우스가 올라가 있는 임시 별점
  const [climbPeriod, setClimbPeriod] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedSemesters, setSelectedSemesters] = useState([]);
  const [tipComment, setTipComment] = useState('');

  const semesterOptions = ['1학년', '2학년', '3학년', '4학년', 'ALL'];
  const tipPlaceholder = `TIP\n• 만족도\n• 활동 관련\n• 조언`;

  // 드롭다운 옵션 배열 생성
  const climbPeriodOptions = [
    '1학년 1학기',
    '1학년 2학기',
    '2학년 1학기',
    '2학년 2학기',
    '3학년 1학기',
    '3학년 2학기',
    '4학년 1학기',
    '4학년 2학기',
  ];

  // 1개월부터 36개월까지 배열 자동 생성
  const durationOptions = Array.from({ length: 36 }, (_, i) => `${i + 1}개월`);

  const calculateRating = (e) => {
    if (!ratingRef.current) return 0;
    const { left, width } = ratingRef.current.getBoundingClientRect();
    const clickX = e.clientX - left;
    let calculated = Math.ceil((clickX / width) * 5 * 2) / 2;
    if (calculated < 0.5) calculated = 0.5;
    if (calculated > 5) calculated = 5;
    return calculated;
  };

  // 1. 클릭했을 때: 별점 고정
  const handleStarClick = (e) => {
    const currentRating = calculateRating(e);
    setRating(currentRating);
  };

  // 2. 마우스를 움직일 때: 실시간으로 임시 별점 반영
  const handleStarMouseMove = (e) => {
    const currentRating = calculateRating(e);
    setHoverRating(currentRating);
  };

  // 3. 마우스가 별 영역을 완전히 벗어났을 때: 원래 클릭했던 점수로 복구
  const handleStarMouseLeave = () => {
    setHoverRating(null);
  };

  // 추천 시기 토글 핸들러
  const handleTagToggle = (semester) => {
    if (semester === 'ALL') {
      setSelectedSemesters(selectedSemesters.includes('ALL') ? [] : ['ALL']);
    } else {
      let updated = [...selectedSemesters].filter((item) => item !== 'ALL');
      if (updated.includes(semester)) {
        updated = updated.filter((item) => item !== semester);
      } else {
        updated.push(semester);
      }
      setSelectedSemesters(updated);
    }
  };

  const isFormValid = climbPeriod !== '' && duration !== '' && selectedSemesters.length > 0;

  // 현재 화면에 보여줄 최종 별점 비율 (hover 상태면 hover 값을, 아니면 클릭된 값을 사용)
  const displayRating = hoverRating !== null ? hoverRating : rating;

  const mapRecommendedGrades = (semesters) => {
    if (semesters.includes('ALL')) return ['ALL'];

    const gradeMap = {
      '1학년': 'FIRST_GRADE',
      '2학년': 'SECOND_GRADE',
      '3학년': 'THIRD_GRADE',
      '4학년': 'FOURTH_GRADE',
    };
    return semesters.map((s) => gradeMap[s]).filter(Boolean);
  };

  // 다음 페이지로 데이터 전달
  const handleNext = () => {
    const recommendedGrades = mapRecommendedGrades(selectedSemesters);

    const reviewData = {
      rating: displayRating,
      ascentPeriod: climbPeriod,
      recommendedGrades,
      duration,
      tip: tipComment,
    };

    navigate('/writestar', { state: { todoId, courseName, reviewData } });
  };

  return (
    <S.Container>
      <S.BackButton onClick={() => window.history.back()}>←</S.BackButton>

      <S.PageTitleSection>
        <h2>코스 리뷰 작성</h2>
        <p>작성한 리뷰는 [탐색] 탭에 공개돼요.</p>
      </S.PageTitleSection>

      {/* 상단 고정 코스 정보 & 별점 조절 */}
      <S.CourseRatingCard>
        <div className="course-info">
          <S.CourseFlag src={GrayFlag} />
          {courseName}
        </div>

        {/* MouseMove, MouseLeave 이벤트를 추가로 연결해 줍니다 */}
        <S.StarRatingContainer
          ref={ratingRef}
          onClick={handleStarClick}
          onMouseMove={handleStarMouseMove}
          onMouseLeave={handleStarMouseLeave}
        >
          ★★★★★
          <div className="stars-filled" style={{ width: `${(displayRating / 5) * 100}%` }}>
            ★★★★★
          </div>
        </S.StarRatingContainer>
      </S.CourseRatingCard>

      <S.Divider />

      <S.FormSection>
        <h3>
          등반 시기 <span>*</span>
        </h3>
        <S.SelectBox value={climbPeriod} onChange={(e) => setClimbPeriod(e.target.value)}>
          <option value="" disabled hidden>
            등반 시기를 선택해주세요.
          </option>
          {climbPeriodOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </S.SelectBox>
      </S.FormSection>

      <S.FormSection>
        <h3>
          소요 기간 <span>*</span>
        </h3>
        <S.SelectBox value={duration} onChange={(e) => setDuration(e.target.value)}>
          <option value="" disabled hidden>
            소요 기간을 선택해주세요.
          </option>
          {durationOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </S.SelectBox>
      </S.FormSection>

      <S.FormSection>
        <h3>
          추천 시기 <span>*</span>
        </h3>
        <S.TagGroup>
          {semesterOptions.map((option) => (
            <S.TagButton
              key={option}
              isSelected={selectedSemesters.includes(option)}
              onClick={() => handleTagToggle(option)}
            >
              {option}
            </S.TagButton>
          ))}
        </S.TagGroup>
      </S.FormSection>

      <S.FormSection>
        <h3>TIP 한 마디</h3>
        <S.TextAreaBox
          placeholder={tipPlaceholder}
          value={tipComment}
          onChange={(e) => setTipComment(e.target.value)}
        />
      </S.FormSection>

      <S.SubmitButton disabled={!isFormValid} onClick={handleNext}>
        다음으로
      </S.SubmitButton>

      <S.BottomNavWrapper>
        <BottomNav />
      </S.BottomNavWrapper>
    </S.Container>
  );
}
