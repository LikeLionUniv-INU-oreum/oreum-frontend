import styled from 'styled-components';
import OnboardingBackground from '../assets/images/OnboardingBackground.png';

export const PageContainer = styled.div`
  width: 100%;
  //max-width: 420px; /* 모바일 프레임 규격 스타일링 */
  min-height: 100dvh;
  margin: 0 auto;
  background-image: url(${OnboardingBackground});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center -30px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  position: relative;
  font-family: 'Noto Sans KR', sans-serif;
  padding-bottom: 80px; /* 하단 바 영역 확보 */
`;

export const ContentWrapper = styled.div`
  padding: 20px;
`;

export const HeaderSection = styled.div`
  margin-top: 1dvh;
  margin-bottom: 25px;
  padding: 15px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #2b7a54; /* 짙은 초록색 메인 테마 */
  margin: 0 0 8px 0;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #444;
  line-height: 1.4;
  margin: 0;
  border-bottom: 2px solid #b0b5b2; 
  padding-bottom: 6px;
`;

export const FilterSection = styled.div`
  //background: rgba(255, 255, 255, 0.85);
  //border-radius: 20px;
  padding: 15px;
  //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterLabel = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 6px 14px;
  border-radius: 20px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#3b7d5a' : '#b0b5b2')};
  color: white;
  transition: background-color 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const ListContainer = styled.div`
  background-color: #eaf4ee;
  border-radius: 24px;
  padding: 15px;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 0 5px;
`;

export const ListTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #111;
  margin: 0;
`;

export const SortButtonGroup = styled.div`
  display: flex;
  gap: 6px;
`;

export const SortButton = styled.button`
  padding: 4px 10px;
  border-radius: 12px;
  border: none;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#3e7e5a' : '#b0b5b2')};
  color: white;
`;

export const CourseCard = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #111;
  padding: 15px;
  margin-bottom: 12px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.03);
  transition: transform 0.1s;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    transform: scale(1.01);
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;

export const CardTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

export const Stars = styled.span`
  color: #4a755e;
  font-size: 14px;
`;

export const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: white;
  border: 1px solid ${(props) => (props.liked ? '#ff4d4d' : '#ccc')};
  border-radius: 12px;
  padding: 3px 8px;
  font-size: 11px;
  cursor: pointer;
  font-weight: bold;
  color: ${(props) => (props.liked ? '#ff4d4d' : '#555')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
`;

export const HeartIcon = styled.span`
  color: ${(props) => (props.liked ? '#ff4d4d' : '#b0b5b2')};
  font-size: 12px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InfoRow = styled.div`
  font-size: 13px;
  color: #111;
`;

export const InfoLabel = styled.span`
  font-weight: bold;
  display: inline-block;
  width: 65px;
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