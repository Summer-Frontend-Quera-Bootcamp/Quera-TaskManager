// ========== import needed packages ==========
import { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'
import faLocale from '@fullcalendar/core/locales/fa'

// ========== import components here ==========
import Plussquare from '../iconComponents/Plussquare'
import Modal from './NewTaskModal'


const Index: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () =>{
    setModalOpen(true)
  }
  const closeModal = () =>{
    setModalOpen(false)
  }
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
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <h2>This is the modal content</h2>
                  <p>Any additional content you want to display here</p>
                </Modal>
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

