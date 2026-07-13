import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px 24px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
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
    font-weight: 900;
    color: #2b5c3d;
    margin: 0;
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
  background-color: #eaf8e7;
  border-radius: 4px;
  padding: 5px 5px;
  margin-bottom: 20px;

  .course-info {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    span {
      color: #888;
    }
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

  /* 마우스 드래그로 인해 별 글자가 파랗게 선택되는 현상 방지 */
  user-select: none;

  .stars-filled {
    color: #4a7a5c; /* 채워진 별 색상 */
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none; /* 자식 요소가 마우스 이벤트를 방해하지 않도록 차단 */
  }
`;

/* 구분선 */
export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #acacac;
  margin: 0 0 24px 0;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  h3 {
    font-size: 18px;
    font-weight: 900;
    color: #2b5c3d;
    margin: 0 0 5px 5px;
    span {
      margin-left: 2px;
    } /* 필수 표시 * */
  }
`;

export const InputBox = styled.input`
  width: 100%;
  height: 54px;
  border: 2px solid #3b7d5a;
  border-radius: 12px;
  padding: 16px;
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  color: #333;

  &::placeholder {
    color: #3b7d5a;
    font-weight: 300;
  }
`;

export const SelectBox = styled.select`
  width: 100%;
  height: 52px;
  border: 2px solid #3b7d5a;
  border-radius: 12px;
  padding: 0 40px 0 16px; /* 우측 화살표 공간 확보 */
  font-size: 15px;
  box-sizing: border-box;
  outline: none;
  color: #333;
  cursor: pointer;

  /* 브라우저 기본 화살표 제거 */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  /* 💡 깔끔한 다운 화살표(▼) 배경 이미지 추가 */
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%233B7D5A' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
  background-repeat: no-repeat;
  background-position: calc(100% - 16px) center;
  background-size: 18px;
  background-color: #ffffff;

  &:disabled {
    background-color: #f5f5f5;
    cursor: not-allowed;
  }
`;

/* 추천 시기 가로 배치 크룹 */
export const TagGroup = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  width: 100%;
`;

export const TagButton = styled.button`
  flex: 1;
  background-color: ${(props) => (props.isSelected ? '#4a7a5c' : '#bbb')};
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 1px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 120px;
  border: 2px solid #3b7d5a;
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  color: #333;
  line-height: 1.6;

  &::placeholder {
    color: #3b7d5a;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#b0b0b0' : '#4a7a5c')};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 0;
  font-size: 18px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
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

export const CourseFlag = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
`;
