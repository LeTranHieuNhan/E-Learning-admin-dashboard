import {Dialog, DialogPanel} from "@headlessui/react";
import {FileUpload} from "primereact/fileupload";
import React from "react";

export const CreateStudent = ({ isOpen, setIsOpen}) => {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel
                    className=" space-y-4 border rounded-md shadow-md bg-white p-[24px] w-[752px] h-[683px]">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1">
                            <div className="flex gap-2 items-center p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-[#6E75D1FF] font-bold"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                    />
                                </svg>
                                <h1 className="text-[#6E75D1FF] text-[12px] leading-[20px] font-sans font-bold">
                                    Profile
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black font-bold"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                    />
                                </svg>
                                <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                    Password
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    />
                                </svg>
                                <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                    Notifications
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                                    />
                                </svg>
                                <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                    Export data
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center p-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-black font-bold"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                                    />
                                </svg>
                                <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                    Plugins
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center p-1 border-b-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                                <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal">
                                    Save chat history
                                </h1>
                            </div>
                            <div className="flex gap-2 items-center p-1 mt-[40px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 text-[#DE3B40FF] font-bold"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                                <h1 className="text-[#DE3B40FF] text-[12px] leading-[20px] font-sans font-normal">
                                    Delete your account
                                </h1>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <div className="ml-[48px]">
                                <h1 className="text-[32px] leading-[48px] font-sans font-bold">
                                    Edit profile
                                </h1>
                                <h1 className="text-[14px] leading-[22px] font-sans font-bold mt-[16px]">
                                    Profile photo
                                </h1>
                                <div className="mt-[16px] flex">
                                    <img
                                        className="h-[100px] w-[100px] rounded-lg border-4 border-white dark:border-gray-800 "
                                        src="https://randomuser.me/api/portraits/women/21.jpg"
                                        alt=""
                                    ></img>
                                    <ul>
                                        <h1 className="text-[#171A1FFF] text-[14px] leading-[22px] font-sans font-normal">
                                            Upload your photo
                                        </h1>
                                        <h1 className="text-[#565E6CFF] text-[12px] leading-[20px] font-sans font-normal mt-[8px]">
                                            Your photo should be in PNG or JPG format
                                        </h1>
                                        <div className="flex mt-[8px]">
                                            {/* <button className="text-[12px] leading-[20px] font-sans font-normal rounded border-[1px]  p-2 items-center justify-center border-[#171A1FFF] border-solid">
                          Choose image
                        </button> */}
                                            <FileUpload
                                                className="text-[12px] leading-[20px] font-sans font-normal rounded border-[1px]  p-2 items-center justify-center  border-[#171A1FFF] border-solid"
                                                mode="basic"
                                                url="/api/upload"
                                                accept="image/*"
                                                maxFileSize={1000000}
                                            />
                                            <button
                                                className="text-[#9095A0FF] text-[12px] leading-[20px] font-sans font-normal rounded   p-2 items-center justify-center ">
                                                Remove
                                            </button>
                                        </div>
                                    </ul>
                                </div>
                                <div className="mt-[20px]">
                                    <form action="" className="space-y-4">
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-[14px] leading-[22px] font-sans font-bold "
                                            >
                                                Full name
                                            </label>
                                            <input
                                                type="text"
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                            />
                                        </div>
                                        <div className="mt-[16px]">
                                            <label
                                                htmlFor="name"
                                                className="block text-[14px] leading-[22px] font-sans font-bold "
                                            >
                                                Email
                                            </label>
                                            <input
                                                type="text"
                                                className="w-[420px] h-[36px] text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2 "
                                            />
                                        </div>
                                        <div className="mt-[16px]">
                                            <label
                                                htmlFor="name"
                                                className="block text-[14px] leading-[22px] font-sans font-bold "
                                            >
                                                Location
                                            </label>
                                            <select
                                                id="countries"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>France</option>
                                                <option>Germany</option>
                                            </select>
                                        </div>
                                        <div className="mt-[16px]">
                                            <label
                                                className="block text-[14px] leading-[22px] font-sans font-bold ">
                                                About me
                                            </label>
                                            <textarea
                                                className="w-full block text-[14px] leading-[22px] font-sans font-normal bg-[#F3F4F6FF] rounded-md p-2"
                                                rows="3"
                                            ></textarea>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="mt-[58px] flex gap-2  ml-[300px]">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-[36px] text-[14px] leading-[22px] font-sans font-normal text-[#9095A0FF] "
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="h-[36px] w-[117px] text-[14px] leading-[22px] font-sans font-normal text-[#FFFFFFFF] bg-[#171A1FFF] rounded-md"
                                >
                                    Save profile
                                </button>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}