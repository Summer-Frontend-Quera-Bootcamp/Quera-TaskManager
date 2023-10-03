import './index.css'
// import {FaSearch} from 'react-icons/fa'
const index = () => {
  return (
    
    <div className="flex justify-end mt-[16px] ">
      <div className="relative flex items-center w-full">
        {/* <FaSearch className="absolute right-0 text-black text-TS mr-[15px]"/> */}
        <input className="text-right w-full iconss outline-none bg-[#F6F7F9] placeholder-[#AAAAAA] placeholder:text-TS px-5 rounded-md py-1 placeholder:mr-1" type="text" placeholder="جستوجو  کنید"/>
      </div>
    </div>
    )
}

export default index
