import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CourseDetail = () => {
  const { courseName } = useParams();
  const [showAlert, setShowAlert] = useState(false);

  const handleClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="relative p-6 w-full max-w-6xl">
      <CourseNavbar />
      <div className="mb-6 relative bg-[#32AC71FF] w-full h-[200px] rounded-lg shadow-md p-4">
        <h1 className="text-3xl font-bold text-white absolute bottom-4 left-4">
          {courseName}
        </h1>
        <Link
          to="/CourseEdit"
          className="absolute flex top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Edit Course
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute bottom-4 right-4 w-6 h-6 text-white cursor-pointer"
          onClick={handleClick}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
      </div>

      {showAlert && (
        <div
          className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3 mb-6"
          role="alert"
        >
          <svg
            className="fill-current w-4 h-4 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
          </svg>
          <p>Leader is too aggresive.</p>
        </div>
      )}

      <div className="grid grid-cols-5 gap-4 mt-6">
        <div className="col-span-1 ">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-bold mb-2 ">Class Code</h2>
            <p className="text-[#33864FFF] text-[18px] leading-[28px] font-normal ">
              i4gp7e4
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md mt-2">
            <h2 className="font-bold mb-2">Upcoming</h2>
            <p>There are no upcoming assignments</p>
            <button className="mt-[12px] text-[#33864FFF] text-[16px] leading-[18px] font-normal relative left-32 ">
              See all
            </button>
          </div>
        </div>

        <div className="col-span-4 gap-4">
          <div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="font-bold mb-2">Announcements</h2>
              <p>No announcements</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md mt-2">
              <h2 className="font-bold mb-2">Class Communication</h2>
              <p>Use the board to communicate with your class</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseNavbar = () => {
  const { courseName } = useParams();

  return (
    <ul className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6 gap-6 list-none text-[#565E6CFF] text-[14px] leading-[18px] font-normal">
      <li className="menu-item">
        <Link
          to={`/CourseHome/${courseName}`}
          className="hover:text-[#4D7E43FF] "
        >
          Home
        </Link>
      </li>
      <li className="menu-item">
        <Link
          to={`/CourseAssignments/${courseName}`}
          className="hover:text-[#4D7E43FF]"
        >
          Assignments
        </Link>
      </li>
      <li className="menu-item">
        <Link
          to={`/CoursePeople/${courseName}`}
          className="hover:text-[#4D7E43FF]"
        >
          Everyone
        </Link>
      </li>
      <li className="menu-item">
        <Link
          to={`/CourseGrades/${courseName}`}
          className="hover:text-[#4D7E43FF]"
        >
          Grade
        </Link>
      </li>
    </ul>
  );
};

export default CourseDetail;
