import React from "react";

const EventList = ({selectedDateChoose}) => {
  const [events,setEvent] = React.useState([
    {
      day: 5,
      month: 5,
      title: "Dribbble Meet Up",
      date: "05 March 2016",
      time: "6:00pm",
      desc: "Hello World",
      imageUrl:
        "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
    },
    {
      day: 5,
      month: 5,
      title: "Design Meeting",
      date: "08 March 2016",
      time: "5:00pm",
      desc: "Hello World",
      imageUrl:
        "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
    },
    {
      day: 5,
      month: 5,
      title: "Annual Conference",
      date: "12 March 2016",
      time: "1:00pm",
      desc: "Hello World",
      imageUrl:
        "https://cdn.vectorstock.com/i/1000v/51/87/student-avatar-user-profile-icon-vector-47025187.jpg",
    },
  ]);

  return (
    <div className="bg-gray-800 rounded-lg p-8">
      {events.map((event, index) => {
        console.log("at heere", selectedDateChoose,event)
        if(selectedDateChoose.day=== event.day && selectedDateChoose.month === event.month){
          return(
            <div key={index} className="flex items-center mb-4">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-white font-semibold">{event.title}</h3>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                </div>
              </div>
              <div className="pl-10 ml-auto text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => alert(event.desc)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="h-10 border-b-4" ></div>
            </div>
          )
        }
        else(
          <div className="flex items-center mb-4">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-white font-semibold">{event.title}</h3>
                <div className="flex items-center text-gray-400">
                  <span className="mr-2">📅 {event.date}</span>
                  <span>⏰ {event.time}</span>
                </div>
              </div>
              <div className="pl-10 ml-auto text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                  onClick={() => alert(event.desc)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
              <div className="h-10 border-b-4" ></div>
            </div>
        )
      } )}
      <div className="text-gray-400 flex justify-center">
        <span>&#x2193;</span>
      </div>
    </div>
  );
};

const Calendar = ({setSelectedDateChoose, selectedDateChoose}) => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [month, setMonth] = React.useState(new Date().getMonth() + 1);
  const [year, setYear] = React.useState(new Date().getFullYear());

  const daysInMonth = new Date(year, month, 0).getDate();
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
  const lastDayOfMonth = new Date(year, month, 0).getDay();
  console.log("daysInMonth", daysInMonth);
  console.log("firstDayOfMonth", firstDayOfMonth);
  console.log("lastDayOfMonth", lastDayOfMonth);
  const daysArray = [];

  // Add empty spaces for preceding days
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push("");
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  // Add empty spaces for trailing days
  const trailingDays = 42 - (firstDayOfMonth + daysInMonth);
  for (let i = 0; i < trailingDays; i++) {
    daysArray.push("");
  }

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log("here",selectedDateChoose.day)
  const markedDays = [`${selectedDateChoose.day}`]; // You can change this based on your requirements

  const handleDateClick = (day,month) => {
    setSelectedDateChoose({
      day,month
    })
  }


  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="bg-red-500 text-white p-4 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <span
          onClick={() => setMonth(month - 1)}
          className="text-sm font-semibold"
        >
          &lt;
        </span>
        <span className="text-lg font-bold">
          {monthNames[month - 1]} {year}
        </span>
        <span
          onClick={() => setMonth(month + 1)}
          className="text-sm font-semibold"
        >
          &gt;
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day) => (
          <span
            key={day}
            className="text-center text-sm text-black font-semibold"
          >
            {day}
          </span>
        ))}
        {daysArray.map((day, index) => (
          <span
            onClick={() => handleDateClick(day,month)}
            key={index}
            className={`text-center py-1 rounded-full w-6 ${
              day !== "" && selectedDateChoose.day === day
                ? "bg-white text-red-500"
                : ""
            }`}
          >
            {day !== "" ? day : ""}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function App() {

  const [selectedDateChoose , setSelectedDateChoose ] = React.useState({
    day: 5,
    month: 5
  });
  console.log(selectedDateChoose)



  return (
    <div class="flex justify-center items-center h-screen">
      <div class="bg-white-200 p-4 rounded-lg">
        <div class="flex justify-center items-center h-screen">
          <div class="grid grid-cols-2 gap-4 bg-white">
            <div class="bg-white text-white font-bold py-2 px-4 rounded">
              <Calendar selectedDateChoose={selectedDateChoose} setSelectedDateChoose={setSelectedDateChoose} />
            </div>
            <div class="bg-white text-white font-bold py-4 px-4 rounded">
              <EventList selectedDateChoose={selectedDateChoose} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
