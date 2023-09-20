import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Index:React.FC = () => {
    let greetin = 'به کوئرا تسک منیجر خوش برگشتی '
    let smile = ':)';


    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const validateEmail = (email: string): boolean => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setIsValid(validateEmail(newEmail));
    };

    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(true);
   
    const validatePassword = (password: string): boolean => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      return regex.test(password);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setIsValidPassword(validatePassword(newPassword));
    };

    
    

    return (
      <div  className="flex flex-col items-center my-[284px] mt-[149px]" dir="rtl" >

        <form className ="flex flex-col border border-whith bg-white rounded-lg  w-[640px] h-[456px] shadow-md z-[1]">
        <h1 className="text-HL text-center pt-[24px]"> {greetin}{smile}</h1>
  
        <div className="text-right mx-[24px]" >
          <label htmlFor="email" className="font-normal text-TS">ایمیل</label>
          <br />
          <input onChange={handleEmailChange} value={email} placeholder="پست الکترونیک" type="email" id="email" className="placeholder:pr-2 border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none" />
         
          {!isValid  && <span style={{ color: 'red' }}>ایمیل نادرست</span>}
        </div>

        <div  className="text-right mx-[24px] mt-[24px]">
          <label htmlFor="password" className="font-normal text-TS" >رمز عبور</label>
          <br />
          <input value={password} onChange={handlePasswordChange} placeholder="گذرواژه" type="password" id="password"  className=" placeholder:pr-2 border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none" />
          {!isValidPassword && <span style={{ color: 'red' }}>Invalid password</span>}
        </div>
        

        <a href="https://Quera.ir" className="text-right mx-[24px] mt-[8px] text-[#208D8E] font-extra-bold text-TXS">رمز عبور را فراموش کرده‌ای؟</a>
        <Link to="/main"><button className="mx-[24px] mt-[32px] mb-[24px] p-[10px]  bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700"></button></Link>
        <div className="flex flex-row-reverse m-auto text-TM">
          <a className="text-[#208D8E] font-extra-bold mr-[7px]" href="https://quera.ir">ثبت‌نام</a>
          <p className = "font-medium">ثبت‌نام نکرده‌ای؟</p>

        </div>
      </form>
      </div>
      );
  }
  
  export default Index
  