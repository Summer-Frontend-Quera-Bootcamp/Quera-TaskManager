// ========== import components ==========
import Header from '../../../components/Header'

const index = () => {
  return (
    <div className="h-screen overflow-hidden">
        <Header Text='قبلا ثبت نام کرده ای؟' buttonText='ورود'/>
        <div  className="flex justify-center mt-[250px]" dir="rtl" >
        <form className ="flex flex-col bg-white rounded-lg h-[156px] shadow-md z-[1]">

            <h1 className="sm:text-HL text-HS text-center pt-[24px] mx-[65.5px]">فراموشی رمز عبور</h1>
            <p className="text-center m-[24px] text-TS">لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.</p>
        </form>
      </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#51bce3] to-[#06846f] z-[0]" style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0 100%)' }}></div>
    </div>
  )
}

export default index

