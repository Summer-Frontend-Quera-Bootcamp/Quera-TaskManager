const Index = () => {
  return (
    <div className="flex justify-end mt-[16px]">
      <div className="relative flex w-full">
        <div className="flex flex-row-reverse w-full">
          <input
            className="text-right w-full outline-none bg-[#F6F7F9] placeholder-[#AAAAAA] placeholder:text-TS px-6 rounded-md py-1 placeholder:mr-2"
            type="text"
            placeholder="جستجو کنید"
          />
          <svg
            
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute  top-1/2 transform -translate-y-1/2"
          >
            <circle
              cx="11.0588"
              cy="11.0588"
              r="7.06194"
              stroke="#323232"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.0034 20.0034L16.0518 16.0518"
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

export default Index;
