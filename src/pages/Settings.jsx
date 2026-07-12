import * as S from './Settings.styles.js';
import BottomNav from '../components/common/BottomNav.jsx';
import egLogo from '../assets/images/OreumEgLogo.jpg';
import rightArrow from '../assets/icons/RightArrow.svg';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../api/user.js';
import { changeAcademicStatus, changeJob, changePassword } from '../api/auth.js';

export default function Settings() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [modalState, setModalState] = useState({ isOpen: false, type: null });
  const [currentPasswordValue, setCurrentPasswordValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [confirmValue, setConfirmValue] = useState('');

  /** 설정창 유저 정보 조회 API */
  const fetchUserInfo = async () => {
    try {
      const data = await getUserInfo();
      if (data.isSuccess) setUserInfo(data.result);
    } catch (error) {
      console.error('유저 정보 로딩 실패:', error);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  const closeModal = () => {
    setModalState({ isOpen: false, type: null });
    setCurrentPasswordValue('');
    setInputValue('');
    setConfirmValue('');
  };

  /** 통합 모달 실행 함수 */
  const handleModalSubmit = async () => {
    try {
      // 희망 직무 변경
      if (modalState.type === 'job') {
        if (!inputValue.trim()) return alert('직무를 입력해주세요.');
        const response = await changeJob(inputValue);
        if (response.data.isSuccess) alert('직무가 변경되었습니다!');
      }

      // 비밀번호 변경
      else if (modalState.type === 'password') {
        if (!currentPasswordValue) return alert('현재 비밀번호를 입력해주세요.');
        if (!inputValue) return alert('새 비밀번호를 입력해주세요.');
        if (inputValue !== confirmValue) return alert('새 비밀번호가 일치하지 않습니다.');

        const response = await changePassword(currentPasswordValue, inputValue);
        if (response.data.isSuccess) alert('비밀번호가 변경되었습니다!');
      }

      // 로그아웃
      else if (modalState.type === 'logout') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentJobId');
        localStorage.removeItem('currentJobName');
        navigate('/login');
        alert('로그아웃 되었습니다.');
        return;
      }

      fetchUserInfo();
      closeModal();
    } catch (error) {
      alert(error?.response?.data?.message || '요청에 실패했습니다.');
    }
  };

  /** 학적 변경 api */
  const handleStatusSelect = async (grade) => {
    try {
      const response = await changeAcademicStatus(grade);
      if (response.data.isSuccess) {
        alert('학적이 변경되었습니다!');
        fetchUserInfo();
        closeModal();
      }
    } catch (error) {
      alert(error?.data?.message || '학적 변경에 실패했습니다.');
    }
  };

  return (
    <S.Container>
      <S.MainContent>
        <S.Header>
          <S.BackIcon onClick={() => navigate(-1)}>←</S.BackIcon>
          <S.EgLogo src={egLogo} />
        </S.Header>

        <h1>{userInfo?.nickname || ' '}</h1>
        <div>
          {userInfo?.universityName || '대학교'} | {userInfo?.majorName || '학과'} {userInfo?.grade || '학년'}
        </div>
        <div>{userInfo?.universityEmail || 'example@inu.ac.kr'}</div>

        <S.Divider />

        <S.SelectMenu onClick={() => setModalState({ isOpen: true, type: 'status' })}>
          <S.MenuName>학적 변경</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>

        <S.SelectMenu onClick={() => setModalState({ isOpen: true, type: 'job' })}>
          <S.MenuName>희망 직무 변경</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>

        <S.SelectMenu onClick={() => setModalState({ isOpen: true, type: 'password' })}>
          <S.MenuName>비밀번호 재설정</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>

        <S.SelectMenu onClick={() => setModalState({ isOpen: true, type: 'logout' })}>
          <S.MenuName style={{ color: '#FA1818' }}>로그아웃</S.MenuName>
          <S.RightArrow src={rightArrow} />
        </S.SelectMenu>

        <S.CreditLink onClick={() => setModalState({ isOpen: true, type: 'credit' })}>크레딧</S.CreditLink>
      </S.MainContent>
      <BottomNav />

      {/* 종류별 모달 */}
      {modalState.isOpen && (
        <S.ModalOverlay onClick={closeModal}>
          <S.ModalContent onClick={(e) => e.stopPropagation()}>
            {/* 학적 변경 모달 */}
            {modalState.type === 'status' && (
              <>
                <S.ModalTitle>학적 변경</S.ModalTitle>
                {['1학년', '2학년', '3학년', '4학년', '초과학기', '졸업'].map((status) => (
                  <S.OptionButton key={status} onClick={() => handleStatusSelect(status)}>
                    {status}
                  </S.OptionButton>
                ))}
              </>
            )}
            {/* 희망 직무 변경 모달 */}
            {modalState.type === 'job' && (
              <>
                <S.ModalTitle>희망 직무 변경</S.ModalTitle>
                <S.ModalInput
                  placeholder="정확한 직무명은 관리자에게 문의해주세요."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <S.OptionButton style={{ backgroundColor: '#3b7d5a', color: 'white' }} onClick={handleModalSubmit}>
                  변경하기
                </S.OptionButton>
              </>
            )}
            {/* 비밀번호 변경 모달 */}
            {modalState.type === 'password' && (
              <>
                <S.ModalTitle>비밀번호 재설정</S.ModalTitle>
                <S.ModalInput
                  type="password"
                  placeholder="현재 비밀번호"
                  value={currentPasswordValue}
                  onChange={(e) => setCurrentPasswordValue(e.target.value)}
                  style={{ marginBottom: '12px' }}
                />
                <S.ModalInput
                  type="password"
                  placeholder="새 비밀번호"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <S.ModalInput
                  type="password"
                  placeholder="새 비밀번호 확인"
                  value={confirmValue}
                  onChange={(e) => setConfirmValue(e.target.value)}
                />
                <S.OptionButton style={{ backgroundColor: '#3b7d5a', color: 'white' }} onClick={handleModalSubmit}>
                  재설정하기
                </S.OptionButton>
              </>
            )}
            {/* 4. 로그아웃 모달 */}
            {modalState.type === 'logout' && (
              <>
                <S.ModalTitle>로그아웃</S.ModalTitle>
                <div style={{ textAlign: 'center', marginBottom: '16px', color: '#495057' }}>
                  정말 로그아웃 하시겠어요?
                </div>
                <S.OptionButton style={{ backgroundColor: '#3b7d5a', color: 'white' }} onClick={handleModalSubmit}>
                  로그아웃
                </S.OptionButton>
              </>
            )}
            {/* 크레딧 */}
            {modalState.type === 'credit' && (
              <>
                <S.ModalTitle>⛰️ 팀 멋사랑산악회</S.ModalTitle>
                <div
                  style={{
                    textAlign: 'center',
                    lineHeight: '1.6',
                    color: '#495057',
                    fontSize: '14px',
                    margin: '0 0 16px 0',
                  }}
                >
                  <b>PM</b>
                  <br />
                  김지유
                  <br />
                  <br />
                  <b>DESIGN</b>
                  <br />
                  임상현 | 정지인
                  <br />
                  <br />
                  <b>FRONTEND</b>
                  <br />
                  김남윤 | 임상현
                  <br />
                  <br />
                  <b>BACKEND</b>
                  <br />
                  임재영 | 조수진
                  <br />
                  <br />© LikeLion INU. 14th 🦁
                </div>
              </>
            )}
            {/* 공통 취소 버튼 */}
            <S.CancelButton onClick={closeModal}>{modalState.type === 'credit' ? '닫기' : '취소'}</S.CancelButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </S.Container>
  );
}
