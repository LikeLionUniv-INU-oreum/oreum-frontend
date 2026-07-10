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
import { login } from '../api/auth.js';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  /** 로그인 API 연동 함수 */
  const handleLoginSubmit = async () => {
    if (!email || !password) {
      setErrorMessage('이메일과 비밀번호를 모두 입력해주세요.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const data = await login(email, password);

      if (data.isSuccess) {
        // 토큰 저장
        const token = data.result?.accessToken;
        if (token) localStorage.setItem('accessToken', token);

        const userNickname = data.result?.nickname || '회원';
        alert(`${userNickname}님 환영합니다 ⛰️`);
        navigate('/home');
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      const errorMsg =
        error.response?.data?.message ||
        '서버와 통신할 수 없습니다. 다시 시도해주세요.';
      setErrorMessage(errorMsg);
    } finally {
      setIsLoading(false);
    }
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

      <S.Input
        type="email"
        placeholder="대학 웹메일 주소를 입력해주세요."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isLoading}
      />

      <S.InputWrapper>
        <S.Input
          type={showPassword ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
          style={{ width: '100%', marginBottom: 0 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <S.IconButton type="button" onClick={togglePasswordVisibility}>
          {/* showPassword 상태에 따라 다른 아이콘 표기 */}
          {showPassword ? '🙉' : '🙈'}
        </S.IconButton>
      </S.InputWrapper>

      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>

      <LoginButton
        type="submit"
        style={{ marginBottom: '16px' }}
        disabled={isLoading}
        onClick={handleLoginSubmit}
      >
        {isLoading ? '로그인 중...' : '로그인'}
      </LoginButton>

      <S.SignUpText>
        등록된 계정이 없으신가요?{' '}
        <span onClick={handleSignUpClick}>회원가입</span>
      </S.SignUpText>
    </S.Container>
  );
}
