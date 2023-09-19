import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
// import Header from './components/Header'
// import Login from './components/Login'
// import Form from './components/Form'
// import SignUp from './components/SignUp'

import './App.css';

function App() {
  return (
    <div className="grid grid-cols-main">
      {/* <Login/> */}
      {/* <Form/> */}
      {/* <SignUp/> */}
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
