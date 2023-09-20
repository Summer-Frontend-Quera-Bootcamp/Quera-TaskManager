import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";
const Index:React.FC = () => {
    let test = 'قوانین و مقررات را می‌پذیرم'
    let dot = '.';
    //---------States used for email validation--------------------------------
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);    
    const [isEmailFocused, setIsEmailFocused] = useState(false);

  //---------States used for password validation--------------------------------
    const [password, setPassword] = useState('');
    const [isValidPassword, setIsValidPassword] = useState(false);
    const [isPasswordFocused, setPasswordFocused] = useState(false);

  //---------States used for name validation--------------------------------
    const [name, setName] = useState('');
    const [isValidName, setIsValidName] = useState(true);
    const [isNameFocused, setIsNamedFocused] = useState(false);

  //---------------------------------------------------------------------------  
  //---------functions used for email validation--------------------------------
    const validateEmail = (email: string): boolean => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    };
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newEmail = event.target.value;
      setEmail(newEmail);
      setIsValid(validateEmail(newEmail));
    
    };
    const handleEmailFocused = () => {
      setIsEmailFocused(true);
    };

     //---------functions used for password validation--------------------------------
    const validatePassword = (password: string): boolean => {
      const regex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;
      return regex.test(password);
    };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      setPassword(newPassword);
      setIsValidPassword(validatePassword(newPassword));
    };
    const handlePasswordFocused = () => {
      setPasswordFocused(true);
    };

  //---------functions used for name validation--------------------------------
    const validateName = (name: string): boolean => {
      return name.trim() !== '';
    };
    const handleNameFocused = () => {
      setIsNamedFocused(true);
    };
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newName = event.target.value;
      setName(newName);
      setIsValidName(validateName(newName));
    };

  //---------------------------------------------------------------------------  
  //---------functions used for button--------------------------------
    const btnHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
      event.preventDefault();
    }

//---------------------------------------------------------------------------  
    return (
      <div className="flex flex-col items-center my-[284px] mt-[149px]" dir="rtl" >

        <form className ='needs-validation flex flex-col border border-whith bg-white rounded-lg  w-[640px] h-[507px] shadow-md z-[1]' noValidate>
          <h1 className='text-HL text-center pt-[24px]'> ثبت‌نام در کوئرا تسک منیجر </h1>

          <div className="text-right mx-[24px] mt-[24px]" >
            <label htmlFor="fullName" className="font-normal text-TS">نام کامل</label>
            <br />
            <input 
            onFocus={handleNameFocused} 
            onChange={handleNameChange}  
            value={name} 
            type="type" 
            id="fullName" 
            className={`border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none
            ${isNameFocused  && !isValidName ? 'bg-red-50 border border-red-500' : ''}
            `} />
          </div>

          <div className="text-right mx-[24px] mt-[24px]" >
            <label htmlFor="email" className="font-normal text-TS">ایمیل</label>
            <br />
            <input 
            onFocus={handleEmailFocused}  
            onChange={handleEmailChange} 
            type="email" 
            id="email" 
            className={`border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none 
            ${isEmailFocused  && !isValid ? 'bg-red-50 border border-red-500' : ''}
            `} />
          </div>

          <div  className="text-right mx-[24px] mt-[24px]">
            <label  htmlFor="password" className="font-normal text-TS " >رمز عبور</label>
            <br />
            <input  
            onChange={handlePasswordChange} 
            onFocus={handlePasswordFocused} 
            type="password" 
            id="password" 
            className={`border border-solid border-1 border-gray-400 rounded-md w-[592px] h-[40px] focus:outline-none 
            ${isPasswordFocused  && !isValidPassword ? 'bg-red-50 border border-red-500' : ''}
            `}/>
          </div>

          <div dir='rtl' className=" flex items-center text-right mx-[24px]  mt-[20px] ">
            <input 
            type="checkbox"  
            id="terms" 
            className=" hover:text-blue  w-[20px] h-[20px] text-center " 
            />
            <label htmlFor="terms" className="text-TS mr-[8px]">{test}{dot}</label>
          </div>

          <button onClick={btnHandler} className="mx-[24px] mt-[32px] mb-[24px] p-[10px]  bg-[#208D8E] rounded-md text-[#FFFFFF] hover:bg-teal-700">ثبت‌نام</button>
      </form>
    
    </div>
      
      );
  }
  
  export default Index
  