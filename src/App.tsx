// ========== import needed packages ==========
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

// ========== import components ==========
import Login from './Pages/Authentication/Login'
import SignUp from './Pages/Authentication/SignUp'
import Forgot from './Pages/Authentication/Forgot'
import Linksend from './Pages/Authentication/Linksend'
import Forgotnewpass from './Pages/Authentication/Forgotnewpass'
import Main from './Pages/Main/Index'
import ShowInformation from './components/ShowInformation/Index';
import NotFound from './Pages/NotFound/Index'

// ========== import css files ==========
import './App.css';


function App() {
  return (

      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/linksend" element={<Linksend/>} />
        <Route path="/Forgotnewpass" element={<Forgotnewpass/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/ShowInformation" element={<ShowInformation/>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="*" element={<Navigate to="404"/>} />
      </Routes>
  );
}

export default App;
