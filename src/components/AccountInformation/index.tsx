const Index: React.FC = () => {
  return (
    <div  className="  mt-[170px] mr-[58px] w-[354px]"  dir="rtl" >
    <form>
      <h1 className='w-[200px] h-[54px] font-bold text-HL'>اطلاعات حساب</h1>
      <div className='mt-[32px]'>
        <label className='font-normal text-TS' htmlFor="email">ایمیل</label>
        <input type='email'  className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none" />
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="name" className='font-normal text-TS'>نام کاربری</label>
        <input type='text' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='font-normal text-TS'> رمز عبور فعلی</label>
        <input type='password' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='font-normal text-TS'> رمز عبور جدید</label>
        <input type='password' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='font-normal text-TS'> تکرار رمز عبور جدید</label>
        <input type='password' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <button className="w-full h-[40px] bg-[#208D8E] rounded-md mt-[40px] text-white text-TS font-extra-bold hover:bg-teal-700">ثبت تغییرات</button>
      
    </form>
    </div>
  );
};

export default Index;