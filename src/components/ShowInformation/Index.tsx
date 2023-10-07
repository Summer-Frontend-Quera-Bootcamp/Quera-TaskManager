import AccountInformation from '../AccountInformation';
import Rightflag from '../iconComponents/right-flag';
import Accountinfo from '../iconComponents/Account-info';
import Settingsicon from '../iconComponents/Settingsicon';
import Personalinfo from '../Personalinfo';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Index: React.FC = () => {
  const [profile, setProfile] = useState("PersonInformation"); // Default to "PersonInformation"

  const PersonHandler = () => {
    setProfile("PersonInformation");
  }

  const accountHandler = () => {
    setProfile("AccountInformation");
  }

  const settingHandler = () => {
    setProfile("setting");
  }

  return (
    <div className="flex flex-row-reverse h-screen overflow-hidden">
      <div className="w-[340px] h-screen border-l-2">
        <h2 className="text-HL font-extra-bold text-center mt-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8] mr-[50px] ml-[55px]">کوئرا تسک منیجر</h2>
        <Link to='/main'>
          <button className="flex bg-[#208D8E] items-center justify-center space-x-XS text-white p-[8px] rounded-lg mt-[75px] mr-[50px] ml-[177px]">
            <p className='text-TL'>بازگشت</p>
            <Rightflag />
          </button>
        </Link>
        <div className="mt-[36px] mr-[50px] ml-[24px] flex flex-col space-y-L">
          <div onClick={PersonHandler} className={`flex flex-row-reverse items-center rounded-md w-full cursor-pointer ${profile === "PersonInformation" ? 'bg-[#C2F7FA]' : ''}`}>
            <Personalinfo />
            <p className={`mr-1 text-TL  ${profile === "PersonInformation" ? 'font-extra-bold' : 'font-medium'}`}>اطلاعات فردی</p>
          </div>
          <div onClick={accountHandler} className={`flex flex-row-reverse items-center rounded-md w-full  cursor-pointer ${profile === "AccountInformation" ? 'bg-[#C2F7FA]' : ''}`}>
            <Accountinfo />
            <p className={`mr-1 text-TL ${profile === "AccountInformation" ? 'font-extra-bold' : 'font-medium'}`}>اطلاعات حساب</p>
          </div>
          <div onClick={settingHandler} className={`flex flex-row-reverse items-center rounded-md w-full  cursor-pointer ${profile === "setting" ? 'bg-[#C2F7FA]' : ''}`}>
            <Settingsicon />
            <p className={`mr-1 text-TL ${profile === "setting" ? 'font-extra-bold' : 'font-medium'}`}>تنظیمات</p>
          </div>
        </div>
      </div>
      <div>
        {profile === "PersonInformation" && <Personalinfo/>}
        {profile === "AccountInformation" && <AccountInformation />}
        {profile === "setting" && <h1 className=''>zahra</h1>}
      </div>
    </div>
  )
}

export default Index;
