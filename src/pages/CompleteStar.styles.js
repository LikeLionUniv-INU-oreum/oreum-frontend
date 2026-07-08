import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding-top: 2dvh;
`;

export const CardSection = styled.div`
  position: relative; /* 내부 콘텐츠를 absolute로 얹기 위한 기준점 */
  width: 100%;
  
  margin-top: 10dvh; /* 💡 핵심: 헤더와 사진 카드 사이의 확실한 여백 */
  
  border-radius: 24px; /* 시안처럼 테두리를 부드럽게 깎음 */
  overflow: hidden; /* 이미지가 라운드 테두리 밖으로 빠져나가는 것 방지 */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

/* 이미지 내부 오버레이 레이어 */
export const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

/* 텍스트 위치 가이드: 일러스트 아래 빈 공간에 걸치도록 비율 조정 */
export const Title = styled.h1`
  position: absolute;
  top: 50%; /* 💡 이미지 전체 기준 글씨 위치 오프셋 조정 (시안 맞춤) */
  transform: translateY(-50%);
  
  width: 100%;
  color: #3B7D5A;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.45;
  text-align: center;
  margin: 0;
  word-break: keep-all;
`;

export const Subtitle = styled.p`
  position: absolute;
  top: 60%; /* 💡 이미지 전체 기준 글씨 위치 오프셋 조정 (시안 맞춤) */
  transform: translateY(-50%);
  width: 100%;
  color: #777777; /* 서브 텍스트에 어울리는 회색 톤 */
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  word-break: keep-all;
`;
