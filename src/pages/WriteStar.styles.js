import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px 24px;
  height: 100dvh;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #3b7d5a;
    border-radius: 4px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #777;
  cursor: pointer;
  align-self: flex-start;
  margin-bottom: 24px;
  padding: 0;
`;

export const PageTitleSection = styled.div`
  margin-bottom: 16px;
  h2 {
    font-size: 24px;
    font-weight: 900;
    color: #3b7d5a;
    margin: 0 0 6px 0;
  }
  p {
    font-size: 13px;
    color: #555;
    margin: 0;
    line-height: 1.2;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 2px solid #acacac;
  margin: 0 0 20px 0;
  width: 100%;
`;

export const CourseBadgeCard = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #f0f6f2;
  padding: 5px 5px;
  border-radius: 4px;
  font-size: 15px;
  font-weight: 300;
  color: #333;
  margin-bottom: 18px;
  width: 100%;
  box-sizing: border-box;

  span {
    color: #888;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 28px;
  width: 100%;

  h3 {
    font-size: 22px;
    font-weight: 900;
    color: #3d7b5a;
    margin: 0 0 6px 0;
  }

  .desc {
    font-size: 13px;
    color: #333;
    line-height: 1.2;
    margin: 0 0 6px 2px;
  }
`;

export const TextAreaBox = styled.textarea`
  width: 100%;
  height: 140px;
  border: 2px solid #5a8469;
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  box-sizing: border-box;
  outline: none;
  resize: none;
  color: #333;
  line-height: 1.6;

  &::placeholder {
    color: #3d7b5a;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${(props) => (props.disabled ? '#b0b0b0' : '#4a7a5c')};
  color: white;
  border: none;
  border-radius: 12px;
  padding: 16px 0;
  font-size: 18px;
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 12px;
  margin-bottom: 75px;
  transition: background-color 0.3s ease;
  flex-shrink: 0;
`;

export const BottomNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  z-index: 100;
`;

export const CourseFlag = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  flex-shrink: 0;
`;
