import React, { useState } from 'react';
import Searchbox from '../Searchbox';

const Index = () => {
  const [isListVisible, setListVisible] = useState(false);

  const toggleListVisibility = () => setListVisible(!isListVisible);

  return (
    <div className="fixed right-0 h-screen border-l-2 w-[340px]">
      <h2 className="text-HM font-extra-bold text-center mt-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8]">کوئرا تسک منیجر</h2>
      <div className="mt-[27px] mr-[50px] ml-[16px] ">
        <div className="flex select-none" onClick={toggleListVisibility}>
          <svg className={`transform transition-transform ${isListVisible ? '' : 'rotate-90'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="ml-auto text-right text-TM font-extra-bold">ورک اسپیس ها</p>
        </div>
        <div className={`transition-opacity ${isListVisible ? 'opacity-100' : 'opacity-0'} ease-in-out duration-300`}>
          <Searchbox />
        </div>
      </div>
      <div className="w-[276px] bg-stone-500 h-[89px] absolute bottom-[32px] mx-[32px]" />
    </div>
  );
};

export default Index;
