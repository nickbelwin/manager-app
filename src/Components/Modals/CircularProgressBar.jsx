// import React from 'react';
// import PropTypes from 'prop-types';

// const CircularProgressBar = ({ percentage, progressColor, bgColor, showPercentage }) => {
//   const radius = 50;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div style={{ position: 'relative', width: '120px', height: '120px' }}>
//       <svg width="120" height="120" viewBox="0 0 120 120">
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           stroke={bgColor}
//           strokeWidth="10"
//           fill="none"
//         />
//         <circle
//           cx="60"
//           cy="60"
//           r={radius}
//           stroke={progressColor}
//           strokeWidth="10"
//           fill="none"
//           strokeDasharray={circumference}
//           strokeDashoffset={strokeDashoffset}
//           strokeLinecap="round"
//           transform="rotate(-90 60 60)"
//         />
//       </svg>
//       {showPercentage && (
//         <div
//           style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             fontSize: '20px',
//             color: progressColor,
//           }}
//         >
//           {percentage}%
//         </div>
//       )}
//     </div>
//   );
// };

// CircularProgressBar.propTypes = {
//   percentage: PropTypes.number.isRequired,
//   progressColor: PropTypes.string,
//   bgColor: PropTypes.string,
//   showPercentage: PropTypes.bool,
// };

// CircularProgressBar.defaultProps = {
//   progressColor: '#3498db',
//   bgColor: '#e6e6e6',
//   showPercentage: true,
// };

// export default CircularProgressBar;
import React from 'react';
import PropTypes from 'prop-types';

const CircularProgressBar = ({ percentage, progressColor, bgColor, showPercentage }) => {
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: '120px', height: '120px' }}>
      <svg width="120" height="120" viewBox="0 0 120 120">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={bgColor}
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke={progressColor}
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />
      </svg>
      {showPercentage && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '20px',
            color: progressColor,
            fontWeight: 'bold',
          }}
        >
          {percentage}%
        </div>
      )}
    </div>
  );
};

CircularProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  progressColor: PropTypes.string,
  bgColor: PropTypes.string,
  showPercentage: PropTypes.bool,
};

CircularProgressBar.defaultProps = {
  progressColor: '#3498db',
  bgColor: '#e6e6e6',
  showPercentage: true,
};

export default CircularProgressBar;