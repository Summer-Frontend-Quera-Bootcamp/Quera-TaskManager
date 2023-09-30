    import React, { useState, useEffect } from 'react';
    import { Modal, Button } from '@material-ui/core';
    import LinkIcon from '../iconComponents/LinkIcon';
    import DropDown from '../iconComponents/DropDown';
    import MultiplicationSign from '../iconComponents/MultiplicationSign';
    import {ReactComponent  as GmailIcon } from '../../GmailImages/gmailIcon.svg';
    // interface ModelProps {
    //   handleClick?: () => void; 
    // }
    const Index= () => {
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

        <Modal open={open} onClose={handleClose} dir='rtl' >
            <div className = 'flex justify-center '>
                <div className='w-[250px] h-[450px] bg-white rounded-lg p-[16px] shadow-md ' >
                    <div>
                        <h1 className ='font-extra-bold text-TXS'>دسترسی کامل</h1>
                        <p className ='mt-[8px] font-normal text-TXS'>توانایی ساختن تسک در این پروژه، ویرایش تنظیمات پروژه و حذف پروژه</p>
                    </div>
                    <div className=" my-[16px] border-b border-[#F4F4F4]-400"></div>

                    <div>
                        <h1 className ='font-extra-bold text-TXS'>دسترسی ویرایش</h1>
                        <p className ='mt-[8px] font-normal text-TXS'> توانایی ویرایش تسک در این پروژه و ویرایش تنظیمات پروژه. نمی‌تواند پروژه را حذف یا تسک جدید بسازد. </p>
                    </div>
                    <div className=" my-[16px] border-b border-[#F4F4F4]-400"></div>

                    <div>
                        <h1 className ='font-extra-bold text-TXS'>دسترسی کامنت</h1>
                        <p className ='mt-[8px] font-normal text-TXS'>توانایی کامنت گذاشتن دارد. می‌تواند ستون تسک‌ها را تغییر دهد اما توانایی ویرایش تنظیمات پروژه را ندارد.</p>
                    </div>
                    <div className=" my-[16px] border-b border-[#F4F4F4]-400"></div>

                    <div>
                        <h1 className ='font-extra-bold text-TXS'>فقط دسترسی مشاهده</h1>
                        <p className ='mt-[8px] font-normal text-TXS'>توانایی گذاشتن کامنت یا ویرایش تسک‌ها را ندارد.</p>
                    </div>

                    
                </div>
            </div>
        </Modal>
        </div>
    );
    };

    export default Index;