import {FaSearch} from 'react-icons/fa'
const index = () => {
  return (
    <div className="flex justify-end mt-[16px]">
      <div className="flex items-center">
        <FaSearch className="text-[#AAAAAA] text-TS"/>
        <input className="w-full text-right outline-none bg-[#F6F7F9] placeholder-[#AAAAAA] placeholder:text-TS" type="text" placeholder="جستوجو  کنید"/>
      </div>
    </div>
    )
}

export default index
