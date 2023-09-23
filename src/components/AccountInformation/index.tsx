import { Link } from 'react-router-dom';
import { useState } from "react";

const Index: React.FC = () => {
      //---------States used for email validation--------------------------------
      const [email, setEmail] = useState('');
      const [isValid, setIsValid] = useState(true);    
      const [isEmailFocused, setIsEmailFocused] = useState(false);
  
    //---------States used for password validation--------------------------------
      const [password, setPassword] = useState('');
      const [isValidPassword, setIsValidPassword] = useState(false);
      const [isPasswordFocused, setPasswordFocused] = useState(false);
  
    //---------States used for new password validation--------------------------------
      const [newPasswordState, setNewPassword] = useState('');
      const [isValidNewPassword, setIsValidNewPassword] = useState(false);
      const [isNewPasswordFocused, setNewPasswordFocused] = useState(false);

    //---------States used for confirmpassword validation--------------------------------
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isMatching, setIsMatching] = useState(false);
      const [isConfirmPasswordFocused, setConfirmPasswordFocused] = useState(false);






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
//---------functions used for password validation--------------------------------
const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
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
  
      //---------functions used for newpassword validation--------------------------------
      const validateNewPassword = (password: string): boolean => {
      const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
      return regex.test(password);
      };
      const handleNewPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newPassword = event.target.value;
      console.log(newPassword)
      setNewPassword(newPassword);
      setIsValidNewPassword(validateNewPassword(newPassword));
      };
      const handleNewPasswordFocused = () => {
      setNewPasswordFocused(true);
      };

     //---------functions used for confirmpassword validation--------------------------------
const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const confirmPassword = event.target.value;
  setConfirmPassword(confirmPassword);
  setIsMatching(newPasswordState === confirmPassword);
};



const handleConfirmPasswordFocused = () => {
  setConfirmPasswordFocused(true);
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
  return (
    <div  className="  mt-[170px] ml-[688px] mr-[58px] h-[590px] w-[354px]"  dir="rtl" >
    <form>
      <h1 className='w-[200px] h-[54px] font-bold text-HL'>اطلاعات حساب</h1>
      <div className='mt-[32px] '>
        <label className='text-TS font-normal' htmlFor="email">ایمیل</label>
        <input 
        onFocus={handleEmailFocused}  
        onChange={handleEmailChange} 
        type='email'  
        className={`border border-gray-400 rounded-md w-full h-[40px] focus:outline-none
        ${isEmailFocused  && !isValid ? 'bg-red-50 border border-red-500' : ''}
        
        `} />
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="name" className='text-TS font-normal'>نام کاربری</label>
        <input 
        onFocus={handleNameFocused} 
        onChange={handleNameChange} 
        type='text' 
        className={`border border-gray-400 rounded-md w-full h-[40px] focus:outline-none
        ${isNameFocused  && !isValidName ? 'bg-red-50 border border-red-500' : ''}

        `}/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='text-TS font-normal'> رمز عبور فعلی</label>
        <input
        onChange={handlePasswordChange} 
        onFocus={handlePasswordFocused}  
        type='password' 
        className={`border border-gray-400 rounded-md w-full h-[40px] focus:outline-none
        ${isPasswordFocused  && !isValidPassword ? 'bg-red-50 border border-red-500' : ''}

        `}/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='text-TS font-normal'> رمز عبور جدید</label>
        <input 
        onChange={handleNewPasswordChange} 
        onFocus={handleNewPasswordFocused}
        type='password' 
        className={`border border-gray-400 rounded-md w-full h-[40px] focus:outline-none
        ${isNewPasswordFocused  && !isValidNewPassword ? 'bg-red-50 border border-red-500' : ''}

        `}/>
      </div>

      <div className='mt-[16px]'>
        <label htmlFor="password" className='text-TS font-normal'> تکرار رمز عبور جدید</label>
        <input 
         onChange={handleConfirmPasswordChange} 
         onFocus={handleConfirmPasswordFocused}
        type='password' 
        className={`border border-gray-400 rounded-md w-full h-[40px] focus:outline-none
        ${isConfirmPasswordFocused  && !isMatching ? 'bg-red-50 border border-red-500' : ''}
        `}/>
      </div>

      <button onClick={btnHandler} className="w-full h-[40px] bg-[#208D8E] rounded-md mt-[40px] text-white text-TS font-extra-bold hover:bg-teal-700">ثبت تغییرات</button>
      
    </form>
    </div>
  );
};

export default Index;



