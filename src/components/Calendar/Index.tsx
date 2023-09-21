import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

const Index = () => {
  return (
    <div className="absolute top-[187px] left-[51px] right-[356px] bottom-[58px] overflow-hidden border ">
    <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
    />
    </div>
  )
}

export default Index
