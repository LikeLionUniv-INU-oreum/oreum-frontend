import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 430px; /* 모바일 뷰 기준 */
  min-height: 100vh;
  background-color: #3b7d5a; /* 상단 초록색 배경 */
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: sans-serif;
  margin: 0 auto;
`;

export const Header = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  background-color: #ffffff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 30px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: none;
  border: none;
  color: #a0a0a0;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

export const Title = styled.h2`
  color: #466b53;
  font-size: 26px;
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
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
  box-sizing: border-box;
`;

export const AuthorName = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 6px;
`;

export const RatingStars = styled.div`
  color: #61876e; /* 이미지의 초록색 별 색상 */
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
  background-color: #eff7f2; /* 팁 카드의 옅은 연두색 배경 */
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
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
    word-break: keep-all; /* 한글 줄바꿈 예쁘게 처리 */
  }
`;

export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  //max-width: 420px; /* 전체 페이지 max-width와 똑같이 맞춰서 깨짐을 방지합니다 */
  z-index: 100; /* 카드나 다른 요소 뒤로 숨지 않도록 위로 올립니다 */
`;