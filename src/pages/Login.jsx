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
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState(''); // 이메일 저장
  const [password, setPassword] = useState(''); // 비번 저장
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메세지 저장
  const [isLoading, setIsLoading] = useState(false); // 중복 클릭 방지

  const handleSignUpClick = () => { // 회원가입 버튼 클릭 시
    navigate('/signup');
  };

  const togglePasswordVisibility = () => { // 비번 보이게 안보이게 여부
    setShowPassword(!showPassword);
  };

  // 2. 로그인 API 연동 함수
  const handleLoginSubmit = async () => {
    if (isLoading) return; // 이미 요청 중이면 실행 안 함
    setErrorMessage('');  // 이전 에러 메시지 초기화

    // 클라이언트 측 기본 유효성 검사
    if (!email) {
      setErrorMessage('이메일을 입력해주세요.');
      return;
    }
    if (!password) {
      setErrorMessage('비밀번호를 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);

      // 명세서에 따른 POST 요청 (Header, Body 세팅)
      const response = await axios.post(
        '/auth/login',
        {
          universityEmail: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // 명세서 상 성공 응답 데이터 구조 분해 할당
      const { result } = response.data;

      const { accessToken, userId, universityEmail, nickname, onboardingCompleted } = result;

      // 3. 토큰 및 유저 정보 로컬 스토리지 저장 (또는 Context/Recoil 등 전역 상태 저장 가능)
      localStorage.setItem('accessToken', `Bearer ${accessToken}`);

      const userInfo = { userId, universityEmail, nickname, onboardingCompleted };
      localStorage.setItem('user', JSON.stringify(userInfo));

      alert(`${nickname}님, 환영합니다!`);
      navigate('/'); // 로그인 완료 후 메인/홈 화면으로 이동

    } catch (error) {
      // 4. 에러 대응 (명세서의 Error Response 구조인 code, message 활용)
      if (error.response && error.response.data) {
        const errorData = error.response.data;

        // 백엔드가 명세서대로 {"code": "...", "message": "..."} 구조를 주면 해당 메시지를 띄움
        if (errorData.message) {
          setErrorMessage(errorData.message);
        } else {
          setErrorMessage('로그인 정보가 올바르지 않습니다.');
        }
      } else {
        // 서버 연결 자체가 안 되거나 네트워크 에러인 경우
        setErrorMessage('서버와 통신이 원활하지 않습니다. 네트워크를 확인해주세요.');
      }
    } finally {
      setIsLoading(false); // 로딩 종료
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

      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}

      <LoginButton
        type="button"
        onClick={handleLoginSubmit}
        style={{ marginBottom: '16px' }}
        disabled={isLoading}
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
