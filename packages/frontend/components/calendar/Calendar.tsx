import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';



const DefaultCalendar = ()=> {
    return <FullCalendar aspectRatio={2} plugins={[dayGridPlugin]} initialView={"dayGridMonth"}/>
}

export default DefaultCalendar;
