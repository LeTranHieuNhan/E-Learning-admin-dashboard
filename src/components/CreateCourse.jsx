import React, {useState, useEffect, useRef} from "react";
import TextEditor from "./TextEditor";
import {useDispatch} from "react-redux";
import {createCourse} from "../redux/actions/courseAction";

function CreateCourse() {
    const [title, setTitle] = useState("");
    const [images, setImages] = useState([]);
    const [categoryInput, setCategoryInput] = useState("");
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();

    const suggestions = ["AI", "System Design", "OOP", "Java", "Python", "Hadilao"];
    const categoryRef = useRef(null);

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files);
        const newImages = files.map((file) => URL.createObjectURL(file));
        setImages([...images, ...newImages]);
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

    const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const handleSubmit = () => {
        const courseData = {
            title,
            category: categoryInput,
            description,
            status,
            images,
        };
        // dispatch(createCourse(courseData));
        console.log(courseData);
    };
    return (
        <div className="p-6">
            <button onClick={handleSubmit}
                    className="absolute top-10 right-20 bg-orange-500 p-2 rounded font-bold text-white ">Create
            </button>
            <div className="h-24"></div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Course information</h2>
                <div className="flex flex-wrap mb-6">
                    <div className="w-full md:w-1/2 pr-2 mb-6 md:mb-0">
                        <label className="block text-sm font-medium text-gray-700">
                            Course title
                        </label>
                        <input
                            type="text"
                            className="mt-1 p-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 h-[40px] bg-[#F3F4F6FF]"
                        />
                    </div>
                    <div className="mb-6 w-full md:w-1/2" ref={categoryRef}>
                        <label className="block text-sm font-medium text-gray-700">
                            Course category
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
                                <div
                                    className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                    <div
                                        className="px-2 py-1 border-b border-gray-300 text-[#9095A0FF]  font-semibold leading-5">
                                        Suggestion
                                    </div>
                                    <ul className="max-h-40 overflow-auto w-[320px] pl-4 pr-3 mt-[6px]">
                                        {suggestions.map((suggestion) => (
                                            <li
                                                key={suggestion}
                                                className="cursor-pointer text-[#171A1FFF] bg-[#F3F4F6FF] p-2 hover:text-[#6E75D1FF] mt-[5px] text-[14px] leading-6 font-normal"
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                    <div
                                        className="px-2 py-1 border-t border-gray-300 text-[#6E75D1FF] cursor-pointer hover:underline">
                                        Browse all
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pl-2">
                    <label className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <input
                        type="text"
                        className="mt-1 p-1 block w-full h-[40px] bg-[#F3F4F6FF] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    />
                </div>
                <div className="mb-6 mt-[50px]">
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <div
                        className="relative bg-[#F3F4F6FF] border border-gray-300 rounded-md shadow-sm w-[656px] mt-[10px]">
                        <TextEditor value={description} onChange={setDescription}/>
                    </div>
                </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-6">
                <h2 className="text-2xl font-semibold mb-4">
                    Media (Images, video or 3D models)
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
                                className="absolute top-0 right-0 bg-red-500 text-white  p-1"
                                onClick={() => removeImage(index)}
                            >
                                &times;
                            </button>
                        </div>
                    ))}
                    <label
                        className="cursor-pointer w-32 h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg shadow-md">
                        <span className="text-gray-500">+</span>
                        <input
                            type="file"
                            className="hidden"
                            multiple
                            onChange={handleImageUpload}
                        />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;
