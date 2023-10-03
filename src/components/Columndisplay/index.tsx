const Columndisplay: React.FC = () => {
    
    const containerStyle: React.CSSProperties = {
          overflowX: 'scroll',
          scrollbarWidth: 'none', // Firefox
    };
    return (
      <div
        className="flex flex-row-reverse mt-[182px] ml-[46px] mr-[356px] mb-[34px] h-[708px] overflow-x-scroll"
        style={containerStyle}
      >
        <div>
            <div className="bg-white ml-S w-[250px] rounded-2xl shadow-lg border-t-2 h-[44px] border-[#FD7E14] flex items-center justify-center">Open</div>
            <div></div>
        </div>
        <div>
            <div className="bg-white mx-S w-[250px] rounded-2xl shadow-lg border-t-2 h-[44px] border-[#4C6EF5] flex items-center justify-center">In Progress</div>
        </div>
        <div>
            <div className="bg-white mx-S w-[250px] rounded-2xl shadow-lg border-t-2 h-[44px] border-[#FAB005] flex items-center justify-center">Pending</div>
        </div>
        <div>
            <div className="bg-white mx-S w-[250px] rounded-2xl shadow-lg border-t-2 h-[44px] border-[#FD7E14] flex items-center justify-center">To Do </div>
        </div>
        <div>
            <div className="bg-white mx-S w-[250px] rounded-2xl shadow-lg border-t-2 h-[44px] border-[#FAB005] flex items-center justify-center">Done</div>
        </div>
      </div>
    );
  };
  
  export default Columndisplay;