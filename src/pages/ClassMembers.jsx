import React from "react";
import CourseNavbar from "../components/CourseNavbar";

const teacher = { name: "Bui Tung", initial: "B" };
const students = [{ id: 1, name: "Bui Tung", initial: "B" }];

function ClassMembers() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex flex-col">
                <div className="flex flex-col items-center p-4">
                    <div className="w-full max-w-4xl">
                        <CourseNavbar />
                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-blue-600">Giao vien</h2>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                    />
                                </svg>
                            </div>
                            <div className="flex items-center mt-2">
                                <div className="flex items-center">
                                    <div className="flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full">
                                        {teacher.initial}
                                    </div>
                                    <span className="ml-2">{teacher.name}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-blue-600">Sinh vien</h2>
                                <div className="flex items-center">
                                    <span className="text-blue-600">1 sinh vien</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-6 h-6 ml-2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-5 w-5 text-blue-600"
                                    />
                                    <select className="ml-2 border border-gray-300 rounded px-2 py-1">
                                        <option>Thao tac</option>
                                    </select>
                                    <span className="ml-2 flex-1 text-right">A-Z</span>
                                </div>
                                {students.map((student) => (
                                    <div key={student.id} className="flex items-center mt-2">
                                        <input
                                            type="checkbox"
                                            className="form-checkbox h-5 w-5 text-blue-600"
                                        />
                                        <div className="flex items-center ml-2">
                                            <div className="flex items-center justify-center w-10 h-10 bg-purple-500 text-white rounded-full">
                                                {student.initial}
                                            </div>
                                            <span className="ml-2">{student.name}</span>
                                        </div>
                                        <div className="ml-auto flex items-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="1.5"
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassMembers;
