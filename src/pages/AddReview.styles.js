import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px 24px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  position: relative;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #777;
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 24px;
  padding: 0;
`;

export const PageTitleSection = styled.div`
  margin-bottom: 16px;
  h2 {
    font-size: 24px;
    font-weight: bold;
    color: #2b5c3d;
    margin: 0 0 6px 0;
  }
  p {
    font-size: 14px;
    color: #555;
    margin: 0;
  }
`;

/* 코스명 및 별점 가로 박스 */
export const CourseRatingCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #6392d4; /* 시안의 파란색 테두리 */
  background-color: #f4f8ff;
  border-radius: 4px;
  padding: 14px 16px;
  margin-bottom: 20px;

  .course-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    span { color: #888; }
  }
`;

/* 별점 컨테이너 */
export const StarRatingContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 24px;
  color: #ddd; /* 빈 별 색상 */
  
  /* 🚩 마우스 드래그로 인해 별 글자가 파랗게 선택되는 현상 방지 */
  user-select: none; 

  .stars-filled {
    color: #4a7a5c; /* 채워진 별 색상 */
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none; /* 🚩 자식 요소가 마우스 이벤트를 방해하지 않도록 차단 */
  }
`

/* 구분선 */
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 0 0 24px 0;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: #2b5c3d;
    margin: 0 0 12px 0;
    span { color: #e74c3c; margin-left: 4px; } /* 필수 표시 * */
  }
`;

export const InputBox = styled.input`
  width: 100%;
  border: 2px solid #5a8469;
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  color: #333;

  &::placeholder {
    color: #aaa;
  }
`;

/* 추천 시기 가로 배치 크룹 */
export const TagGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const TagButton = styled.button`
  background-color: ${props => props.isSelected ? '#4a7a5c' : '#bbb'};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 120px;
  border: 2px solid #5a8469;
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  color: #333;
  line-height: 1.6;

  &::placeholder {
    color: #777;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${props => props.disabled ? '#b0b0b0' : '#4a7a5c'};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 0;
  font-size: 18px;
  font-weight: bold;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  margin-top: auto;
  margin-bottom: 80px;
  transition: background-color 0.3s ease;
`;

export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 430px;
  z-index: 100;
`;