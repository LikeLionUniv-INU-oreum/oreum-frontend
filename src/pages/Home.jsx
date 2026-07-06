import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import settings from '../assets/icons/Settings.svg';
import homeMountain from '../assets/images/HomeMountain.jpg';
import BottomNav from '../components/common/BottomNav.jsx';
import completeFlag from '../assets/icons/CompleteFlag.svg';
import refresh from '../assets/icons/Refresh.svg';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainContent>
        <Header>
          <EgLogo src={egLogo} />
          <Settings src={settings} onClick={() => navigate('/settings')} />
        </Header>

        <GreetingText>
          김유니님, 오늘도
          <br />
          <span style={{ color: '#3B7D5A' }}>오름을 향해 한 걸음!</span>
        </GreetingText>

        <MountainBox onClick={() => navigate('/basecamp')}>
          <HomeInfo>
            <InfoText>
              <div>현재 고도</div>
              <span>2,550M</span>
            </InfoText>
            <InfoText style={{ textAlign: 'right' }}>
              <div>[해외영업] 산맥</div>
              <span>상위 16%</span>
            </InfoText>
          </HomeInfo>
          <HomeMountain src={homeMountain} />
        </MountainBox>

        <GreetingText style={{ fontWeight: '700', fontSize: '20px' }}>
          ⛰️ [해외영업] 산맥의 학우들이
          <br />
          최근에 완료한 코스
        </GreetingText>

        <CourseBox>
          <RefreshBtn src={refresh} />
          <div className="list-item">
            <img src={completeFlag} />
            <span>토익 850점 이상</span>
          </div>

          <div className="list-item">
            <img src={completeFlag} />
            <span>무역영어 자격증</span>
          </div>

          <div className="list-item">
            <img src={completeFlag} />
            <span>OO 연합 물류 학회 수료</span>
          </div>
        </CourseBox>
      </MainContent>

      <BottomNav />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 22px;
  padding: 20px 30px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const EgLogo = styled.img`
  width: 110px;
  height: auto;
`;

const Settings = styled.img`
  width: 20px;
  height: auto;
  cursor: pointer;
`;

const GreetingText = styled.div`
  font-size: 24px;
  font-weight: 900;
`;

const MountainBox = styled.div`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
`;

const HomeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0 20px;
`;

const InfoText = styled.div`
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

const HomeMountain = styled.img`
  width: 100%;
  height: auto;
`;

const CourseBox = styled.div`
  position: relative;
  width: 100%;
  background-color: #e5f8ee;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-shrink: 0;

  .list-item {
    display: flex;
    align-items: center;
    gap: 12px;

    img {
      width: 22px;
      height: auto;
    }

    span {
      font-size: 16px;
      font-weight: 700;
      color: #111111;
    }
  }
`;

const RefreshBtn = styled.img`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 16px;
  height: auto;
  cursor: pointer;
`;
