import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden; /* 스크롤을 막고 100dvh 안에 딱 맞춥니다 */
`;

/* 1. 헤더 영역 */
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 2dvh;
`;

/* 2. 중간1 영역 (현재 어떤 학적이신가요?) */
export const MiddleOne = styled.div`
  width: 80%; 
  //max-width: 360px;
  margin-top: 4dvh;
  margin-bottom: 2.5dvh;
  text-align: left;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
`;

/* 3. 중간2 영역 (선택 박스 리스트) */
export const MiddleTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%; 
  
  /* 💡 핵심: 남은 공간을 이 영역이 꽉 채우도록 해서 버튼들이 위로 쏠리지 않게 합니다 */
  flex: 1; 
  /* 화면 높이에 따라 간격이 유연하게 벌어지도록 분배합니다 */
  justify-content: flex-start; 
  gap: 1.5dvh; 
  
  margin-bottom: 2dvh; /* 하단 배경 일러스트 시작점과의 간격 확보 */
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 54px; /* 버튼 높이 원래대로 복구 */
  background-color: ${({ $isSelected }) => ($isSelected ? '#3b7d5a' : '#f5f5f5')};
  color: ${({ $isSelected }) => ($isSelected ? '#ffffff' : '#555555')};
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;

/* 4. 푸터 영역 (배경지 + 버튼 합체) */
export const FooterBgSection = styled.div`
  position: relative; /* 버튼 배치의 기준점 */
  width: 100%;
  //max-width: 360px;
  
  /* 💡 핵심: 절대 좌표(absolute)를 빼고 flex의 흐름을 타게 하여 화면 밑바닥에 딱 붙게 만듭니다 */
  margin-top: auto; 
  display: flex;
  justify-content: center;
  align-items: flex-end;
  //margin-bottom: 2dvh;
`;

export const BgImage = styled.img`
  width: 100%;
  height: auto;
  display: block; /* 하단 미세 공백 제거 */
`;

export const NextButton = styled.button`
  position: absolute; /* 일러스트 위로 공중부양 */
  bottom: 12dvh; /* 시안 버튼 위치처럼 하단 여백에서 적절히 띄움 */
  width: 80%; 
  height: 54px;
  
  color: #ffffff;
  background-color: ${({ disabled }) => (disabled ? '#a3a3a3' : '#3b7d5a')};
  
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 16px;
  
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;