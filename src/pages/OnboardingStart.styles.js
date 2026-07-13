import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-color: #f7f5f5;
`;

export const Header = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  padding-top: 2dvh;
`;

export const TextBox = styled.div`
  width: 90%;
  padding: 0 20px;
  margin-top: 10vh;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  color: #3b7d5a;
  margin-bottom: 30px;
`;

export const Subtitle = styled.p`
  font-size: 26px;
  font-weight: 900;
  color: #3b7d5a;
  line-height: 1.4;
`;

export const ImageSection = styled.div`
  position: relative; /* 버튼 배치의 기준점 */
  width: 100%;
  flex: 1; /* 남은 공간을 모두 차지 */
  display: flex;
  align-items: flex-end; /* 이미지를 바닥에 붙임 */
  overflow: hidden;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지가 영역을 가득 채우되 비율 유지 */
`;

export const StartButton = styled.button`
  position: absolute; /* 이미지 위로 띄움 */
  bottom: 6vh;
  left: 50%;
  transform: translateX(-50%); /* 정확히 가로 중앙 정렬 */
  width: 80%;
  height: 54px;

  background-color: #3b7d5a;
  color: white;
  border: none;
  border-radius: 12px;

  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  /* 버튼이 이미지 위에서 더 잘 보이도록 그림자 추가 (선택사항) */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:active {
    background-color: #2e6146; /* 클릭 시 약간 어둡게 */
  }
`;
