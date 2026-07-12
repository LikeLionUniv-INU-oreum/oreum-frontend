import styled, { keyframes, css } from 'styled-components';

const fadeSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(25px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

const slowZoomAndFocus = keyframes`
  0% { 
    transform: scale(1);
    filter: blur(8px); 
  }
  30% {
    filter: blur(0px);
  }
  100% { 
    transform: scale(1.08);
    filter: blur(0px);
  }
`;

const shimmer = keyframes`
  0% { left: -100%; }
  100% { left: 100%; }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background-color: #ffffff;
`;

export const IntroImg = styled.img`
  width: 100%;
  height: auto;
  transform-origin: top center;

  animation:
    ${fadeIn} 1.5s ease-out,
    ${slowZoomAndFocus} 5s ease-out forwards;
`;

export const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${(props) => props.$margin || 'auto 0'};
  gap: 10px;
`;

export const Subtitle = styled.div`
  color: #acacac;
  font-size: 13px;
  font-weight: bold;

  ${(props) =>
    props.$isIntro &&
    css`
      opacity: 0;
      animation: ${fadeSlideUp} 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s forwards;
    `}
`;

export const LogoImg = styled.img`
  width: 70%;
  height: auto;

  ${(props) =>
    props.$isIntro &&
    css`
      opacity: 0;
      animation: ${fadeIn} 1.2s ease-out 1.2s forwards;
    `}
`;

export const Slogan = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 1.4;

  ${(props) =>
    props.$isIntro &&
    css`
      opacity: 0;
      animation: ${fadeSlideUp} 1s cubic-bezier(0.2, 0.8, 0.2, 1) 2s forwards;
    `}
`;

export const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
  margin-bottom: 20px;
  opacity: 0;

  animation: ${fadeIn} 1s ease-out 4s forwards;
`;

export const LoginButton = styled.button`
  color: #ffffff;
  background-color: #3b7d5a;
  width: 80%;
  padding: 18px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: bold;
  transition:
    transform 0.2s,
    background-color 0.2s;

  &:active {
    transform: scale(0.97);
    background-color: #2f6347;
  }

  /* 인트로에만 적용 */
  ${(props) =>
    props.$isIntro &&
    css`
      position: relative;
      overflow: hidden;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(
          to right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: skewX(-25deg);
        animation: ${shimmer} 4s ease-in-out 4s infinite;
      }
    `}
`;

export const FooterText = styled.div`
  font-size: 12px;
  color: #aaaaaa;
  font-family: 'Times New Roman', serif;
`;
