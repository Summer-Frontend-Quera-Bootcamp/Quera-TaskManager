import Header from '../Header'
import SignUpForm from '../SignUpForm'
const index = () => {

    return (
      <div>
        <Header/>
        <SignUpForm/>
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#51bce3] to-[#06846f] z-[0]' style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0 100%)' }}></div>

      </div>
      
    )
  }
  
  export default index
  