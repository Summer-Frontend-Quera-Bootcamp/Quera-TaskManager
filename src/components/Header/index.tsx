const index = () => {
    return (
        <header className = "m-[80px] mb-[0px]">
            <ul className="flex flex-row-reverse items-center">
                <li className="ml-auto bg-clip-text bg-gradient-to-r text-HL from-[#118C80] to-[#4AB7D8] font-extra-bold text-transparent">کوئرا تسک منیجر </li>
                <li>ثبت‌نام نکرده‌ای؟</li>
                <li><Link to="/SignUp"><button className=" bg-[#208D8E]  mr-2 w-[95px] text-TS  font-extra-bold text-[#FFFFFF]  px-[26px] py-[8px] rounded-md  hover:bg-teal-700">ثبت‌نام</button></Link></li>
            </ul>
        </header>
    )
  }
  
  export default index
  