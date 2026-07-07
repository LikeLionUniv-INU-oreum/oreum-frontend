import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #ffffff;
  box-sizing: border-box;
<<<<<<< HEAD
  overflow: hidden;
`;

=======
  overflow: hidden; /* 스크롤을 막고 100dvh 안에 딱 맞춥니다 */
`;

/* 1. 헤더 영역 */
>>>>>>> d002c15c7694baba74eff738a19a81c37af19c79
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 2dvh;
`;

<<<<<<< HEAD
=======
/* 2. 질문 및 입력 폼 전체를 감싸는 중앙 영역 */
>>>>>>> d002c15c7694baba74eff738a19a81c37af19c79
export const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  flex: 1; /* 남은 공간을 확보해서 푸터 배경을 맨 밑으로 밀어냅니다 */
  margin-top: 4dvh;
  margin-bottom: 2dvh;
`;

export const Title = styled.h1`
  color: #333333;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.4;
  margin: 0 0 4dvh 0;
  text-align: left;
`;

/* 입력 폼 공통 박스 설정 */
export const InputWrapper = styled.div`
  position: relative; /* 드롭다운 메뉴 정렬의 절대 기준점 */
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5dvh;
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
`;

export const Required = styled.span`
  color: #ff4d4d;
  margin-left: 2px;
`;

export const SubLabel = styled.p`
  font-size: 12px;
  color: #666666;
  margin: 0.5dvh 0 1dvh 0;
  line-height: 1.3;
`;

export const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 0 50px 0 16px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 15px;
  outline: none;
  box-sizing: border-box;
  
  &:focus {
    border: 1px solid #3b7d5a;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 💡 핵심: maxRows에 맞춰 높이가 조절되며 내부 스크롤이 적용되는 회색 드롭다운 */
export const Dropdown = styled.div`
  position: absolute;
  top: 96px; /* Label + SubLabel + Input 높이를 고려한 고정 낙하 위치 */
  left: 0;
  right: 0;
  background-color: #dddddd; /* 시안 고유의 회색 바탕 */
  border-radius: 0 0 10px 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
  
  /* 리스트 항목당 대략 44px 높이 기준 계산 */
  max-height: ${({ $maxRows }) => $maxRows * 44}px;
  overflow-y: auto;

  /* 스크롤바 디자인 */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888888;
    border-radius: 4px;
  }
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #cccccc;
  box-sizing: border-box;

  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #d0d0d0;
  }
`;

export const ItemName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  margin-right: 8px;
`;

export const ItemGroup = styled.span`
  font-size: 12px;
  color: #666666;
`;

<<<<<<< HEAD
=======
/* 3. 푸터 영역 (배경지 + 버튼 합체 구조 유지) */
>>>>>>> d002c15c7694baba74eff738a19a81c37af19c79
export const FooterBgSection = styled.div`
  position: relative;
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const BgImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const NextButton = styled.button`
  position: absolute;
  bottom: 12dvh; /* OnboardingGrade 버튼과 정확히 동일한 공중부양 위치 */
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