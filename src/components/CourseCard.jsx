import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import EditCourseModal from "./EditCourseModal"; // Import the modal component
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
const CourseCard = ({ course, onDelete }) => {
    const [showActions, setShowActions] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const actionsRef = useRef(null);
    const location = useLocation();
    const [bgColor, setBgColor] = useState(getRandomColor());
    const navigate = useNavigate();

    const handleActionClick = (event) => {
        event.preventDefault();
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={`w-[237px] h-[229px] rounded-[6px] ${bgColor} relative`}>
            <Link to={`/CourseDetail/${course?.id}`} className="block w-full h-full">
                <div className="p-4 flex justify-between items-start">
                    <h2 className="text-white font-bold">{course?.title}</h2>
                    <button onClick={handleActionClick} className="text-white relative z-20">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                d="M10 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM10 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM11.5 15.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
                            />
                        </svg>
                    </button>
                </div>
            </Link>
            {showActions && (
                <div ref={actionsRef} className="absolute top-2 right-3 mt-8 mr-2 bg-white border border-gray-200 rounded shadow-lg z-10">
                    <div
                        onClick={openModal}
                        className="flex items-center px-4 py-2 text-yellow-600 hover:bg-yellow-100 cursor-pointer"
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
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                        Edit
                    </div>
                    <div
                        onClick={(event) => {
                            event.preventDefault();
                            onDelete(course.id);
                        }}
                        className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100 cursor-pointer"
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
            <EditCourseModal course={course} isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
};

export default CourseCard;
