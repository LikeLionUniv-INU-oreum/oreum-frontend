import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const AppLayout = ({ children }) => {
  const location = useLocation();

  return (
    <Background>
      <MobileContainer>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{ width: '100%', height: '100%' }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </MobileContainer>
    </Background>
  );
};

export default AppLayout;

// 바깥쪽 영역
const Background = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100dvh;
  background-color: #f0f0f5;
`;

// 실제 모바일 화면 영역
const MobileContainer = styled.div`
  width: 100%;
  max-width: 430px;
  height: 100dvh;
  background-color: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
