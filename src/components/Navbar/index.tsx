import { useState } from "react"
import SvgCol from "../iconComponents/col";
import SvgCelender from "../iconComponents/celender";
import SvgDoList from "../iconComponents/dolist";
const Index = () => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const handleClick = (index: number) => clickedIndex === index ? null : setClickedIndex(index);
  const setStyle = (index: number) => (clickedIndex === index ? { color: "#208D8E", fontWeight: "bold"} : {});
  return (
    <div className=" h-[125px] border-b-2 mt-[41px] mr-[16px] ml-[50px]">
      <div className="text-right border-b-2 h-[64px] flex items-center justify-between">
        <div className="flex">
          <p className="font-bold text-TM">اشتراک‌گذاری</p>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.53 7.52002L9.46997 10.56" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.4048 4.64228C17.1984 5.43582 17.1984 6.72242 16.4048 7.51596C15.6113 8.3095 14.3247 8.3095 13.5311 7.51596C12.7376 6.72241 12.7376 5.43582 13.5311 4.64228C14.3247 3.84873 15.6113 3.84873 16.4048 4.64228" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.53 16.4802L9.46997 13.4402" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M16.4048 16.4843C17.1984 17.2779 17.1984 18.5645 16.4048 19.358C15.6113 20.1515 14.3247 20.1515 13.5311 19.358C12.7376 18.5645 12.7376 17.2779 13.5311 16.4843C14.3247 15.6908 15.6113 15.6908 16.4048 16.4843" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.46542 10.5648C10.2582 11.3576 10.2582 12.6429 9.46542 13.4356C8.67266 14.2284 7.38733 14.2284 6.59457 13.4356C5.80181 12.6429 5.80181 11.3575 6.59457 10.5648C7.38734 9.77202 8.67266 9.77202 9.46542 10.5648" stroke="#323232" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className="flex flex-row-reverse items-center space-x-3">
          <h1 className="ml-3 text-HXS font-extra-bold">پروژه اول</h1>
          <div><svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18556e-08" x2="0.499999" y2="22" stroke="#999999"/>
            </svg>
          </div>
          <div className="flex">
          <p className="mr-1 font-extrabold text-TM cursor-pointer select-none" style={setStyle(0)} onClick={()=>handleClick(0)}>نمایش لیستی</p>
            
          <div style={setStyle(0)}>
            <SvgDoList/>
          </div>
          </div>
          <div><svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18556e-08" x2="0.499999" y2="22" stroke="#999999"/>
            </svg>
          </div>
          <div className="flex">
          <p className="mr-1 font-extrabold text-TM cursor-pointer select-none" style={setStyle(1)} onClick={()=>handleClick(1)}>نمایش ستونی</p>
          <div style={setStyle(1)}>
          <SvgCol />
          </div>
          </div>
          <div><svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18556e-08" x2="0.499999" y2="22" stroke="#999999"/>
            </svg>
          </div>
          <div className="flex">
          <p className="mr-1 font-extrabold text-TM cursor-pointer select-none" style={setStyle(2)} onClick={()=>handleClick(2)}>تقویم</p>
          <div style={setStyle(2)}>
          <SvgCelender/>
          </div>
          </div>
          <div><svg width="1" height="22" viewBox="0 0 1 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="0.5" y1="2.18556e-08" x2="0.499999" y2="22" stroke="#999999"/>
            </svg>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Index