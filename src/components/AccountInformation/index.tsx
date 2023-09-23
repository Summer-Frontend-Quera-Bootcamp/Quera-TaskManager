import { Link } from 'react-router-dom';
const Index: React.FC = () => {
  return (
    <div  className="  mt-[170px] ml-[688px] mr-[58px] h-[590px] w-[354px]"  dir="rtl" >
    <form>
      <h1 className='w-[200px] h-[54px] font-bold text-HL'>اطلاعات حساب</h1>
      <div className='mt-[32px] '>
        <label className='text-TS font-normal' htmlFor="email">ایمیل</label>
        <input type='email'  className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none" />
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="name" className='text-TS font-normal'>نام کاربری</label>
        <input type='text' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='text-TS font-normal'> رمز عبور فعلی</label>
        <input type='password' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='text-TS font-normal'> رمز عبور جدید</label>
        <input type='password' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='text-TS font-normal'> تکرار رمز عبور جدید</label>
        <input type='password' className="border border-gray-400 rounded-md w-full h-[40px] focus:outline-none"/>
      </div>

      <button className="w-full h-[40px] bg-[#208D8E] rounded-md mt-[40px] text-white text-TS font-extra-bold hover:bg-teal-700">ثبت تغییرات</button>
      
    </form>
    </div>
  );
};

export default Index;