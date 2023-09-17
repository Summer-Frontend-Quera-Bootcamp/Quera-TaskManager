import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import './App.css';

function App() {
  return (
    <div className="flex justify-between overflow-hidden">
      <Navbar/>
      <Sidebar/>
    </div>
  );
}

export default App;
