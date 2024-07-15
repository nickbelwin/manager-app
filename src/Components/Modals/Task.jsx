// Task.js
import React, { useState, useEffect } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Task = ({ task, handleCompleteTask }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!task.end) {
      const interval = setInterval(() => {
        const startDate = new Date(task.start);
        const currentDate = new Date();
        const timeDiff = currentDate - startDate;
        const progressPercent = Math.min((timeDiff / (1000 * 60 * 60 * 24)) * 10, 100);
        setProgress(progressPercent);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      const startDate = new Date(task.start);
      const endDate = new Date(task.end);
      const timeDiff = endDate - startDate;
      const progressPercent = Math.min((timeDiff / (1000 * 60 * 60 * 24)) * 10, 100);
      setProgress(progressPercent);
    }
  }, [task]);

  return (
    <div className="flex items-center mb-4">
      <h3 className="text-lg font-bold mr-4 w-1/4">{task.title}</h3>
      <ProgressBar className="w-3/4" completed={progress} />
      <button 
        className="ml-4 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-700"
        onClick={() => { setProgress(100); }}
      >
        Mark as Completed
      </button>
    </div>
  );
};

export default Task;




// // Task.js
// import React, { useState, useEffect } from 'react';
// import ProgressBar from '@ramonak/react-progress-bar';

// const Task = ({ task }) => {
//   const [completed, setCompleted] = useState(false);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (!task.end) {
//       const interval = setInterval(() => {
//         const startDate = new Date(task.start);
//         const currentDate = new Date();
//         const timeDiff = currentDate - startDate;
//         const progressPercent = Math.min((timeDiff / (1000 * 60 * 60 * 24)) * 10, 100);
//         setProgress(progressPercent);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else {
//       const startDate = new Date(task.start);
//       const endDate = new Date(task.end);
//       const timeDiff = endDate - startDate;
//       const progressPercent = Math.min((timeDiff / (1000 * 60 * 60 * 24)) * 10, 100);
//       setProgress(progressPercent);
//     }
//   }, [task]);

//   const handleComplete = () => {
//     setCompleted(true);
//     setProgress(100);
//   };

//   return (
//     <div className="p-4 bg-white rounded-lg shadow">
//       <h3 className="text-xl font-bold mb-2">{task.title}</h3>
//       <p className="text-gray-700 mb-4">{task.description}</p>
//       <p className="text-gray-600 mb-2">Start Date: {new Date(task.start).toLocaleDateString()}</p>
//       {task.end && <p className="text-gray-600 mb-4">End Date: {new Date(task.end).toLocaleDateString()}</p>}
//       <ProgressBar completed={progress} />
//       {!completed && (
//         <button 
//           className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//           onClick={handleComplete}
//         >
//           Mark as Completed
//         </button>
//       )}
//     </div>
//   );
// };

// export default Task;