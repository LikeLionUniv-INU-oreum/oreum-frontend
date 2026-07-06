import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './styles/AppLayout';
import Intro from './pages/Intro';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import OnboardingStart from './pages/OnboardingStart.jsx';
import OnboardingGrade from './pages/OnboardingGrade.jsx';
import OnboardingComplete from './pages/OnboardingComplete.jsx';
import OnboardingSelectDept from './pages/OnboardingSelectDept.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboardingstart" element={<OnboardingStart />} />
          <Route path="/onboardinggrade" element={<OnboardingGrade />} />
          <Route path="/onboardingcomplete" element={<OnboardingComplete />} />
          <Route path="/onboardingselectdept" element={<OnboardingSelectDept />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
