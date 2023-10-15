// ========== import needed packages ==========
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import faLocale from '@fullcalendar/core/locales/fa'

// ========== import components here ==========
import Plussquare from '../iconComponents/Plussquare'


const Index = () => {
  return (
    <div className="absolute border top-[187px] left-[51px] right-[356px] bottom-[58px] overflow-hidden ">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          listPlugin,
          interactionPlugin
        ]}
        dayCellContent={(props) => {
          return (
            <div className="w-full h-full group">
              <div className="flex ">
                <button className="bg-[#208d8e] rounded-[3px] opacity-0 group-hover:opacity-100">
                  <Plussquare/>
                </button>
                <div className="">{props.dayNumberText}</div>
              </div>
            </div>
          )
        }}
        headerToolbar={false}
        locale={faLocale}
        contentHeight={"700px"}
        fixedWeekCount={false}
        dayCellClassNames={"relative right-0"}
        weekNumberClassNames={"bg-red-100"}
      />
      
      
    </div>
  )
}

export default Index
