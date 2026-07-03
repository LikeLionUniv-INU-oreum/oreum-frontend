import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './styles/AppLayout';
import Login from './pages/Login.jsx';

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
