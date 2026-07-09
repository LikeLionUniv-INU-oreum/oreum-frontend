import { useState } from 'react';
import * as S from './Login.styles';
import {
  BrandSection,
  Subtitle,
  LogoImg,
  Slogan,
  LoginButton,
} from './Intro.styles.js';
import krLogo from '../assets/images/OreumKrLogo.jpg';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <BrandSection $margin="50px 0">
        <Subtitle>나만의 학업 네비게이션</Subtitle>
        <LogoImg src={krLogo} />
        <Slogan>
          기록을 지도삼아
          <br />
          나만의 정상으로
        </Slogan>
      </BrandSection>

      <S.Input type="email" placeholder="대학 웹메일 주소를 입력해주세요." />

      <S.InputWrapper>
        <S.Input
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          style={{ width: '100%', marginBottom: 0 }} // wrapper 안에서 100% 차지하도록 설정
        />
        <S.IconButton type="button" onClick={togglePasswordVisibility}>
          {/* showPassword 상태에 따라 다른 아이콘 표기 */}
          {showPassword ? '🙉' : '🙈'}
        </S.IconButton>
      </S.InputWrapper>

      <S.ErrorMessage>이메일 형식이 잘못되었습니다.</S.ErrorMessage>

      <LoginButton style={{ marginBottom: '16px' }}>로그인</LoginButton>
      <S.SignUpText>
        등록된 계정이 없으신가요?{' '}
        <span onClick={handleSignUpClick}>회원가입</span>
      </S.SignUpText>
    </S.Container>
  );
}
