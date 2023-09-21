const Index = () => {
    return (
        <div>
            <div className="fixed right-0 w-340 h-1024 bg-white flex flex-col">
            <div className="absolute left-[1/2] -ml-0.5 w-[0.5px] border-solid h-screen bg-[#AAAAAA]"></div>
                <div className="box-content h-[55px] w-[235px] float-right top-[40px] left-[55px] text-right leading-[55.27px] font-black text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8] mr-[50px] mt-[40px]">کوئرا تسک منیجر</div>
                <button className="bg-[#208D8E] w-[120px] h-[43px] rounded-lg ml-[125px] mt-[45px] " >
                    <div className="w-[65px] h-[35px] text-[#FFFFFF] font-extrabold text-xl leading-[34.55px] text-right flex ml-[20px]">بازگشت
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M4.47998 12.48H19.47" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.4829 6.48779L19.5199 12.4998L13.4829 18.5118" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </button>
                <div className="w-[266px] h-[190px] top-[249px] bg-[#FFFFFF] absolute left-[24px] flex flex-col">
                    <div className="right-0">اطلاعات فردی</div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )

}

export default Index