import React, { useState, useEffect } from 'react';
import jalaliMoment from 'jalali-moment';

const PersianCalendar = () => {
  const persianMonths = [
    "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",
  ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const [animationClass, setAnimationClass] = useState('initial-animation');

  const changeMonth = (increment:number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + increment);

    setAnimationClass('translate-y-3');

    setTimeout(() => {
      setCurrentDate(newDate);
      setAnimationClass('translate-y-0');
    }, 300);
  };

  const formatDate = (date:Date) => {
    const persianDate = jalaliMoment(date).format('jYYYY jM');
    const translatedMonth = persianMonths[parseInt(persianDate.split(' ')[1]) - 1];
    return `${translatedMonth} ${persianDate.split(' ')[0]}`;
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimationClass('translate-y-0');
    }, 100);
  }, []);

  return (
    <div className={`flex flex-row-reverse items-center transform ${animationClass} transition-transform duration-300 ease-in-out`}>
      <p className="text-neutral-700 text-xs font-normal mr-[40px] mt-[24px] mb-[18.5px] select-none">امروز</p>
      <button onClick={() => changeMonth(1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="-rotate-90 mt-1">
          <path d="M8 10L12 14L16 10" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button onClick={() => changeMonth(-1)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90 mt-1">
          <path d="M8 10L12 14L16 10" stroke="#323232" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <p className="text-stone-900 text-xs font-normal mt-2 mb-1 select-none">{formatDate(currentDate)}</p>
    </div>
  );
};

export default PersianCalendar;
