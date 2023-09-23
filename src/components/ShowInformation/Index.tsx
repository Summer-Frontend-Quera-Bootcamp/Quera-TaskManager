
import ProfileStates from '../ProfileStates';
import AccountInformation from '../AccountInformation';
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
      <div className="h-screen overflow-hidden">
        
        <div>
            <div className="fixed right-0 flex flex-col bg-white w-340 h-1024">
            <div className="absolute left-[1/2] -ml-0.5 w-[0.5px] border-solid h-screen bg-[#AAAAAA]"></div>
                <div className="box-content h-[55px] w-[235px] float-right top-[40px] left-[55px] text-right leading-[55.27px] font-black text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8] mr-[50px] mt-[40px]">کوئرا تسک منیجر</div>
                <button className="w-[113px] h-[43px] top-[170px] left-[177px] rounded-lg gap-[8px] pt-2 pr-1 pb-2 pl-1 bg-[#208D8E] flex ml-[148px] mt-[80px] mr-[40px]">
                    <div className="w-[65px] h-[35px] text-xl font-medium text-right text-white flex">بازگشت
                    <div className="w-[24px] h-[24px] flex ml-[10px] mt-[2px]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </div>
                    </div>
                </button>
                <div className="w-[266px] h-[190px] top-[249px] gap-[32px] bg-white flex flex-col mt-[35px] " >
                    <div className={`w-[266px] h-[40px] rounded pt-1 pr-2 pl-1 pb-2 gap-[11px] ${profile === "PersonInformation" &&  'bg-[#C2F7FA] font-black'} `}>
                        <button onClick={PersonHandler} className= "w-[133px] h-[32px] text-xl  leading-8 flex ml-[120px] text-right">اطلاعات فردی
                        <div className="w-[24px] h-[24px] flex flex-col ml-[5px]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4 20C4 17.5 6 15.5 8.5 15.5H11.1" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 21H16.3L19.7 17.6C20.1 17.2 20.1 16.6 19.7 16.2L18.8 15.3C18.4 14.9 17.8 14.9 17.4 15.3L14 18.7V21V21H14Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        </button>
                    </div>
                    <div className={`w-[266px] h-[40px] rounded pt-1 pr-2 pl-1 pb-2 gap-[11px] ${profile === "AccountInformation" &&  'bg-[#C2F7FA] font-black'} `}>
                        <button onClick={accountHandler} className="w-[255px] h-[35px] text-xl  leading-8 flex ml-[110px] text-right">اطلاعات حساب
                        <div className="w-[24px] h-[24px] flex ml-[10px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12.0001" cy="8.74835" r="4.25177" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3.9967 20.5033C3.9967 18.0173 6.01254 16.0015 8.49858 16.0015H11.0827" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M19.0029 17.4399L16.0017 20.4412L14.2019 18.6404" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>
                        </div>
                        </button>
                    </div>
                    <div className={`w-[266px] h-[40px] rounded pt-1 pr-2 pl-1 pb-2 gap-[11px] ${profile === "setting" &&  'bg-[#C2F7FA] font-black'} `}>
                        <button onClick={settingHandler} className="w-[225px] h-[35px] text-xl  leading-[34.55px] flex ml-[150px] text-right">تنظیمات
                        <div className="w-[24px] h-[24px] flex ml-[15px] mt-[5px]">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.1213 10.3787C15.2929 11.5502 15.2929 13.4497 14.1213 14.6213C12.9497 15.7929 11.0502 15.7929 9.87868 14.6213C8.70711 13.4497 8.70711 11.5502 9.87868 10.3787C11.0502 9.20711 12.9497 9.20711 14.1213 10.3787" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.18 19.225V19.225C16.683 19.728 17.5 19.728 18.003 19.225L18.725 18.503C19.228 18 19.228 17.183 18.725 16.68V16.68C18.343 16.298 18.231 15.725 18.441 15.227C18.463 15.174 18.485 15.121 18.506 15.067C18.689 14.601 19.143 14.301 19.643 14.301H19.71C20.422 14.301 20.999 13.724 20.999 13.012V11.991C20.999 11.279 20.422 10.702 19.71 10.702H19.643C19.143 10.702 18.689 10.401 18.506 9.936C18.485 9.882 18.463 9.829 18.441 9.776C18.231 9.278 18.343 8.705 18.725 8.323V8.323C19.228 7.82 19.228 7.003 18.725 6.5L18.003 5.778C17.5 5.275 16.683 5.275 16.18 5.778V5.778C15.798 6.16 15.225 6.272 14.727 6.062C14.674 6.04 14.621 6.018 14.567 5.997C14.101 5.811 13.8 5.356 13.8 4.856V4.789C13.8 4.077 13.223 3.5 12.511 3.5H11.49C10.777 3.5 10.2 4.077 10.2 4.789V4.856C10.2 5.356 9.899 5.81 9.434 5.993C9.38 6.015 9.327 6.036 9.274 6.059C8.776 6.269 8.203 6.157 7.821 5.775V5.775C7.318 5.272 6.501 5.272 5.998 5.775L5.275 6.497C4.772 7 4.772 7.817 5.275 8.32V8.32C5.657 8.702 5.769 9.275 5.559 9.773C5.536 9.827 5.515 9.88 5.494 9.934C5.311 10.399 4.856 10.7 4.356 10.7H4.289C3.577 10.7 3 11.277 3 11.989V13.01C3 13.723 3.577 14.3 4.289 14.3H4.356C4.856 14.3 5.31 14.601 5.493 15.066C5.514 15.12 5.536 15.173 5.558 15.226C5.768 15.724 5.656 16.297 5.274 16.679V16.679C4.771 17.182 4.771 17.999 5.274 18.502L5.996 19.224C6.499 19.727 7.316 19.727 7.819 19.224V19.224C8.201 18.842 8.774 18.73 9.272 18.94C9.325 18.962 9.378 18.984 9.432 19.005C9.898 19.188 10.198 19.642 10.198 20.142V20.209C10.198 20.921 10.775 21.498 11.487 21.498H12.508C13.22 21.498 13.797 20.921 13.797 20.209V20.142C13.797 19.642 14.098 19.188 14.563 19.005C14.617 18.984 14.67 18.962 14.723 18.94C15.224 18.731 15.797 18.843 16.18 19.225V19.225Z" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {profile === "PersonInformation" && <h1 className='text-center text-HL'>sina</h1> }
        {profile === "AccountInformation" && <AccountInformation/> }
        {profile === "setting" && <h1 className='text-center text-HL'>zahra</h1> }
        

    </div>
    )
  }
  
  export default Index
  