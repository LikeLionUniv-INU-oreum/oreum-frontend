import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${(props) => props.bgImage});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top center;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  box-sizing: border-box;
`;

export const ContentArea = styled.div`
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

// 상단 프로필 카드
export const ProfileCard = styled.div`
  background: white;
  width: 100%;
  border-radius: 24px;
  border: 1.5px solid #3b7d5a;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 15dvh;
  margin-bottom: 8px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: -55px;
  margin-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  top: 43px;
  width: 80px;
  height: 80px;
  margin-top: -50px;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: white;
  border: 1px solid #c3dec3;
  color: #3b7d5a;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProfileInfo = styled.div`
  margin-top: 45px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h2`
  margin: 0;
  font-size: 22px;
`;

export const UserMajor = styled.span`
  font-size: 14px;
  font-weight: 500;
  margin-top: 4px;
`;

export const UserStats = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 6px;
`;

export const BadgeSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BadgeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeTitle = styled.span`
  font-size: 13px;
  color: #666;
  margin-bottom: 6px;
`;

export const BadgeCount = styled.span`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #ddd;
`;

// 메인 콘텐츠 카드 (통계 영역)
export const MainContentCard = styled.div`
  background: white;
  width: 100%;
  //max-width: 360px;
  border-radius: 24px;
  border: 1.5px solid #000;
  padding: 20px 16px;
  box-sizing: border-box;
  margin-bottom: 8px;
`;

export const MainTitle = styled.h3`
  font-size: 18px;
  text-align: center;
  margin: 0 0 16px 0;
`;

export const RankBanner = styled.div`
  background-color: #f5fdee;
  border-radius: 14px;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
`;

export const RankLeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  border-right: 1px solid #e2ece6;
  padding-right: 12px;
  flex-shrink: 0;
`;

export const RankLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 12px;

  .title {
    font-size: 11px;
    font-weight: 700;
    color: #666;
  }

  .percent {
    font-size: 16px;
    font-weight: bold;
    color: #3b7d5a;
  }
`;

export const BannerIcon = styled.img`
  width: 32px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const RankText = styled.p`
  margin: 0;
  font-size: 12px;
  color: #555;
  text-align: center;
  word-break: keep-all;
`;

export const StatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`;

export const StatTitle = styled.h4`
  margin: 0;
  font-size: 13px;
  font-weight: bold;
`;

export const StatLegend = styled.div`
  font-size: 10px;
  display: flex;
  gap: 8px;
  span:nth-child(1) {
    color: #3b7d5a;
  }
  span:nth-child(2) {
    color: #999999;
  }
`;

export const StatList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const StatItemWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  &:last-child {
    border-bottom: none;
  }
`;

export const StatRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  cursor: pointer;
`;

export const StatNameBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 120px;

  .icon {
    font-size: 16px;
  }

  .title {
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
`;

export const GraphContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 10px;
  position: relative;
`;

export const ProgressBar = styled.div`
  height: 8px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}%;
  border-radius: 4px;
  position: relative;

  &::after {
    content: '${(props) => props.label || ''}';
    position: absolute;
    right: -30px;
    top: -3px;
    font-size: 9px;
    color: #666;
  }
`;

export const CountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  .count {
    font-size: 13px;
    color: #3b7d5a;
    font-weight: bold;
  }
`;

export const ArrowIcon = styled.span`
  font-size: 12px;
  color: #999;
  display: inline-block;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
`;

// 아코디언 드롭다운 상세 스타일
export const DropdownContent = styled.div`
  background-color: #fafafa;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DropdownItem = styled.div`
  font-size: 11px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 6px;
  .flag {
    font-size: 11px;
  }
`;

// 완등을 기다리는 코스 카드
export const CourseCard = styled.div`
  background: white;
  width: 100%;
  border-radius: 14px;
  border: 1.5px solid #000;
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
`;

export const CourseHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
`;

export const CourseTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
`;

export const CourseDropdownList = styled.div`
  border-top: 1px solid #eee;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow-y: auto;
  background-color: #fff;
`;

export const CourseDropdownItem = styled.div`
  font-size: 12px;
  color: #555;
  display: flex;
  align-items: center;
  gap: 8px;
  .flag {
    color: #999;
  }
`;

export const ListIcon = styled.img`
  width: 14px; /* 디자인에 맞춰 적절한 너비 지정 */
  height: 14px; /* 디자인에 맞춰 적절한 높이 지정 */
  object-fit: contain;
  flex-shrink: 0; /* 텍스트가 길어져도 이미지가 찌그러지지 않게 방지 */
`;

export const StatIcon = styled.img`
  width: 20px; /* 시안 파일 크기에 맞춘 너비 설정 */
  height: 20px; /* 시안 파일 크기에 맞춘 높이 설정 */
  object-fit: contain;
  flex-shrink: 0; /* 레이아웃이 좁아져도 이미지가 구겨지지 않게 방지 */
`;
