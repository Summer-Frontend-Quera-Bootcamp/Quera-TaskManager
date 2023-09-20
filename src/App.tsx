// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar'
// import Header from './components/Header'
import Login from './components/Login'
// import Form from './components/Form'
import SignUp from './components/SignUp'

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
