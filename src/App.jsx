import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './styles/AppLayout';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import OnboardingStart from './pages/OnboardingStart.jsx';
import OnboardingGrade from './pages/OnboardingGrade.jsx';
import OnboardingComplete from './pages/OnboardingComplete.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/onboardingstart' element={<OnboardingStart />} />
          <Route path='/onboardinggrade' element={<OnboardingGrade />} />
          <Route path='/onboardingcomplete' element={<OnboardingComplete />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
