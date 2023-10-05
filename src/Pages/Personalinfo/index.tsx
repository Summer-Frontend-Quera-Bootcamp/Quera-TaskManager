const Index = () => {
    return (
        <>
        <div className="w-[354px] h-[551px] float-right mr-[668px] mt-[170px] gap-[32px] relative">
            <div className="w-[177px] h-[54px] font-bold text-3xl leading-[54px] text-right float-right">اطلاعات فردی</div>
            <div className="w-[101px] h-[104px] rounded-[285.71px] bg-[#FFF3BF] flex ml-[248px] mt-[60px]" >
                <div className="w-[55px] h-[59px] text-[34.29px] font-medium leading-[59.22px] text-right text-[#FAB005] flex ml-[20px] mt-[20px]">NM</div>
            </div>
            <div className="w-[212px] h-[92px] gap-[16px] flex">
                <div className="w-[212px] h-[55px] rounded-lg border border-[#208D8E] p-[10px] gap-[10px] flex mt-[-97px] flex-col">
                    <div className="w-[192px] h-[55px] flex text-xl font-medium leading-[34.55px] text-right text-[#208D8E] ml-[5px]">ویرایش تصویر پروفایل</div>
                    <div className="w-[199px] h-[21px] flex mt-[16px] text-xs font-normal leading-5 text-right text-[#8A8989] ">این تصویر برای عموم قابل مشاهده است.</div>
                </div>
            </div>
            <div className="w-[354px] h-[248px] gap-[16px] flex mt-[-70px]">
                <div className="w-[354px] h-[72px] gap-[8px]" dir="rtl">
                    <div className="w-[17px] h-[24px] text-[14px] leading-6 font-normal text-right mr-1">نام</div>
                    <div className="w-[350px] h-[40px] rounded-md border mr-1 border-[#AAAAAA]"  inputMode="text"></div>
                </div>
            </div>
            <div className="w-[354px] h-[248px] gap-[16px] flex">
                <div className="w-[354px] h-[72px] gap-[8px] flex flex-col mt-[-170px]" dir="rtl">
                    <div className="w-[73px] h-[24px] text-[14px] leading-6 font-normal text-right mr-1">نام خانوادگی</div>
                    <div className="w-[350px] h-[40px] rounded-md border mr-1 border-[#AAAAAA]"  inputMode="text"></div>
                </div>
            </div>
             <div className="w-[354px] h-[248px] gap-[16px] flex">
             <div className="w-[354px] h-[72px] gap-[8px] flex flex-col mt-[-330px]" dir="rtl">
                    <div className="w-[73px] h-[24px] text-[14px] leading-6 font-normal text-right mr-1">شماره موبایل</div>
                    <div className="w-[350px] h-[40px] rounded-md border mr-1 border-[#AAAAAA]"  inputMode="numeric"></div>
                </div>
             </div>
             <div className="w-[354px] h-[40px] rounded-md gap-[4px] bg-[#208D8E] mt-[-423px] mr-1">
                <div className="w-[78px] h-[24px] text-sm font-extrabold leading-6 text-white ml-[145px] pt-[8px] flex ">ثبت تغییرات</div>
             </div>
        </div>


        </>
    )

}





export default Index