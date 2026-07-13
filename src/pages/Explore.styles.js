import styled from 'styled-components';
import OnboardingBackground from '../assets/images/OnboardingBackground.png';

export const PageContainer = styled.div`
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  background-image: url(${OnboardingBackground});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center -30px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ContentWrapper = styled.div`
  padding: 20px;
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const HeaderSection = styled.div`
  margin-top: 1dvh;
  margin-bottom: 10px;
  padding: 15px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 900;
  color: #3b7d5a;
  margin: 0 0 8px 0;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
  margin: 0;
  border-bottom: 2px solid #acacac;
  padding-bottom: 14px;
`;

export const FilterSection = styled.div`
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
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 20px;
  border: none;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#3b7d5a' : '#b0b5b2')};
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
  font-weight: 800;
  color: #111;
  margin: 0;
`;

export const SortButtonGroup = styled.div`
  display: flex;
  gap: 6px;
`;

export const SortButton = styled.button`
  padding: 6px 10px;
  border-radius: 12px;
  border: none;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#3e7e5a' : '#b0b5b2')};
  color: white;
`;

export const CourseCard = styled.div`
  background-color: white;
  border-radius: 16px;
  border: 1px solid #111;
  padding: 15px;
  margin-bottom: 6px;
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
  align-items: center;
  margin-bottom: 10px;
  gap: 12px;
`;

export const CardTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #000;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Stars = styled.span`
  color: #4a755e;
  font-size: 14px;
  letter-spacing: 1px;
  text-align: right;
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
  width: 50px;
`;

export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
`;

export const MoreButton = styled.button`
  width: 100%;
  padding: 14px;
  margin-top: 16px;
  border-radius: 8px;
  background-color: #eaf4ee;
  border: none;
  color: #555;
  font-weight: bold;
  cursor: pointer;
`;
