
import ProfileStates from '../ProfileStates';
import AccountInformation from '../AccountInformation';
import Rightflag from '../iconComponents/right-flag'
import Accountinfo from '../iconComponents/Account-info'
import Settingsicon from '../iconComponents/Settingsicon'
import Personalinfo from '../iconComponents/Personal-info'
import React, { useState } from 'react';
const Index:React.FC = () => {
  const[profile, setProfile] = useState("");


  const PersonHandler =() =>{
    setProfile(profile => "PersonInformation");

  }

  // const[account, setAccountInfo] = useState("");
  const accountHandler =() =>{
    setProfile(profile => "AccountInformation");  
  }

  const settingHandler =() =>{
    setProfile(profile => "setting");  
  }



    return (
        <div className="flex flex-row-reverse h-screen overflow-hidden">
            <div className="w-[340px] h-screen border-l-2">
            <h2 className="text-HL font-extra-bold text-center mt-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8] mr-[50px] ml-[55px]">کوئرا تسک منیجر</h2>
                <button className="flex bg-[#208D8E] items-center justify-center space-x-XS text-white p-[8px] rounded-lg mt-[75px] mr-[50px] ml-[177px]">
                    <p>بازگشت</p>
                    <Rightflag/>
                </button>
                <div className="mt-[36px] mr-[50px] ml-[24px] flex flex-col space-y-L">
                    <div onClick={PersonHandler} className="flex flex-row-reverse items-center w-full cursor-pointer">
                        <Personalinfo/>
                        <p className="mr-1 font-medium text-TL">اطلاعات فردی</p>
                    </div>
                    <div onClick={accountHandler} className="flex flex-row-reverse items-center w-full cursor-pointer">
                        <Accountinfo/>
                        <p className="mr-1 font-medium text-TL">اطلاعات حساب</p>
                    </div>
                    <div onClick={settingHandler} className="flex flex-row-reverse items-center w-full bg-[#C2F7FA] cursor-pointer">
                        <Settingsicon/>
                        <p className="mr-1 font-medium text-TL">تنظیمات</p>
                    </div>
                </div>
            </div>
            <div>
                {profile === "PersonInformation" && <h1 className=''>sina</h1> }
                {profile === "AccountInformation" && <AccountInformation/> }
                {profile === "setting" && <h1 className=''>zahra</h1> }
            </div>
        </div>
    )
  }
  
  export default Index
  