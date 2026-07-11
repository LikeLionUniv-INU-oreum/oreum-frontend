import styled from 'styled-components';

export const Container = styled.div`
  background-color: #3b7d5a;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const BackIcon = styled.div`
  position: absolute;
  left: 0;
  margin-left: 20px;
  font-size: 24px;
  color: #ffffff;
  cursor: pointer;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-y: auto;

  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  padding: 0px 20px 100px 20px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Title = styled.h2`
  color: #466b53;
  font-size: 24px;
  font-weight: 800;
  margin-bottom: 20px;
  text-align: center;
`;

/* 첫 번째 섹션: 작성자 정보 및 요약 카드 */
export const InfoCard = styled.div`
  width: 100%;
  background-color: #f1f3f1;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

export const AuthorName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 6px;
`;

export const RatingStars = styled.div`
  color: #61876e;
  font-size: 22px;
  margin-bottom: 15px;
  letter-spacing: 2px;
`;

export const InfoList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 15px;
`;

export const InfoItem = styled.div`
  font-size: 15px;
  color: #333333;
  font-weight: 500;

  .label {
    display: inline-block;
    width: 75px;
    font-weight: bold;
  }
`;

/* 두 번째 섹션: TIP 한마디 구역 */
export const TipTitle = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #466b53;
  margin-top: 25px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TipCard = styled.div`
  width: 100%;
  background-color: #eff7f2;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
`;

export const TipSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  .tip-label {
    font-size: 14px;
    color: #8c8c8c;
    font-weight: bold;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #222222;
    line-height: 1.45;
    font-weight: 600;
  }
`;

export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
`;
