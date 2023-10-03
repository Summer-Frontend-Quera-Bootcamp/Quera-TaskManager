// ========== import components ==========
import Header from '../../../components/Header'
import SignUpForm from '../../../components/SignUpForm'
const index = () => {
    return (
      <div className="h-screen overflow-hidden">
        <Header Text='قبلا ثبت نام کرده ای؟' buttonText='ورود'/>
        <SignUpForm/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#51bce3] to-[#06846f] z-[0]" style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0 100%)' }}></div>
      </div>       // div on line 11 is for background
    )
  }
export default index
