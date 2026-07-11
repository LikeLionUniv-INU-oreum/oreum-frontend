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
  position: relative;
  width: 100%;
  
  margin-top: 20dvh;
  
  border-radius: 24px;
  overflow: hidden;
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

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  
  width: 100%;
  color: #3B7D5A;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.45;
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled.p`
  position: absolute;
  top: 60%;
  transform: translateY(-50%);
  width: 100%;
  color: #777777;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin: 0;
`;
