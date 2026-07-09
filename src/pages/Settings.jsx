import styled from 'styled-components';
import BottomNav from '../components/common/BottomNav.jsx';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import rightArrow from '../assets/icons/RightArrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainContent>
        <Header>
          <BackIcon onClick={() => navigate(-1)}>←</BackIcon>
          <EgLogo src={egLogo} />
        </Header>

        <h1>김유니</h1>
        <div>인천대학교 무역학부 / 2학년</div>
        <div>1234@inu.ac.kr</div>

        <Divider />

        <SelectMenu onClick={() => alert('준비 중입니다 ⛰️')}>
          <MenuName>학적 변경</MenuName>
          <RightArrow src={rightArrow} />
        </SelectMenu>
        <SelectMenu onClick={() => alert('준비 중입니다 ⛰️')}>
          <MenuName>희망 직무 변경</MenuName>
          <RightArrow src={rightArrow} />
        </SelectMenu>
        <SelectMenu onClick={() => alert('준비 중입니다 ⛰️')}>
          <MenuName>비밀번호 재설정</MenuName>
          <RightArrow src={rightArrow} />
        </SelectMenu>
        <SelectMenu onClick={() => navigate('/')}>
          <MenuName style={{ color: '#FA1818' }}>로그아웃</MenuName>
          <RightArrow src={rightArrow} />
        </SelectMenu>
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
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

const BackIcon = styled.div`
  position: absolute;
  left: 0;
  font-size: 24px;
  color: #707070;
  cursor: pointer;
`;

const EgLogo = styled.img`
  width: 110px;
  height: auto;
`;

const Divider = styled.hr`
  border: none;
  height: 1.5px;
  background-color: #acacac;
  width: 100%;
  margin: 30px auto;
`;

const SelectMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;

const MenuName = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

const RightArrow = styled.img`
  width: 5%;
`;
