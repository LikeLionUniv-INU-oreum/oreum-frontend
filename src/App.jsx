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
import Explore from './pages/Explore.jsx';
import Review from './pages/Review.jsx';
import Mypage from './pages/Mypage.jsx';
import Basecamp from './pages/Basecamp.jsx';
import AddCourse from './pages/AddCourse.jsx';
import EditCourse from './pages/EditCourse.jsx';
import AddReview from './pages/AddReview.jsx';
import WriteStar from './pages/WriteStar.jsx';
import CompleteStar from './pages/CompleteStar.jsx';

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
          <Route path="/explore" element={<Explore />} />
          <Route path="/review" element={<Review />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/basecamp" element={<Basecamp />} />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/editcourse" element={<EditCourse />} />
          <Route path="/addreview" element={<AddReview />} />
          <Route path="/writestar" element={<WriteStar />} />
          <Route path="/completestar" element={<CompleteStar />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
