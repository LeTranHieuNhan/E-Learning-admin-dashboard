import React, {useState, useEffect, useRef} from "react";
import {CreateStudent} from "./CreateStudent";
import {deleteUser, updateUser} from "../redux/actions/userAction";
import {useDispatch} from "react-redux";

const StudentTable = ({students = null}) => {
        const [activeTab, setActiveTab] = useState("All users");
        const [selectedStudentId, setSelectedStudentId] = useState(null);
        const [currentPage, setCurrentPage] = useState(1);
        const [isEditModalOpen, setIsEditModalOpen] = useState(false);
        const [studentToEdit, setStudentToEdit] = useState(null);
        const studentsPerPage = 10;
        const dispatch = useDispatch();

        const dropdownRef = useRef(null);

        const handleActionClick = (id) => {
            setSelectedStudentId(selectedStudentId === id ? null : id);
        };

        const handleDelete = (studentId) => {
            console.log(studentId)
            if (window.confirm('Are you sure you want to delete this user?')) {
                dispatch(deleteUser(studentId));
            }
        };

        const handleEditClick = (student) => {

            setStudentToEdit(student);
            setIsEditModalOpen(true);
        };
        const handleEditUser = (student) => {
            updateUser(student);
            setIsEditModalOpen(false); // Close the modal after updating
        }

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setSelectedStudentId(null);
            }
        };
        const truncateBio = (text, wordLimit) => {
            const words = text.split(' ');
            if (words.length > wordLimit) {
                return words.slice(0, wordLimit).join(' ') + '...';
            }
            return text;
        };
        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);


        const filteredStudents = students.filter(
            (student) =>
                activeTab === "All users" ||
                (activeTab === "ADMIN" && student?.role?.name === "ADMIN") ||
                (activeTab === "USER" && student?.role?.name === "USER")
        );

        const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);
        const displayedStudents = filteredStudents.slice(
            (currentPage - 1) * studentsPerPage,
            currentPage * studentsPerPage
        );

        const handlePageChange = (pageNumber) => {
            setCurrentPage(pageNumber);
        };

        const handlePreviousPage = () => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        };

        const handleNextPage = () => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
        };

        return (
            <div className="bg-white p-4 rounded shadow">
                <div className="mb-4">
                    <button
                        onClick={() => setActiveTab("All users")}
                        className={`mr-4 ${activeTab === "All users" ? "font-bold" : ""}`}
                    >
                        All users
                    </button>
                    <button
                        onClick={() => setActiveTab("USER")}
                        className={`mr-4 ${activeTab === "USER" ? "font-bold" : ""}`}
                    >
                        User
                    </button>
                    <button
                        onClick={() => setActiveTab("ADMIN")}
                        className={`${activeTab === "ADMIN" ? "font-bold" : ""}`}
                    >
                        Admin
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Bio
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Occupation
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ROLE
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {displayedStudents.map((student) => (
                            <tr key={student?.id}>
                                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                    <img
                                        src={student?.avatar}
                                        alt={student?.name}
                                        className="w-10 h-10 rounded-full mr-4"
                                    />
                                    {student?.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap  ">
                                    {truncateBio(student?.bio, 5)}


                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{student?.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{student?.occupation || "Student"}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                            student?.role?.name === "USER"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-red-100 text-red-800"
                                        }`}
                                    >
                                       {student?.role?.name}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium relative">
                                    <button onClick={() => handleActionClick(student?.id)}>
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
                                    {selectedStudentId === student?.id && (
                                        <div
                                            ref={dropdownRef}
                                            className="absolute top-0 right-0 mt-8 mr-2 bg-white border border-gray-200 rounded shadow-lg z-10"
                                        >
                                            <a
                                                href="#"
                                                className="flex items-center px-4 py-2 text-yellow-600 hover:bg-yellow-100"
                                                onClick={() => handleEditClick(student)}
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
                                            </a>
                                            <a
                                                onClick={() => handleDelete(student?.id)}
                                                href="#"
                                                className="flex items-center px-4 py-2 text-red-600 hover:bg-red-100"
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
                                            </a>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-center">
                    <button
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                        className={`mx-1 px-3 py-1 border rounded ${
                            currentPage === 1 ? "bg-gray-200 text-gray-500" : "bg-white text-gray-700"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                        </svg>
                    </button>
                    {Array.from({length: totalPages}, (_, index) => index + 1).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => handlePageChange(pageNumber)}
                            className={`mx-1 px-3 py-1 border rounded-md ${
                                pageNumber === currentPage ? "bg-[#5860CAFF] text-white" : "bg-white text-gray-700"
                            }`}
                        >
                            {pageNumber}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`mx-1 px-3 py-1 border rounded ${
                            currentPage === totalPages ? "bg-gray-200 text-gray-500" : "bg-white text-gray-700"
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
                {/* Render the CreateStudent component */}
                {isEditModalOpen && (
                    <CreateStudent
                        isOpen={isEditModalOpen}
                        setIsOpen={setIsEditModalOpen}
                        onCreate={handleEditUser}
                        actionName="Edit"
                        student={studentToEdit} // Pass the student data to be edited
                    />
                )}
            </div>
        );
    }
;

export default StudentTable;
