import styled from 'styled-components';

const categoryThemes = {
  자격증: { tagBg: '#57E094', tagColor: 'black', cardBg: '#EAF8E7' },
  대외활동: { tagBg: '#FFF795', tagColor: 'black', cardBg: '#fffbc7' },
  교내: { tagBg: '#d0ebff', tagColor: 'black', cardBg: '#f1f9ff' },
  인턴: { tagBg: '#eebefa', tagColor: 'black', cardBg: '#fdf4ff' },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  margin: 0 auto;
  position: relative;
  overflow-x: hidden;
`;

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  padding: 20px 30px;
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TopHeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 20px;
`;

export const TitleArea = styled.div`
  h2 {
    font-size: 24px;
    color: #3b7d5a;
    margin: 0;
    font-weight: 900;
  }

  p {
    font-size: 16px;
    margin: 0;
    font-weight: bold;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #3b7d5a;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    font-size: 10px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  width: 110px;
  overflow: hidden;
  background-color: #f3f3f3;

  div {
    padding: 10px;
    font-size: 13px;
    cursor: pointer;
    text-align: center;
    &:hover {
      background: #f5f5f5;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #acacac;
  margin: 20px 0 20px 0;
`;

/* 내 코스 섹션 영역 */
export const CourseSection = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  h3 {
    font-size: 20px;
    color: #3b7d5a;
    margin: 0;
    font-weight: 900;
  }
  p {
    font-size: 12px;
    color: black;
    margin: 0;
  }
`;

export const AddBtn = styled.button`
  background: #3b7d5a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

export const CategoryGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const CategoryTag = styled.span`
  background-color: ${(props) => categoryThemes[props.category]?.tagBg || '#e0e0e0'};
  color: ${(props) => categoryThemes[props.category]?.tagColor || '#666'};
  font-size: 12px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const TaskCard = styled.div`
  background: ${(props) => categoryThemes[props.category]?.cardBg || '#EAF8E7'};
  border-radius: 4px;
  padding: 10px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border: 1px solid transparent;

  .task-left {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
  }

  .task-right {
    display: flex;
    gap: 6px;
    font-size: 16px;
    cursor: pointer;
  }
`;

/* 데이터가 비었을 때 보여주는 placeholder */
export const EmptyTaskPlaceholder = styled.div`
  background: #fafafa;
  border: 1px dashed #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  text-align: center;
  font-size: 13px;
  color: #bbb;
`;

export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
`;

export const MountainBox = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;

export const HomeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: column;

  div {
    font-size: 13px;
    color: #707070;
  }

  span {
    font-size: 20px;
    font-weight: 900;
  }
`;

export const HomeMountain = styled.img`
  width: 100%;
  height: auto;
`;

export const ActionIcon = styled.img`
  width: 22px;
  height: 22px;
  object-fit: contain;
  cursor: pointer;
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const StatusFlag = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const MountainContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding-bottom: 20px;
`;

export const GaugeContainer = styled.div`
  position: absolute;
  left: 16px;
  bottom: 50px;
  height: 65%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  width: 35px;
  z-index: 2;
`;

export const GaugeLine = styled.div`
  width: 14px;
  height: 2px;
  background-color: #000;
`;

export const Indicator = styled.div`
  position: absolute;
  left: 20px;

  bottom: ${(props) => 100 - props.topPercent}%;
  transform: translateY(50%);

  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-right: 10px solid #c93b3b;

  transition: bottom 0.5s ease-in-out;
`;
