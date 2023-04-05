import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';




const DefaultCalendar = ()=> {
    return <FullCalendar plugins={[dayGridPlugin]} initialView={"dayGridMonth"}/>
}

export default DefaultCalendar;
