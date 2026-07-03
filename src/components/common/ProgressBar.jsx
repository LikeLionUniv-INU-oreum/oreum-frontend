// 프로그레스바 컴포넌트
// <ProgressBar currentStep={1} totalSteps={4} /> 이렇게 쓰셈
import React from "react";
import styled from "styled-components";

// currentStep: 현재 몇 번째 질문인지
// totalSteps: 전체 질문이 몇 개인지
const ProgressBar = ({ currentStep, totalSteps }) => {
  const percent = (currentStep / totalSteps) * 100;

  return (
    <ProcessBarContainer>
      <Progress $percent={percent} />
    </ProcessBarContainer>
  );
};

export default ProgressBar;

const ProcessBarContainer = styled.div`
  margin-top: 1vh;
  margin-bottom: 3vh;
  width: 90%;
  height: 4px;
  background-color: #d9d9d9;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.$percent}%;
  background-color: #f3a5b1;
  transition: width 0.4s ease-in-out;
  border-radius: 12px;
`;