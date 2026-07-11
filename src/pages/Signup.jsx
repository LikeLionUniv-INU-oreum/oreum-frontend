import { useState, useEffect } from 'react';
import * as S from './Signup.styles';
import { Header, BackIcon, EgLogo } from './Settings.styles.js';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import { useNavigate } from 'react-router-dom';
import { sendEmailCode, verifyEmailCode, signup } from '../api/auth.js';

export default function Signup() {
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false); // 인증번호 전송 로딩
  const [isConfirming, setIsConfirming] = useState(false); // 인증번호 확인 로딩

  // 사용자가 입력하는 데이터
  const [formData, setFormData] = useState({
    email: '',
    code: '',
    password: '',
    nickname: '',
  });

  // 화면에 띄울 텍스트 메시지
  const [messages, setMessages] = useState({
    email: '',
    code: '',
    password: '',
    nickname: '',
  });

  // 메시지 표시 여부
  const [uiState, setUiState] = useState({
    email: false,
    code: false,
    password: false,
    nickname: false,
  });

  // 타이머 관련 상태
  const [timer, setTimer] = useState({
    timeLeft: 0,
    isActive: false,
  });

  /** 입력 변경 함수 */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 타이머 로직
  useEffect(() => {
    let intervalId;
    if (timer.isActive && timer.timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimer((prev) => ({ ...prev, timeLeft: prev.timeLeft - 1 }));
      }, 1000);
    } else if (timer.timeLeft === 0) {
      setTimer((prev) => ({ ...prev, isActive: false }));
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [timer.isActive, timer.timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  /** 이메일 인증번호 전송 API */
  const handleSendCode = async () => {
    setIsSending(true);

    if (!formData.email.includes('@')) {
      setMessages((prev) => ({
        ...prev,
        email: '유효한 대학 웹메일 주소를 입력해주세요.',
      }));
      setUiState((prev) => ({ ...prev, email: true }));
      return;
    }

    try {
      const data = await sendEmailCode(formData.email);

      if (data.isSuccess) {
        setTimer({ timeLeft: 180, isActive: true });
        setMessages((prev) => ({ ...prev, email: data.message }));
        setUiState((prev) => ({ ...prev, email: true }));
      } else {
        setMessages((prev) => ({ ...prev, email: data.message }));
        setUiState((prev) => ({ ...prev, email: false }));
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || '서버와의 통신에 실패했습니다.';
      setMessages((prev) => ({ ...prev, email: errorMsg }));
      setUiState((prev) => ({ ...prev, email: false }));
    } finally {
      setIsSending(false);
    }
  };

  /** 이메일 인증번호 확인 API */
  const handleCodeConfirm = async () => {
    setIsConfirming(true);

    try {
      const data = await verifyEmailCode(formData.email, formData.code);

      if (data.isSuccess) {
        setMessages((prev) => ({ ...prev, code: data.message }));
        setUiState((prev) => ({ ...prev, code: true }));
      } else {
        setMessages((prev) => ({ ...prev, code: data.message }));
        setUiState((prev) => ({ ...prev, code: false }));
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || '서버와의 통신에 실패했습니다.';
      setMessages((prev) => ({ ...prev, code: errorMsg }));
      setUiState((prev) => ({ ...prev, code: false }));
    } finally {
      setIsConfirming(false);
    }
  };

  /** 회원가입 API */
  const completeSignup = async () => {
    try {
      const data = await signup(formData.email, formData.password, formData.nickname);

      if (data.isSuccess) {
        alert('회원가입이 완료되었습니다 ⛰️');
        navigate('/login');
      } else {
        setMessages((prev) => ({ ...prev, code: data.message }));
        setUiState((prev) => ({ ...prev, code: true }));
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || '서버와의 통신에 실패했습니다.';
      setMessages((prev) => ({ ...prev, code: errorMsg }));
      setUiState((prev) => ({ ...prev, code: true }));
    }
  };

  const isFormValid =
    formData.email.includes('@') &&
    formData.code.length > 3 &&
    formData.password.length > 7 &&
    formData.nickname.length > 1;

  return (
    <S.Container>
      <Header>
        <BackIcon onClick={() => navigate(-1)}>←</BackIcon>
        <EgLogo src={egLogo} />
      </Header>

      <S.ContentWrapper>
        {/* 이메일 입력 */}
        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>대학 웹메일 주소</S.Text>
            <S.SmallButton type="button" onClick={handleSendCode} disabled={isSending}>
              {isSending ? '전송 중...' : '인증번호 전송'}
            </S.SmallButton>
          </S.LabelContainer>
          <S.Input
            name="email"
            type="email"
            placeholder="example@inu.co.kr"
            value={formData.email}
            onChange={handleChange}
          />
          <S.MessageContainer>
            <S.ErrorMessage $show={uiState.email}>{messages.email}</S.ErrorMessage>
            {timer.isActive && <S.TimerText>{formatTime(timer.timeLeft)}</S.TimerText>}
          </S.MessageContainer>
        </S.InputGroup>

        {/* 인증번호 입력 */}
        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>인증번호</S.Text>
            <S.SmallButton type="button" onClick={handleCodeConfirm} disabled={isConfirming}>
              {isConfirming ? '확인 중...' : '인증번호 확인'}
            </S.SmallButton>
          </S.LabelContainer>
          <S.Input name="code" placeholder="숫자 4자리" value={formData.code} onChange={handleChange} />
          <S.MessageContainer>
            <S.ErrorMessage $show={uiState.code}>{messages.code}</S.ErrorMessage>
          </S.MessageContainer>
        </S.InputGroup>

        {/* 비밀번호 입력 */}
        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>비밀번호 등록</S.Text>
          </S.LabelContainer>
          <S.Input
            name="password"
            type="password"
            placeholder="8자리 이상"
            value={formData.password}
            onChange={handleChange}
          />
          <S.MessageContainer>
            <S.ErrorMessage $show={uiState.password}>{messages.password}</S.ErrorMessage>
          </S.MessageContainer>
        </S.InputGroup>

        {/* 닉네임 입력 */}
        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>닉네임</S.Text>
          </S.LabelContainer>
          <S.Input name="nickname" placeholder="2~15자" value={formData.nickname} onChange={handleChange} />
          <S.MessageContainer>
            <S.ErrorMessage $show={uiState.nickname}>{messages.nickname}</S.ErrorMessage>
          </S.MessageContainer>
        </S.InputGroup>

        <S.LoginButton disabled={!isFormValid} onClick={completeSignup}>
          회원가입
        </S.LoginButton>
      </S.ContentWrapper>
    </S.Container>
  );
}
