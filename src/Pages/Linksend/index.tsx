import Header from '../../components/Header'

const index = () => {
  return (
    <div className="h-screen overflow-hidden">
        <Header />
        <div  className="flex justify-center mt-[250px]" dir="rtl" >
        <form className ="flex flex-col bg-white rounded-lg  w-[640px] h-[156px] shadow-md z-[1]">

            <h1 className="text-HL text-center pt-[24px] font-extra-bold">فراموشی رمز عبور</h1>
            <p className="text-center mt-[30px] text-TS">لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.</p>
        </form>
      </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#51bce3] to-[#06846f] z-[0]" style={{ clipPath: 'polygon(0 60%, 100% 40%, 100% 100%, 0 100%)' }}></div>
    </div>
  )
}

export default index
