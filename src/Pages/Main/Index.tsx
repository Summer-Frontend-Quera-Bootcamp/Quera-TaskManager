import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar'
import Calendar from '../../components/Calendar/Index'
const Index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Sidebar/>
      <Calendar/>
    </div>
  )
}

export default Index
