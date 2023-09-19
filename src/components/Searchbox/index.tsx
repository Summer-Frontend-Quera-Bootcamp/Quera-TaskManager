import {FaSearch} from 'react-icons/fa'
const index = () => {
  return (
    <div className="flex justify-end mt-[16px]">
      <div className="relative flex items-center">
        <FaSearch className="absolute right-0 text-black text-TS mr-[15px]"/>
        <input className="text-right outline-none bg-[#F6F7F9] placeholder-[#AAAAAA] placeholder:text-TS placeholder:right-2 px-5 py-1 placeholder:mr-[20px]" type="text" placeholder="جستوجو  کنید"/>
      </div>
    </div>
    )
}

export default index
