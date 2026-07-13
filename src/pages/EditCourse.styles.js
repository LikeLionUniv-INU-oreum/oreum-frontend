import styled from 'styled-components';

// 카테고리별 고유 테마 색상 정의 (시안 기준)
const categoryThemes = {
  교내: { border: '#D0EBFF', activeBg: '#D0EBFF', color: '#1c7ed6' },
  대외활동: { border: '#FFF795', activeBg: '#FFF795', color: '#e67e22' },
  자격증: { border: '#57E094', activeBg: '#57E094', color: '#2b5c3d' },
  인턴: { border: '#EEBEFA', activeBg: '#EEBEFA', color: '#ae3ec9' },
};

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
  gap: 20px;
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

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;

  h3 {
    font-size: 20px;
    font-weight: 900;
    color: #2b5c3d;
    margin: 0 0 16px 0;
  }
`;

/* 2x2 카테고리 그리드 */
export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
`;

export const CategoryButton = styled.button`
  background-color: ${(props) => (props.isSelected ? categoryThemes[props.category]?.activeBg : '#ffffff')};
  border: 2px solid ${(props) => categoryThemes[props.category]?.border || '#ddd'};
  color: #111111;
  font-size: 16px;
  font-weight: bold;
  padding: 16px 0;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

/* 커스텀 인풋 스타일 */
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

/* 커스텀 텍스트에어리어 스타일 */
export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 160px;
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
    color: #777; /* TIP용 placeholder는 시안처럼 조금 더 선명하게 처리 */
  }
`;

/* 하단 코스 설정 완료 버튼 */
export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#b0b0b0' : '#3b7d5a')};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 0;
  font-size: 16px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: auto;
  //margin-bottom: 80px; /* 하단 탭바를 가리지 않기 위한 여백 */
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

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #3b7d5a; /* 시안의 짙은 초록색 */
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline; /* 밑줄 추가 */
  text-underline-offset: 4px; /* 밑줄 살짝 띄우기 */
  cursor: pointer;
  align-self: center;
  //margin-top: 2dvh;
  margin-bottom: 72px; /* 하단 탭바 여백 확보 */
  padding: 8px;

  &:hover {
    opacity: 0.8;
  }
`;
