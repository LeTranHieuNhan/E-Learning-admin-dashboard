import React from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseNavbar = () => {
    const { id } = useParams();

    return (
        <ul className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6 gap-6 list-none text-gray-700 text-sm leading-4 font-normal">
            <li className="menu-item">
                <Link to={`/CourseHome/${id}`} className="hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out">
                    Home
                </Link>
            </li>
            <li className="menu-item">
                <Link to={`/ClassAssignment/${id}`} className="hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out">
                    Assignments
                </Link>
            </li>
            <li className="menu-item">
                <Link to={`/ClassMembers/${id}`} className="hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out">
                    Everyone
                </Link>
            </li>
            <li className="menu-item">
                <Link to={`/CourseGrades/${id}`} className="hover:text-green-700 active:text-green-900 transition duration-300 ease-in-out">
                    Grade
                </Link>
            </li>
        </ul>
    );
};

export default CourseNavbar;
