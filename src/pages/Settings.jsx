import * as S from './Settings.styles.js';
import BottomNav from '../components/common/BottomNav.jsx';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import rightArrow from '../assets/icons/RightArrow.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../api/user.js';

export default function Settings() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);

  /** 설정창 유저 정보 조회 api */
  const fetchUserInfo = async () => {
    try {
      const data = await getUserInfo();
      if (data.isSuccess) setUserInfo(data.result);
      console.log(data.result);
    } catch (error) {
      console.error('유저 정보 로딩 실패:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  if (!userInfo) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <S.BackIcon onClick={() => navigate(-1)}>←</S.BackIcon>
          <S.EgLogo src={egLogo} />
        </S.Header>

        <h1>{userInfo.nickname}</h1>
        <div>
          {userInfo.universityName} / {userInfo.majorName} {userInfo.academicStatusName}
        </div>
        <div>{userInfo.universityEmail}</div>

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
