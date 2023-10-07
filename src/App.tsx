import Login from './components/Login'
import SignUp from './components/SignUp'
import Main from './Pages/Main/Index'
import NotFound from './Pages/NotFound/Index'
// import Profile1 from './components/Profile1/index'
import Forgot from './Pages/Forgot'
import Linksend from './Pages/Linksend'
import Forgotnewpass from './Pages/Forgotnewpass'
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ShowInformation from './components/ShowInformation/Index';
import Personalinfo from './components/Personalinfo/index';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/404" element={<NotFound/>} />
        <Route path="/forgot" element={<Forgot/>} />\
        <Route path="/linksend" element={<Linksend/>} />
        <Route path="/Forgotnewpass" element={<Forgotnewpass/>} />
        <Route path="*" element={<Navigate to="404"/>} />
        {/* <Route path="/Profile1" element={<Profile1/>} /> */}
        <Route path="/ShowInformation" element={<ShowInformation/>} />
        <Route path="/Personalinfo" element={<Personalinfo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
