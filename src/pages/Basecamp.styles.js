import styled from 'styled-components';

// 카테고리별 테마 색상 지정 (자격증, 대외활동, 교내, 인턴)
const categoryThemes = {
  자격증: { tagBg: '#c3dec3', tagColor: '#2b5c3d', cardBg: '#f0f6f2' },
  대외활동: { tagBg: '#fff3bf', tagColor: '#e67e22', cardBg: '#fffbeb' },
  교내: { tagBg: '#d0ebff', tagColor: '#1c7ed6', cardBg: '#f1f9ff' },
  인턴: { tagBg: '#eebefa', tagColor: '#ae3ec9', cardBg: '#fdf4ff' },
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f6f4;
  padding: 20px 16px;
  min-height: 100vh;
  box-sizing: border-box;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  position: relative;
`;

export const MainCard = styled.div`
  background: white;
  width: 100%;
  border-radius: 28px;
  padding: 24px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  margin-bottom: 24px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`;

export const TitleSection = styled.div`
  .main-title {
    font-size: 24px;
    font-weight: bold;
    color: #2b5c3d;
    margin: 0 0 4px 0;
  }
  .sub-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin: 0;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  z-index: 10;
`;

export const DropdownButton = styled.button`
  background: #f4f6f4;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 12px;
  color: #3b7d5a;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  width: 100px;
`;

export const DropdownItem = styled.div`
  padding: 8px 12px;
  font-size: 12px;
  color: #555;
  cursor: pointer;
  &:hover {
    background-color: #f4f6f4;
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  .label { font-size: 12px; color: #999; margin-bottom: 4px; }
  .value { font-size: 20px; font-weight: bold; color: #111; }
  .right { text-align: right; }
`;

export const MountainWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 360 / 260;
  background-image: url(${props => props.bgImage});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const AltitudeScale = styled.div`
  position: absolute;
  left: 10px;
  top: 30px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  span {
    width: 12px;
    height: 1.5px;
    background-color: #333;
    &:nth-child(5n) { width: 18px; }
  }
`;

export const ActivePointer = styled.div`
  position: absolute;
  left: 32px;
  top: ${props => props.top || '50%'};
  color: #c94a4a;
  font-size: 12px;
  transform: translateY(-50%);
`;

export const StageButton = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  bottom: ${props => props.bottom};
  left: ${props => props.left};
  transform: translate(-50%, 50%);
  background-color: ${props => props.isActive ? '#FFD43B' : '#BBBBBB'};
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.15);
  transition: all 0.3s ease;
`;

export const FlagIcon = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 86%;
  left: 48%;
  transform: translate(-50%, -100%);
  background-color: transparent;
  
  /* 100% 달성 상태(isActive)에 따라 노랑/회색 토글 */
  filter: ${props => props.isActive
    ? 'none'
    : 'drop-shadow(0px 0px 0px rgba(80, 80, 80, 1)) grayscale(100%) brightness(55%) contrast(80%)'};
  mix-blend-mode: ${props => props.isActive ? 'normal' : 'luminosity'};
  
  z-index: 5;
  pointer-events: none;
`;

/* 내 코스 섹션 영역 */
export const CourseSection = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  h3 { font-size: 20px; color: #2b5c3d; margin: 0; }
  p { font-size: 12px; color: #777; margin: 4px 0 0 0; }
`;

export const AddBtn = styled.button`
  background: #3b7d5a;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
`;

export const CategoryGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

export const CategoryTag = styled.span`
  /* props로 전달받은 카테고리 테마 색상 적용 */
  background-color: ${props => categoryThemes[props.category]?.tagBg || '#e0e0e0'};
  color: ${props => categoryThemes[props.category]?.tagColor || '#666'};
  font-size: 11px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  display: inline-block;
  margin-bottom: 10px;
`;

export const TaskCard = styled.div`
  /* ⚠️ 완료 여부(isCompleted)와 상관없이 항상 카테고리 고유의 배경색을 유지합니다. */
  background: ${props => categoryThemes[props.category]?.cardBg || '#f9f9f9'};
  border-radius: 4px; /* 시안과 같은 플랫한 사각 라운드 형태 */
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border: 1px solid transparent;
  
  /* 완료되었을 때 카드 전체에 살짝 투명도를 주어 처리된 느낌을 줍니다 (원하지 않으면 이 줄은 지우셔도 됩니다) */
  opacity: ${props => props.isCompleted ? 0.65 : 1};
  
  .task-left {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 15px;
    font-weight: 500;
    color: #333;
    
    /* ⚠️ 완료 시 글자에 줄이 쫙 그어지도록 설정 */
    text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
  }
  
  .task-right {
    display: flex;
    gap: 14px;
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
  max-width: 430px;
  z-index: 100;
`;