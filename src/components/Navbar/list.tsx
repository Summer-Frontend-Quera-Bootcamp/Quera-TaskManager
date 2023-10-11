import { useState } from "react";

const List = () => {
  const [isRotated1, setIsRotated1] = useState(false);
  const [isRotated2, setIsRotated2] = useState(false);
  const [isRotated3, setIsRotated3] = useState(false);

  const handleClick1 = () => {
    setIsRotated1(!isRotated1);
  };

  const handleClick2 = () => {
    setIsRotated2(!isRotated2);
  };

  const handleClick3 = () => {
    setIsRotated3(!isRotated3);
  };
  return (
    <div>
      <div className=" mt-2  flex items-center justify-end">
        <h1 className="text-right text-stone-900 text-xl font-extrabold mr-2 select-none">
          پروژه اول
        </h1>
        <svg
          className={`cursor-pointer`}
          style={{
            transform: isRotated1 ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
          onClick={handleClick1}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 10V10C1 5.029 5.029 1 10 1V1C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 9L10 12L7 9"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="mr-6 mt-6 text-right">
        <div className="mt-[40px]  flex items-center justify-end">
          <div className="text-right text-stone-900 text-xs font-normal capitalize mr-2">
            تسک
          </div>
          <div className="mr-2 w-[71px] h-9 bg-pink-500 text-white rounded grid place-items-center">
            Pending
          </div>
          <div>
            <svg
              className={`cursor-pointer `}
              onClick={handleClick2}
              style={{
                transform: isRotated2 ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 10V10C1 5.029 5.029 1 10 1V1C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
                stroke="#323232"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 9L10 12L7 9"
                stroke="#323232"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-[40px]  flex items-center justify-end">
          <div className="mr-2 w-[95px] h-9 bg-orange-500 text-white rounded grid place-items-center">
            In progress
          </div>
        </div>

        <div className="mt-[40px]  flex items-center justify-end">
          <div className="text-right text-stone-900 text-xs font-normal capitalize mr-2">
            تسک
          </div>
          <div className="mr-2 w-[50px] h-9 bg-green-500 text-white rounded grid place-items-center">
            Done
          </div>

          <svg
            className={`cursor-pointer `}
            onClick={handleClick3}
            style={{
              transform: isRotated3 ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 10V10C1 5.029 5.029 1 10 1V1C14.971 1 19 5.029 19 10V10C19 14.971 14.971 19 10 19V19C5.029 19 1 14.971 1 10Z"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13 9L10 12L7 9"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default List;
