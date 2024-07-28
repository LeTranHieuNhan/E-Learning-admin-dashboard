import React from "react";
import Sidebar from "../components/Sidebar";
import CourseNavbar from "../components/CourseNavbar";

const assignments = [
    { id: 1, title: "Exploring the Ethical Implications of AI", time: "10:37" },
    { id: 2, title: "First Class", time: "10:31" },
];

function ClassAssignment() {
    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex flex-col">
                <div className="flex flex-col items-center p-4">
                    <div className="w-full max-w-4xl">
                        <CourseNavbar />
                        <button className="bg-[#379AE6FF] text-white py-2 px-4 rounded-[18px] mb-4">
                            Create
                        </button>
                        <div className="space-y-4">
                            {assignments.map((assignment) => (
                                <div
                                    key={assignment.id}
                                    className="flex justify-between items-center bg-gray-100 p-4 rounded shadow"
                                >
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="text-white bg-[#4285F4FF] rounded-[14px] w-[30px] h-[30px]"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                                            />
                                        </svg>
                                        <span className="ml-2 text-[#171A1FFF] text-[14px] leading-[18px] font-normal">
                      {assignment.title}
                    </span>
                                    </div>
                                    <span className="text-gray-500">{assignment.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassAssignment;
