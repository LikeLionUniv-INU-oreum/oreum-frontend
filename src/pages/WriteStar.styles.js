import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px 24px;
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  position: relative;
  overflow-y: auto; /* 🚩 첫 번째 사진에서 두 번째 사진으로 스크롤 가능하도록 설정 */

  /* 스크롤바 숨기기 (선택사항, 깔끔한 UI를 위해) */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #5a8469;
    border-radius: 4px;
  }
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
    line-height: 1.4;
    margin: 0 0 8px 0;
  }
  p {
    font-size: 13px;
    color: #555;
    line-height: 1.5;
    margin: 0;
  }
`;

/* 상단 구분 가로선 */
export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 0 0 20px 0;
  width: 100%;
`;

/* 코스 라벨 뱃지 형태 */
export const CourseBadgeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f0f6f2;
  padding: 12px 16px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-bottom: 28px;
  width: 100%;
  box-sizing: border-box;

  span {
    color: #888;
  }
`;

/* STAR 입력 섹션 공통 스타일 */
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  width: 100%;

  h3 {
    font-size: 22px;
    font-weight: 900;
    color: #4a7a5c; /* 시안 특유의 진녹색 제목 타이틀 */
    margin: 0 0 6px 0;
  }

  .desc {
    font-size: 13px;
    color: #333;
    line-height: 1.5;
    margin: 0 0 12px 0;
    word-break: keep-all;
  }
`;

/* 멀티라인 입력 박스 */
export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 140px;
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
    color: #a3c1ad; /* 예시 예시 예시 문구 색상 */
  }
`;

/* 코스 등반 완료 버튼 */
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
  margin-top: 12px;
  margin-bottom: 100px; /* 하단 네비바 공간 확보 */
  transition: background-color 0.3s ease;
  flex-shrink: 0;
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