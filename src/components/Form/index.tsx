import React from 'react';
const index = () => {
    let greetin = 'به کوئرا تسک منیجر خوش برگشتی '
    let smile = '(:'
    return (
        <form className='flex flex-col items-center py-[284px]'>
        <h1 >  {smile} {greetin} </h1>
        <div className="text-right" >
          <label htmlFor="email"   >ایمیل</label>
          <br />
          <input type="email" id="email" />
        </div>
        <div  className="text-right">
          <label htmlFor="password">رمز عبور</label>
          <br />
          <input type="password" id="password"  />
        </div>
        

        <a className='text-TXS'>رمز عبور را فراموش کرده‌ای؟</a>
        <button className='p-[10px] bg-[#208D8E] rounded-md text-[#FFFFFF]'>ورود</button>
        <div className='flex flex-row-reverse'>
          <p>ثبت‌نام نکرده‌ای؟</p>
          <a className='text-TM text-[#208D8E]'>ثبت‌نام</a>

        </div>
      </form>
      );
  }
  
  export default index
  