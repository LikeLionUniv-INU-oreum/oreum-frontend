import styled from 'styled-components';

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
