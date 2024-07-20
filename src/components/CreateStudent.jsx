import { Dialog, DialogPanel } from "@headlessui/react";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import apiClient from '../axiosSetup';
import { fetchRoles } from "../redux/actions/roleActions";

export const CreateStudent = ({ isOpen, setIsOpen, onCreate, actionName = "Create", student = null }) => {
    const [studentData, setStudentData] = useState({
        avatar: "",
        name: "",
        email: "",
        bio: "",
        occupation: "",
        password: "",
        confirmPassword: "",
        role: "USER" // Default role
    });

    const [passwordError, setPasswordError] = useState("");
    const [isUploading, setIsUploading] = useState(false);

    const dispatch = useDispatch();
    const { roles, loading, error } = useSelector(state => state.roles);

    useEffect(() => {
        if (student) {
            setStudentData({
                ...student,
                avatar: student.avatar || "", // Assuming avatar is the image URL
                password: "",
                confirmPassword: "",
                role: student.role.name || "USER" // Assuming role.name exists
            });
        }
    }, [student]);

    useEffect(() => {
        dispatch(fetchRoles());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentData({ ...studentData, [name]: value });
    };

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true); // Start the loading state

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await apiClient.post('/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data) {
                setStudentData({ ...studentData, avatar: response.data });
            } else {
                console.error("Upload successful, but no URL returned");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemoveImage = () => {
        setStudentData({ ...studentData, avatar: "" });
    };

    const handleSubmit = () => {
        if (studentData.password !== studentData.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
        const payload = {
            ...studentData,
            role: {
                id: roles.find(role => role.name === studentData.role)?.id,
                name: studentData.role
            }
        };
        onCreate(payload);
        setPasswordError("");
    };

    return (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="flex items-center justify-center min-h-screen">
                <DialogPanel className="relative z-10 space-y-4 border rounded-md shadow-md bg-white p-6 w-[752px] h-auto">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">
                            <div className="flex gap-2 items-center p-1"></div>
                        </div>
                        <div className="col-span-2">
                            <div className="ml-[48px]">
                                <h1 className="text-[32px] leading-[48px] font-sans font-bold">
                                    {actionName} User
                                </h1>
                                <h1 className="text-[14px] leading-[22px] font-sans font-bold mt-[16px]">
                                    Profile photo
                                </h1>
                                <div className="mt-[16px] flex gap-12">
                                    <img
                                        className="h-[100px] w-[100px] rounded-lg border-4 border-white dark:border-gray-800"
                                        src={studentData.avatar || ""}
                                        alt="Profile"
                                    />
                                    <ul>
                                        <h1 className="text-[#171A1FFF] text-[14px] leading-[22px] font-sans font-normal">
                                            Upload your photo
                                        </h1>
                                        <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal mt-[8px]">
                                            Your photo should be in PNG or JPG format
                                        </h1>
                                        <div className="flex mt-[8px] gap-4">
                                            <input
                                                className="text-[12px] leading-[20px] font-sans font-normal rounded border-[1px] p-2 items-center justify-center border-[#171A1FFF] border-solid"
                                                type="file"
                                                onChange={handleFileUpload}
                                                disabled={isUploading} // Disable during upload or remove
                                            />
                                            <button
                                                className="text-[#9095A0FF] text-[12px] leading-[20px] font-sans font-normal rounded p-2 items-center justify-center"
                                                onClick={handleRemoveImage}
                                                disabled={isUploading} // Disable during upload or remove
                                            >
                                                Remove
                                            </button>
                                        </div>
                                        {isUploading && (
                                            <p className="text-blue-500 text-xs mt-2">
                                                Uploading...
                                            </p>
                                        )}
                                    </ul>
                                </div>
                                <div className="mt-[20px]">
                                    <form className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={studentData.name}
                                                onChange={handleChange}
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                            />
                                        </div>
                                        <div className="mt-[16px]">
                                            <label htmlFor="email" className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={studentData.email}
                                                onChange={handleChange}
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                            />
                                        </div>
                                        <div className="mt-[16px]">
                                            <label htmlFor="occupation" className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Occupation
                                            </label>
                                            <input
                                                type="text"
                                                name="occupation"
                                                value={studentData.occupation}
                                                onChange={handleChange}
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                            />
                                        </div>
                                        <div className="mt-[16px]">
                                            <label htmlFor="role" className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Role
                                            </label>
                                            <select
                                                name="role"
                                                value={studentData.role}
                                                onChange={handleChange}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            >
                                                {roles.map((role) => (
                                                    <option key={role.id} value={role.name}>{role.name}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="mt-[16px]">
                                            <label className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Bio
                                            </label>
                                            <textarea
                                                name="bio"
                                                value={studentData.bio}
                                                onChange={handleChange}
                                                className="w-full block text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>
                                        <div className="mt-[16px]">
                                            <label htmlFor="password" className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                value={studentData.password}
                                                onChange={handleChange}
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                            />
                                        </div>
                                        <div className="mt-[16px]">
                                            <label htmlFor="confirmPassword" className="block text-[14px] leading-[22px] font-sans font-bold">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                name="confirmPassword"
                                                value={studentData.confirmPassword}
                                                onChange={handleChange}
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                            />
                                            {passwordError && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {passwordError}
                                                </p>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mt-[58px] flex gap-2 ml-[300px]">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-[36px] text-[14px] leading-[22px] font-sans font-normal text-[#9095A0FF]"
                                    disabled={isUploading} // Disable during upload or remove
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSubmit}
                                    className="h-[36px] w-[117px] text-[14px] leading-[22px] font-sans font-normal text-[#FFFFFFFF] bg-[#171A1FFF] rounded-md"
                                    disabled={isUploading} // Disable during upload or remove
                                >
                                    {actionName}
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
};
