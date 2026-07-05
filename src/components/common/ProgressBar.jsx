import React from "react";
import styled from "styled-components";

const ProgressBar = ({ currentStep, totalSteps, emojiSrc }) => {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <WrapperContainer>
      {/* 이모지 박스: 현재 percent가 0인지 아닌지 style 컴포넌트에 전달합니다 */}
      {emojiSrc && (
        <EmojiBox $percent={percent} $isFirstStep={percent === 0}>
          <img src={emojiSrc} alt="progress-emoji" />
        </EmojiBox>
      )}

      {/* 프로그레스 바 */}
      <ProcessBarContainer>
        <Progress $percent={percent} />
      </ProcessBarContainer>
    </WrapperContainer>
  );
};

export default ProgressBar;

// 전체를 감싸는 컨테이너
const WrapperContainer = styled.div`
  position: relative;
  width: 90%;
  margin-top: 4vh; 
  margin-bottom: 3vh;
`;

// 이모지가 들어갈 박스
const EmojiBox = styled.div`
  position: absolute;
  bottom: 12px; /* 바와 이모지 사이의 세로 간격 */
  left: ${(props) => props.$percent}%;
  
  /* 💡 핵심: 0%일 때는 왼쪽 정렬(0)을 하고, 그 외 단계에서는 기존처럼 -12px만큼 당겨줍니다 */
  transform: ${(props) => (props.$isFirstStep ? "translateX(0)" : "translateX(-80%)")}; 
  
  transition: left 0.4s ease-in-out;

  img {
    width: 20px;
    height: 24px;
    display: block;
  }
`;

const ProcessBarContainer = styled.div`
  width: 100%;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 12px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.$percent}%;
  background-color: #3B7D5A;
  transition: width 0.4s ease-in-out;
  border-radius: 12px;
`;