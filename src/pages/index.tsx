import { useSession } from 'next-auth/client'
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from 'moment';

import Navbar from "@/components/navbar";
import events from "@/data/events";

const localizer = momentLocalizer(moment);
let allViews = Object.keys(Views).map(k => Views[k])

export default function Home() {
  const [session, loading] = useSession()

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="divide-y divide-gray-100">
      <Navbar />
      <Calendar
        localizer={localizer}
        events={events}
        views={allViews}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )
}
