// MyCalendar.js
// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
// import TaskModal from './TaskModal';
// import TaskList from './TaskList';

// const locales = {
//   'en-US': enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const MyCalendar = () => {
//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const handleSaveTask = (task) => {
//     setTasks([...tasks, {
//       start: new Date(task.startDate),
//       end: task.endDate ? new Date(task.endDate) : null,
//       title: task.title,
//       description: task.description,
//     }]);
//     setShowModal(false);
//   };
// console.log("task",tasks);
//   const handleCompleteTask = (completedTask) => {
//     setTasks(tasks.map(task =>
//       task.title === completedTask.title ? { ...task, end: new Date() } : task
//     ));
//   };

//   return (
//     <div className="flex">
//       <TaskList tasks={tasks} handleCompleteTask={handleCompleteTask} />
//       <div className="w-3/4 p-4 overflow-x-auto">
//         <button
//           className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//           onClick={() => setShowModal(true)}
//         >
//           Add Task
//         </button>
//         <div className="w-full overflow-x-auto">
//           <Calendar
//             localizer={localizer}
//             events={tasks}
//             style={{ width: '120%' }} // Increase width to allow horizontal scrolling
//           />
//         </div>
//         <TaskModal
//           show={showModal}
//           handleClose={() => setShowModal(false)}
//           handleSave={handleSaveTask}
//         />
//       </div>
//     </div>
//   );
// };

// export default MyCalendar;



// // App.js
// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
// import TaskModal from './TaskModal';
// import TaskList from './TaskList';

// const locales = {
//   'en-US': enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const MyCalendar = () => {
//   const [tasks, setTasks] = useState([]);
//   const [showModal, setShowModal] = useState(false);

//   const handleSaveTask = (task) => {
//     setTasks([...tasks, {
//       start: new Date(task.startDate),
//       end: task.endDate ? new Date(task.endDate) : null,
//       title: task.title,
//       description: task.description,
//     }]);
//     setShowModal(false);
//   };

//   const handleCompleteTask = (completedTask) => {
//     setTasks(tasks.map(task =>
//       task.title === completedTask.title ? { ...task, end: new Date() } : task
//     ));
//   };

//   return (
//     <div className="flex">
//       <TaskList tasks={tasks} handleCompleteTask={handleCompleteTask} />
//       <div className="w-3/4 p-4">
//         <button
//           className="mb-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//           onClick={() => setShowModal(true)}
//         >
//           Add Task
//         </button>
//         <Calendar
//           localizer={localizer}
//           events={tasks}
//           style={{ height: 500 }}
//         />
//         <TaskModal
//           show={showModal}
//           handleClose={() => setShowModal(false)}
//           handleSave={handleSaveTask}
//         />
//       </div>
//     </div>
//   );
// };

// export default MyCalendar;



// // Calendar.js
// import React, { useState } from 'react';
// import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
// import Task from './Task';
// import TaskModal from './TaskModal';

// const locales = {
//   'en-US': enUS,
// };

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales,
// });

// const events = [];

// const MyCalendar = () => {
//   const [tasks, setTasks] = useState(events);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const handleSelect = () => {
//     setShowModal(true);
//   };

//   const handleSaveTask = (task) => {
//     setTasks([...tasks, {
//       start: new Date(task.startDate),
//       end: task.endDate ? new Date(task.endDate) : null,
//       title: task.title,
//       description: task.description,
//     }]);
//     setShowModal(false);
//   };

//   const handleSelectEvent = (event) => {
//     setSelectedTask(event);
//   };

//   return (
//     <div>
//       <Calendar
//         localizer={localizer}
//         events={tasks}
//         selectable
//         onSelectSlot={handleSelect}
//         onSelectEvent={handleSelectEvent}
//         style={{ height: 500 }}
//       />
//       {selectedTask && <Task task={selectedTask} />}
//       <TaskModal
//         show={showModal}
//         handleClose={() => setShowModal(false)}
//         handleSave={handleSaveTask}
//       />
//     </div>
//   );
// };

// export default MyCalendar;

import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import Task from './Task';
import TaskModal from './TaskModal';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [];

const MyCalendar = () => {
  const [tasks, setTasks] = useState(events);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSelect = () => {
    setShowModal(true);
  };

  const handleSaveTask = (task) => {
    setTasks([...tasks, {
      start: new Date(task.startDate),
      end: task.endDate ? new Date(task.endDate) : null,
      title: task.title,
      description: task.description,
      color: '#7d75f2', // Custom task color
    }]);
    setShowModal(false);
  };

  const handleSelectEvent = (event) => {
    setSelectedTask(event);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={tasks}
        defaultView="week" // Set default view to week
        selectable
        onSelectSlot={handleSelect}
        onSelectEvent={handleSelectEvent}
        style={{ height: 500 }}
        eventPropGetter={(event) => ({
          style: {
            backgroundColor: event.color || '#3174ad', // Default task color or custom color
          },
        })}
      />
      {selectedTask && (
        <div onClick={(e) => { setSelectedTask(false) }} style={{ "backgroundColor": "#282c343a" }} className='w-full h-full fixed left-0 top-0 py-10 flex justify-center items-center'>
          <Task task={selectedTask} />
        </div>
      )}
      <TaskModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleSave={handleSaveTask}
      />
    </div>
  );
};

export default MyCalendar;
