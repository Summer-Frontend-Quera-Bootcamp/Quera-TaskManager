import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar'
// import Calendar from '../../components/Calendar/Index'
import Columndisplay from '../../components/Columndisplay'
const Index = () => {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Sidebar/>
      {/* <Calendar/> */}
      <Columndisplay/>
    </div>
  )
}

export default Index
