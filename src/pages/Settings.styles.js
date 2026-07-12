import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const MainContent = styled.div`
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

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;

export const BackIcon = styled.div`
  position: absolute;
  left: 0;
  font-size: 24px;
  color: #707070;
  cursor: pointer;
`;

export const EgLogo = styled.img`
  width: 110px;
  height: auto;
`;

export const Divider = styled.hr`
  border: none;
  height: 1.5px;
  background-color: #acacac;
  width: 100%;
  margin: 30px auto;
`;

export const SelectMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const MenuName = styled.div`
  font-size: 16px;
  font-weight: 300;
`;

export const RightArrow = styled.img`
  width: 5%;
`;

/* =============== 모달 관련 =============== */
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  animation: ${fadeIn} 0.2s ease-out forwards;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 80%;
  max-width: 320px;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

  animation: ${slideUp} 0.3s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #111;
  margin: 0 0 8px 0;
  text-align: center;
`;

export const ModalInput = styled.input`
  width: 100%;
  padding: 14px;
  border: 1px solid #dee2e6;
  border-radius: 12px;
  font-size: 15px;
  margin-bottom: 8px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #3b7d5a;
  }
`;

export const OptionButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #f1f3f5;
  color: #495057;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:active {
    background-color: #3b7d5a;
    color: white;
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #ff3f34;
  color: #ffffff;
  border: none;
  font-size: 14px;
  cursor: pointer;
  border-radius: 12px;
`;

export const CreditLink = styled.span`
  display: block;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 13px;
  color: #adb5bd;
  text-decoration: underline;
  text-underline-offset: 4px;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #868e96;
  }
`;
