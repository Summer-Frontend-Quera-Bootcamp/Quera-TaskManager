import React, { useState, ChangeEvent } from 'react';

const Personalinformation: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <section className="mt-[170px] mr-[58px] flex flex-col text-right">
        <h1 className=" font-bold text-HL">اطلاعات فردی</h1>
        <div className=" flex my-[32px]">
            <div className="flex flex-col mb-1  mt-2 justify-between items-center">
                <input
                type="file"
                id="btn"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageUpload}
                />
                <label htmlFor="btn" className="text-center border border-[#208D8E] text-[#208D8E] px-[10px] w-[192px] rounded-md py-2">
                ویرایش تصویر پروفایل
                </label>
                <p className="text-TXS">این تصویر برای عموم قابل نمایش است</p>
            </div>
            <div
          id="image"
          className="ml-[16px] w-[100px] h-[100px] rounded-full bg-red-300"
          style={{
            background: selectedImage ? `url(${selectedImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        </div>
        <form className="flex flex-col mt-[32px]"dir="rtl">
            <label>نام</label>
            <input className="border rounded-md h-[40px] mb-[16px] border-[#aaa] outline-none" type="text"></input>
            <label>نام خانوادگی</label>
            <input className="border rounded-md h-[40px] mb-[16px] border-[#aaa] outline-none" type="text"></input>
            <label>شماره موبایل</label>
            <input className="border rounded-md h-[40px] mb-[40px] border-[#aaa] outline-none" type="text"></input>
            <button type="submit" className="bg-[#208D8E] h-[40px] rounded-md text-white">ثبت تغییرات</button>
        </form>
    </section>
  )
}

export default Personalinformation