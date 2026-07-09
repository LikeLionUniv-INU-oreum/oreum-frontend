import * as S from './Settings.styles.js';
import BottomNav from '../components/common/BottomNav.jsx';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import rightArrow from '../assets/icons/RightArrow.svg';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <S.BackIcon onClick={() => navigate(-1)}>←</S.BackIcon>
          <S.EgLogo src={egLogo} />
        </S.Header>

        <h1>김유니</h1>
        <div>인천대학교 무역학부 / 2학년</div>
        <div>1234@inu.ac.kr</div>

        <S.Divider />

        <S.SelectMenu onClick={() => alert('준비 중입니다 ⛰️')}>
          <S.MenuName>학적 변경</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>
        <S.SelectMenu onClick={() => alert('준비 중입니다 ⛰️')}>
          <S.MenuName>희망 직무 변경</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>
        <S.SelectMenu onClick={() => alert('준비 중입니다 ⛰️')}>
          <S.MenuName>비밀번호 재설정</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>
        <S.SelectMenu onClick={() => navigate('/')}>
          <S.MenuName style={{ color: '#FA1818' }}>로그아웃</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>
      </S.MainContent>
      <BottomNav />
    </S.Container>
  );
}
