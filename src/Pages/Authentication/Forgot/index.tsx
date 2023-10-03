// ========== import needed packages ==========
import { Link } from 'react-router-dom'

// ========== import components ==========
import Header from '../../../components/Header'

const index = () => {
  return (
    <div className="h-screen overflow-hidden">
        <Header Text='قبلا ثبت نام کرده ای؟' buttonText='ورود' />
        <div  className="flex flex-col items-center my-auto mt-[200px]" dir="rtl" >
        <form className ="flex flex-col bg-white rounded-lg shadow-md z-[1]">

          <h1 className="lg:text-HL md:text-HS text-TS text-center mt-[24px] mx-[201.5px]">فراموشی رمز عبور</h1>
  
          <div className="text-right mx-[24px]" >
            <label htmlFor="email" className="font-normal text-TS mt-[32px]">ایمیل خود را وارد کنید</label>
            <br />
            <input 
            type="email" 
            id="email"
            required
            className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none" 
            /> 
          </div>
          <Link to="/linksend" className="mx-[24px] mt-[32px] mb-[24px] p-[10px] lg:text-TL text-TXS  bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700 text-center"><button>دریافت ایمیل بازیابی رمز عبور</button></Link>

        </form>
      </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#51bce3] to-[#06846f] z-[0]" style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0 100%)' }}></div>
    </div>
  )
}

export default index
