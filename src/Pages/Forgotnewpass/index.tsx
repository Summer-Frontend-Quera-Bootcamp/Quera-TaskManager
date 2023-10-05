import { Link } from 'react-router-dom'
import Header from '../../components/Header'
const index = () => {
  return (
    <div className="h-screen overflow-hidden">
    <Header Text='قبلا ثبت نام کرده ای؟' buttonText='ورود'/>
    <div  className="flex flex-col items-center my-[284px] mt-[149px]" dir="rtl" >
        <form className ="flex flex-col bg-white rounded-lg  w-[640px] h-[275px] shadow-md z-[1]">

          <h1 className="text-HL text-center pt-[24px]">بازیابی رمز عبور</h1>

          <div  className="text-right mx-[24px] mt-[24px]">
            <label htmlFor="password" className="font-normal text-TS" >رمز عبور جدید را وارد کنید</label>
            <br />
            <input  
            type="password" 
            id="password"  
            className="  border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none" />
          </div>
          
          <Link to="/" className="mx-[24px] mt-[32px] mb-[24px] p-[10px]  bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700 text-center"><button>تغییر رمز عبور</button></Link>
        
        </form>
      </div>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#51bce3] to-[#06846f] z-[0]" style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0 100%)' }}></div>

  </div>
  )
}

export default index