import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './styles/AppLayout';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
