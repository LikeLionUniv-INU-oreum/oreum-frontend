import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 2dvh;
`;

export const MiddleOne = styled.div`
  width: 80%;
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

export const MiddleTwo = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  flex: 1;
  justify-content: flex-start;
  gap: 1.5dvh;
  margin-bottom: 2dvh; /* 하단 배경 일러스트 시작점과의 간격 확보 */
`;

export const SelectButton = styled.button`
  width: 100%;
  height: 54px;
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

export const FooterBgSection = styled.div`
  position: relative; /* 버튼 배치의 기준점 */
  width: 100%;
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
  position: absolute;
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 54px;

  color: #ffffff;
  background-color: ${({ disabled }) => (disabled ? '#a3a3a3' : '#3b7d5a')};

  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;
