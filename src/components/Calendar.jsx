import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const MyCalendar = () => {
const [value, onChange] = useState(new Date());
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-6">
         <h2 className="text-xl font-semibold mb-4 text-center text-blue-600">
           My Calendar
         </h2>
        <Calendar
          onChange={onChange}
          value={value}
          className="main-calendar-inner"
        />
        <div className="mt-4 text-center text-gray-700">
          Selected Date:{" "}
          <span className="font-semibold text-blue-500">
            {Array.isArray(value)
              ? `${value[0]?.toDateString()} - ${value[1]?.toDateString()}`
              : value?.toDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
export default MyCalendar;
