import React, { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import { createUser, fetchUsers, fetchNewUsers } from "../redux/actions/userAction";
import StudentCard from "./StudentCard";
import StudentTable from "./StudentTable";
import { CreateStudent } from "./CreateStudent";

const StudentList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const students = useSelector((state) => state.users.users);
    const newUsers = useSelector((state) => state.users.newUsers);
    const loadingNewUsers = useSelector((state) => state.users.loadingNewUsers);
    const errorNewUsers = useSelector((state) => state.users.errorNewUsers);
    console.log("newUsers", newUsers)
    useEffect(() => {
        dispatch(fetchUsers());
        dispatch(fetchNewUsers());
    }, [dispatch]);

    const handleCreateStudent = async (newStudent) => {
        try {
            dispatch(createUser(newStudent));
            setIsOpen(false);
        } catch (error) {
            console.error("Failed to create student", error);
        }
    };

    return (
        <div className="flex-1 p-6 bg-gray-50">
            <div className="flex justify-end items-center space-x-4 mb-4">
                {/* Icons and Profile Picture */}
            </div>
            <hr />
            <div className="mb-6 mt-[30px] flex justify-between items-center">
                <div>
                    <h2 className="text-[#171A1FFF] text-[32px] leading-[48px] font-sans font-extrabold">
                        Student list
                    </h2>
                </div>
                <div className="flex items-center space-x-4">
                    <button
                        className="bg-[#6E75D1FF] text-white px-3 py-2 rounded-md items-center"
                        onClick={() => setIsOpen(true)}
                    >
                        + New
                    </button>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="border border-gray-300 px-4 py-2 rounded-md bg-[#F3F4F6FF] pl-10"
                        />
                        {/* Search icon */}
                    </div>
                </div>
            </div>

            <div className="p-4 rounded-lg" style={{ backgroundColor: "#F3F4FB" }}>
                <h3 className="text-[#323842FF] text-[18px] leading-[28px] font-sans font-normal mb-4">
                    New clients this week
                </h3>
                {loadingNewUsers ? (
                    <div>Loading new users...</div>
                ) : errorNewUsers ? (
                    <div>Error loading new users: {errorNewUsers}</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {newUsers && newUsers.map((client) => (
                            <StudentCard key={client.id} client={client} />
                        ))}
                    </div>
                )}
            </div>
            <StudentTable students={students} />

            {/* Dialog for creating a new student */}
            <CreateStudent isOpen={isOpen} setIsOpen={setIsOpen} onCreate={handleCreateStudent} />
        </div>
    );
};

export default StudentList;
