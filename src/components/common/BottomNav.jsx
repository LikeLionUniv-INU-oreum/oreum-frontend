import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import homeIcon from '../../assets/icons/HomeIcon.svg';
import campIcon from '../../assets/icons/CampIcon.svg';
import searchIcon from '../../assets/icons/SearchIcon.svg';
import mypageIcon from '../../assets/icons/MypageIcon.svg';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const checkIsActive = (path) => location.pathname === path; // 경로 확인 함수

  return (
    <NavContainer>
      <NavItem onClick={() => navigate('/home')}>
        <Icon
          src={homeIcon}
          className={checkIsActive('/home') ? 'active' : ''}
        />
        <NavText className={checkIsActive('/home') ? 'active' : ''}>홈</NavText>
      </NavItem>

      <NavItem onClick={() => navigate('/basecamp')}>
        <Icon
          src={campIcon}
          className={checkIsActive('/basecamp') ? 'active' : ''}
        />
        <NavText className={checkIsActive('/basecamp') ? 'active' : ''}>
          베이스캠프
        </NavText>
      </NavItem>

      <NavItem onClick={() => navigate('/explore')}>
        <Icon
          src={searchIcon}
          className={checkIsActive('/explore') ? 'active' : ''}
        />
        <NavText className={checkIsActive('/explore') ? 'active' : ''}>
          탐색
        </NavText>
      </NavItem>

      <NavItem onClick={() => navigate('/mypage')}>
        <Icon
          src={mypageIcon}
          className={checkIsActive('/mypage') ? 'active' : ''}
        />
        <NavText className={checkIsActive('/mypage') ? 'active' : ''}>
          마이페이지
        </NavText>
      </NavItem>
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 100%;
  height: 68px;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
`;

const Icon = styled.img`
  width: 36px;
  height: auto;

  filter: grayscale(100%) opacity(40%);
  transition: all 0.2s ease-in-out;

  &.active {
    filter: none;
  }
`;

const NavText = styled.span`
  font-size: 14px;
  color: #888888;
  font-weight: 500;

  &.active {
    color: #5d986a;
    font-weight: 700;
  }
`;
