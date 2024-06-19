import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../redux/actions/categoryAction";
import { fetchUsers } from "../redux/actions/userAction";
import TextEditor from "./TextEditor";
import axios from "axios";
import { updateCourse } from "../redux/actions/courseAction";

const EditCourseModal = ({ course, isOpen, onClose }) => {
    const [title, setTitle] = useState(course.title || "");
    const [images, setImages] = useState(course.images || []);
    const [categoryInput, setCategoryInput] = useState(course.category.name || "");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [description, setDescription] = useState(course.description || "");
    const [course_duration, setcourse_duration] = useState(course.course_duration || "");
    const [selectedTeacher, setSelectedTeacher] = useState(course.user?.id || "");
    const [isUploading, setIsUploading] = useState(false);

    const dispatch = useDispatch();
    const categoryRef = useRef(null);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchUsers());
    }, [dispatch]);

    const categories = useSelector((state) => state.category.categories);
    const users = useSelector((state) => state.users.users);

    const teachers = users.filter(user => user.role.name === 'ADMIN');

    const filteredSuggestions = categories.filter((category) =>
        category.name.toLowerCase().includes(categoryInput.toLowerCase())
    );

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setIsUploading(true);

        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await axios.post('http://localhost:8080/api/v1/files/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data) {
                setImages([...images, response.data]);
            } else {
                console.error("Upload successful, but no URL returned");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally {
            setIsUploading(false);
        }
    };

    const handleCategoryFocus = () => {
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setCategoryInput(suggestion);
        setShowSuggestions(false);
    };

    const handleClickOutside = (event) => {
        if (categoryRef.current && !categoryRef.current.contains(event.target)) {
            setShowSuggestions(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSubmit = () => {
        const selectedCategoryObject = categories.find(cat => cat.name === categoryInput);
        const categoryID = selectedCategoryObject ? selectedCategoryObject.id : null;

        const courseData = {
            id: course.id, // assuming course has an id
            title,
            description,
            course_duration,
            images,
        };

        if (selectedTeacher && categoryID) {
            dispatch(updateCourse(courseData, selectedTeacher, categoryID));
            onClose(); // Close the modal after submission
        } else {
            alert("Please select a valid teacher and category.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl relative overflow-hidden">
                <button className="absolute top-2 right-2" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-2xl font-semibold mb-4">Edit Course Information</h2>
                <div className="flex flex-col space-y-6 overflow-y-auto max-h-[80vh]">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 pr-2 mb-6 md:mb-0">
                            <label className="block text-sm font-medium text-gray-700">
                                Course Title
                            </label>
                            <input
                                type="text"
                                className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 h-[40px] bg-[#F3F4F6FF]"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="mb-6 w-full md:w-1/2" ref={categoryRef}>
                            <label className="block text-sm font-medium text-gray-700">
                                Course Category
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="mt-1 block h-[40px] bg-[#F3F4F6FF] w-full p-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                                    placeholder="Enter category"
                                    value={categoryInput}
                                    onFocus={handleCategoryFocus}
                                    onChange={(e) => setCategoryInput(e.target.value)}
                                />
                                {showSuggestions && (
                                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                        <div className="px-2 py-1 border-b border-gray-300 text-[#9095A0FF] font-semibold leading-5">
                                            Suggestion
                                        </div>
                                        <ul className="max-h-40 overflow-auto w-[320px] pl-4 pr-3 mt-[6px]">
                                            {
                                                filteredSuggestions.map((suggestion) => (
                                                    <li
                                                        key={suggestion.id}
                                                        className="cursor-pointer text-[#171A1FFF] bg-[#F3F4F6FF] p-2 hover:text-[#6E75D1FF] mt-[5px] text-[14px] leading-6 font-normal"
                                                        onClick={() => handleSuggestionClick(suggestion.name)}
                                                    >
                                                        {suggestion.name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <div className="px-2 py-1 border-t border-gray-300 text-[#6E75D1FF] cursor-pointer hover:underline"
                                            onClick={() => setShowSuggestions(false)}
                                        >
                                            Browse all
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 pl-2 mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Course Duration
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-1 block w-full h-[40px] bg-[#F3F4F6FF] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            value={course_duration}
                            onChange={(e) => setcourse_duration(e.target.value)}
                        />
                    </div>
                    <div className="w-full md:w-1/2 pl-2 mb-6">
                        <label className="block text-sm font-medium text-gray-700">
                            Select Teacher
                        </label>
                        <select
                            value={selectedTeacher}
                            onChange={(e) => setSelectedTeacher(e.target.value)}
                            className="mt-1 block w-full p-2 bg-[#F3F4F6FF] border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        >
                            <option value="">Select a teacher</option>
                            {teachers.map((teacher) => (
                                <option key={teacher.id} value={teacher.id}>
                                    {teacher.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6 mt-[50px]">
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <div className="relative bg-[#F3F4F6FF] border border-gray-300 rounded-md shadow-sm w-full">
                            <TextEditor value={description} onChange={setDescription} />
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mt-12">
                        <h2 className="text-2xl font-semibold mb-4 mt-2">
                            Media (Images, Video, or 3D Models)
                        </h2>
                        <div className="flex space-x-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative w-32 h-32">
                                    <img
                                        src={image}
                                        alt={`Uploaded ${index}`}
                                        className="w-full h-full object-cover rounded-lg shadow-md"
                                    />
                                    <button
                                        className="absolute top-0 right-0 bg-red-500 text-white p-1"
                                        onClick={() => setImages(images.filter((_, i) => i !== index))}
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                            <label className="cursor-pointer w-32 h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg shadow-md">
                                <span className="text-gray-500">+</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    onChange={handleImageUpload}
                                    disabled={isUploading}
                                />
                            </label>
                        </div>
                        {isUploading && (
                            <p className="text-blue-500 text-xs mt-2">
                                Uploading...
                            </p>
                        )}
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                        onClick={handleSubmit}
                        className="bg-blue-500 p-2 rounded font-bold text-white"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditCourseModal;
