import {HashRouter  , Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

function App() {
  return (
   <HashRouter>
   <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
   </Routes>
   </HashRouter>
  );
}

export default App;
