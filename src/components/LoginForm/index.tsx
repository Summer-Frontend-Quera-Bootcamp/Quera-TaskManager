import React from 'react';
const index = () => {
    let greetin = 'به کوئرا تسک منیجر خوش برگشتی '
    let smile = '(:'
    return (
      <div  className='flex flex-col items-center my-[284px] mt-[149px]' >

        <form className ='flex flex-col rounded-2xl border border-whith bg-white rounded-lg  w-[640px] h-[456px] shadow-md z-[1]'>
        <h1 className='text-HL text-center pt-[24px]'>  {smile} {greetin} </h1>
  
        <div className="text-right mx-[24px]" >
          <label htmlFor="email" className='font-normal text-TS'>ایمیل</label>
          <br />
          <input type="email" id="email" className='border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none' />
        </div>

        <div  className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="password" className='font-normal text-TS' >رمز عبور</label>
          <br />
          <input type="password" id="password"  className='border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none' />
        </div>
        

        <a href ='#' className='text-TXS text-right mx-[24px] mt-[8px] text-[#208D8E] font-extra-bold text-TXS'>رمز عبور را فراموش کرده‌ای؟</a>
        <button className='mx-[24px] mt-[32px] mb-[24px] p-[10px]  bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700'>ورود</button>
        <div className='flex flex-row-reverse m-auto text-TM'>
          <p className = 'font-medium'>ثبت‌نام نکرده‌ای؟</p>
          <a className='text-[#208D8E] font-extra-bold mr-[7px]' href='#'>ثبت‌نام</a>

        </div>
      </form>
      </div>
      );
  }
  
  export default index
  