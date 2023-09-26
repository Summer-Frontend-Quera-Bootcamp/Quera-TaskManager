import React, { useState } from 'react';
import { Modal, Button } from '@material-ui/core';
import LinkIcon from '../iconComponents/LinkIcon';
import DropDown from '../iconComponents/DropDown';
import MultiplicationSign from '../iconComponents/MultiplicationSign';
import {ReactComponent  as GmailIcon } from '../../GmailImages/gmailIcon.svg';
const SimpleModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpen(false);
  };

  const btnHandler = (event: React.MouseEvent<HTMLButtonElement>) =>{
    event.preventDefault();
  }

  return (
    <div >
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Modal
      </Button>

      <Modal open={open} onClose={handleClose} dir='rtl'  >
        <div className=" flex  justify-center items-center h-screen ">
          <div className="modal-content p-[20px] border-gray-400 rounded-xl bg-white w-[470px] h-[348px]  text-center">
            <form action="">
              <div className='flex mb-[40px] items-center'>
                <button onClick={handleClose}><MultiplicationSign  /></button>
                <h2 className='font-extra-bold text-HXS mx-[98px] '>به اشتراک‌گذاری پروژه‌</h2>
              </div>
              
                  <div className='flex font-normal text-TS'>
                    <input type="text" placeholder='دعوت با ایمیل' className='w-full   border-gray-400 rounded-lg rounded-l-none bg-[#F0F1F3] p-2 focus:outline-none' />
                      <button onClick={btnHandler} className='bg-[#208D8E] p-2 rounded-lg rounded-r-none w-[90px] text-white'>ارسال</button>
                  </div>
            </form>
          <div className='mt-[24px] w-full flex font-normal text-TS '>
            <LinkIcon/>
            <p>لینک خصوصی</p>
            <button className='mr-auto px-[12px] py-[2px] border  border-[#E9EBF0] rounded-md	'>کپی لینک</button>
          </div>

          <div className='mt-[20px] w-full  font-normal text-TS'>
            <p className='text-[#7D828C] text-right mb-[16px]'>اشتراک‌گذاشته شده با</p>
            <div className='flex items-center'>
              
            <GmailIcon className='w-[34px] h-[37px] rounded-full'/>
            <p className='text-right ml-[12px] mr-[7px] '>من</p>
            <button className='bg-[#D0EBFF] py-[4px] px-[8px] text-[#228BE6] rounded-md'>workspace owner</button>
            <button className=' py-[4px] px-[8px] border  border-[#E9EBF0] rounded-md mr-auto '>دسترسی کامل</button>
            </div>
          </div>

          <div className='mt-[22px] items-center w-full  font-normal text-TS flex'>
          <GmailIcon className='w-[34px] h-[37px] rounded-full'/>
            <p className='text-right ml-[12px] mr-[7px] '>sararahimi@gmail.com</p>
            <div className='flex py-[5px]  px-[8px] border W-[117PX]  border-[#E9EBF0] rounded-md mr-auto items-center '>
              <button className='ml-[10px] '>دسترسی کامل </button>
              <DropDown />
            </div>
          </div>

        </div>
    
        </div>
      </Modal>
    </div>
  );
};

export default SimpleModal;