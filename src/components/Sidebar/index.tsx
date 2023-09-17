const index = () => {
  return (
    <div className="h-screen w-[340px] border-l-2">
      <h2 className="text-HM font-extra-bold  text-center mt-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#118C80] to-[#4AB7D8]">کوئرا تسک منیجر</h2>
      <div className="mt-[27px] mr-[50px] ml-[16px] ">
        <div className="flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10L12 14L16 10" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <p className="ml-auto text-right text-TM font-extra-bold">ورک اسپیس ها</p>
        </div>
        <div className="flex justify-end mt-[16px]">
            <input className="w-full text-right outline-none bg-[#F6F7F9] placeholder-[#AAAAAA] placeholder:text-TS" type="text" placeholder="جستوجو  کنید"/>
        </div>
      </div>
    </div>
  )
}

export default index
