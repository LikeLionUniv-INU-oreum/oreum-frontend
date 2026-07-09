import { useState, useEffect } from 'react';
import * as S from './Signup.styles';
import { Header, BackIcon, EgLogo } from './Settings.styles.js';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');

  const [showEmailSuccess, setShowEmailSuccess] = useState(false);
  const [isCodeError, setIsCodeError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [isNicknameError, setIsNicknameError] = useState(false);

  const [timeLeft, setTimeLeft] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerActive(false);
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleSendCode = () => {
    setTimeLeft(180); // 3분 설정
    setIsTimerActive(true);
    setShowEmailSuccess(true);
    alert('인증번호가 전송되었습니다.');
  };

  const handleCodeConfirm = () => {
    alert('어~ 백엔드 연동해야돼~');
  };

  const isFormValid =
    email.includes('@') &&
    code.length > 0 &&
    password.length > 0 &&
    nickname.length > 0;

  const compeletesignup = () => {
    if (isFormValid) {
      alert('회원가입이 완료되었습니다 ⛰️');
      navigate('/');
    }
  };

  return (
    <S.Container>
      <Header>
        <BackIcon onClick={() => navigate(-1)}>←</BackIcon>
        <EgLogo src={egLogo} />
      </Header>

      <S.ContentWrapper>
        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>대학 웹메일 주소</S.Text>
            <S.SmallButton type="button" onClick={handleSendCode}>
              인증번호 전송
            </S.SmallButton>
          </S.LabelContainer>
          <S.Input
            type="email"
            placeholder="example@inu.co.kr"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.MessageContainer>
            <S.ErrorMessage $show={showEmailSuccess}>
              인증번호가 전송되었습니다.
            </S.ErrorMessage>
            {isTimerActive && <S.TimerText>{formatTime(timeLeft)}</S.TimerText>}
          </S.MessageContainer>
        </S.InputGroup>

        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>인증번호</S.Text>
            <S.SmallButton type="button" onClick={handleCodeConfirm}>
              인증번호 확인
            </S.SmallButton>
          </S.LabelContainer>
          <S.Input
            placeholder="숫자 4자리"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <S.MessageContainer>
            <S.ErrorMessage $show={isCodeError}>
              인증번호가 올바르지 않습니다.
            </S.ErrorMessage>
          </S.MessageContainer>
        </S.InputGroup>

        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>비밀번호 등록</S.Text>
          </S.LabelContainer>
          <S.Input
            type="password"
            placeholder="8자리 이상"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.MessageContainer>
            <S.ErrorMessage $show={isPasswordError}>
              비밀번호 형식이 올바르지 않습니다.
            </S.ErrorMessage>
          </S.MessageContainer>
        </S.InputGroup>

        <S.InputGroup>
          <S.LabelContainer>
            <S.Text>닉네임</S.Text>
          </S.LabelContainer>
          <S.Input
            placeholder="2~15자"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <S.MessageContainer>
            <S.ErrorMessage $show={isNicknameError}>
              닉네임 형식이 올바르지 않습니다.
            </S.ErrorMessage>
          </S.MessageContainer>
        </S.InputGroup>

        <S.LoginButton disabled={!isFormValid} onClick={compeletesignup}>
          회원가입
        </S.LoginButton>
      </S.ContentWrapper>
    </S.Container>
  );
}
