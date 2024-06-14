// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";

// const colors = [
//   "bg-[#32AC71FF]",
//   "bg-gray-500",
//   "bg-blue-500",
//   "bg-red-500",
//   "bg-yellow-500",
//   "bg-[#6E75D1FF]",
// ];

// const getRandomColor = () => {
//   return colors[Math.floor(Math.random() * colors.length)];
// };

// const CourseCard = ({ client }) => {
//   const [showActions, setShowActions] = useState(false);
//   const actionsRef = useRef(null);
//   const location = useLocation();
//   const [bgColor, setBgColor] = useState(getRandomColor());

//   const handleActionClick = () => {
//     setShowActions(!showActions);
//   };

//   const handleClickOutside = (event) => {
//     if (actionsRef.current && !actionsRef.current.contains(event.target)) {
//       setShowActions(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     setShowActions(false);
//   }, [location]);

//   return (
//     <div className={`w-[237px] h-[229px] rounded-[6px] ${bgColor} relative`}>
//       <div className="p-4 flex justify-between items-start">
//         <h2 className="text-white font-bold">{client.Coursename}</h2>
//         <button onClick={handleActionClick} className="text-white">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//             className="w-5 h-5"
//           >
//             <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
//           </svg>
//         </button>
//       </div>
//       {showActions && (
//         <div
//           ref={actionsRef}
//           className="absolute top-2 right-3 mt-8 mr-2 bg-white border border-gray-200 rounded shadow-lg z-10"
//         >
//           <Link to="/CourseEdit">
//             <a className="flex items-center px-4 py-2 text-yellow-600 hover:bg-yellow-100">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="w-5 h-5 mr-2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
//                 />
//               </svg>
//               Edit
//             </a>
//           </Link>

//           <a
//             href="#"
//             className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5 mr-2"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0 2.109 2.109 0 0 0-2.09 2.201v.916m7.5 0a48.108 48.108 0 0 0-7.5 0"
//               />
//             </svg>
//             Delete
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// const CourseList = () => {
//   const clients = [
//     { Coursename: "J2YB Class", ID: 1 },
//     { Coursename: "System Design class", ID: 2 },
//     { Coursename: "AI1 Class", ID: 3 },
//     { Coursename: "Python AI class", ID: 4 },
//     { Coursename: "Tailwindcss class", ID: 5 },
//     { Coursename: "SQL class", ID: 6 },
//     { Coursename: "Game Class", ID: 7 },
//     { Coursename: "Business Class", ID: 8 },
//   ];

//   return (
//     <div className="relative p-4">
//       <div className="absolute top-4 left-4">
//         <Link to="/CourseEdit">
//           <button className="bg-[#6E75D1FF] text-white px-4 py-2 rounded hover:bg-purple-700">
//             Create Course
//           </button>
//         </Link>
//       </div>
//       <div className="flex flex-wrap mt-16 gap-4">
//         {clients.map((client) => (
//           <CourseCard key={client.ID} client={client} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseList;


// CourseCard.js
import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const colors = [
  "bg-[#32AC71FF]",
  "bg-gray-500",
  "bg-blue-500",
  "bg-red-500",
  "bg-yellow-500",
  "bg-[#6E75D1FF]",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const CourseCard = ({ client }) => {
  const [showActions, setShowActions] = useState(false);
  const actionsRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState(getRandomColor());

  const handleActionClick = (e) => {
    e.stopPropagation();  // Prevent triggering the card click
    setShowActions(!showActions);
  };

  const handleClickOutside = (event) => {
    if (actionsRef.current && !actionsRef.current.contains(event.target)) {
      setShowActions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowActions(false);
  }, [location]);

  const handleCardClick = () => {
    navigate(`/CourseHome/${client.Coursename}`);
  };

  return (
    <div
      className={`w-[237px] h-[229px] rounded-[6px] ${bgColor} relative cursor-pointer`}
      onClick={handleCardClick}
    >
      <div className="p-4 flex justify-between items-start">
        <h2 className="text-white font-bold">{client.Coursename}</h2>
        <button onClick={handleActionClick} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>
        </button>
      </div>
      {showActions && (
        <div
          ref={actionsRef}
          className="absolute top-2 right-3 mt-8 mr-2 bg-white border border-gray-200 rounded shadow-lg z-10"
        >
          <Link to="/CourseEdit" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center px-4 py-2 text-yellow-600 hover:bg-yellow-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Edit
            </div>
          </Link>

          <div
            className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100"
            onClick={(e) => {
              e.stopPropagation();
              console.log('Delete clicked');
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0 2.109 2.109 0 0 0-2.09 2.201v.916m7.5 0a48.108 48.108 0 0 0-7.5 0"
              />
            </svg>
            Delete
          </div>
        </div>
      )}
    </div>
  );
};

const CourseList = () => {
  const clients = [
    { Coursename: "J2YB Class", ID: 1 },
    { Coursename: "System Design class", ID: 2 },
    { Coursename: "AI1 Class", ID: 3 },
    { Coursename: "Python AI class", ID: 4 },
    { Coursename: "Tailwindcss class", ID: 5 },
    { Coursename: "SQL class", ID: 6 },
    { Coursename: "Game Class", ID: 7 },
    { Coursename: "Business Class", ID: 8 },
    { Coursename: "Business Class1", ID: 9 },
  ];

  return (
    <div className="relative p-4">
      <div className="absolute top-4 left-4">
        <Link to="/CourseEdit">
          <button className="bg-[#6E75D1FF] text-white px-4 py-2 rounded hover:bg-purple-700">
            Create Course
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap mt-16 gap-4">
        {clients.map((client) => (
          <CourseCard key={client.ID} client={client} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
