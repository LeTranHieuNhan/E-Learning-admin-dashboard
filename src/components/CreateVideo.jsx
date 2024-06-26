import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrashAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import { fetchCourses } from '../redux/actions/courseAction';
import { createCourseSession, fetchCourseSessionsByCourseId } from '../redux/actions/courseSessionActions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateVideo = () => {
    // State variables
    const [file, setFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null); // State for thumbnail file
    const [thumbnailPreview, setThumbnailPreview] = useState(null); // State for thumbnail preview
    const [title, setTitle] = useState('');
    const [order, setOrder] = useState('');
    const [uploadStatus, setUploadStatus] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [isUploading, setIsUploading] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Fetch courses from the Redux store
    const courses = useSelector(state => state.courses?.courses) || [];
    const courseSessions = useSelector(state => state.courseSessions?.sessions) || [];
    const sessionLoading = useSelector(state => state.courseSessions?.loading);
    const sessionError = useSelector(state => state.courseSessions?.error);

    // Fetch courses on component mount
    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    // Fetch sessions for the selected course
    useEffect(() => {
        if (selectedCourse) {
            dispatch(fetchCourseSessionsByCourseId(selectedCourse));
        }
    }, [selectedCourse, dispatch]);

    // Event handlers for file inputs
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    const handleThumbnailChange = (event) => {
        const file = event.target.files[0];
        setThumbnailFile(file);
        setThumbnailPreview(URL.createObjectURL(file)); // For thumbnail preview
    };

    const handleSave = async () => {
        if (title && order && selectedCourse && file && thumbnailFile) {
            setIsUploading(true);
            setUploadStatus('Uploading video and thumbnail...');

            try {
                // Step 1: Upload the video file to get the URL
                const videoFormData = new FormData();
                videoFormData.append("image", file);

                const videoUploadResponse = await axios.post('http://localhost:8080/api/v1/files/upload', videoFormData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const videoUrl = videoUploadResponse.data;

                if (videoUrl) {
                    // Step 2: Upload the thumbnail file to get the URL
                    const thumbnailFormData = new FormData();
                    thumbnailFormData.append("image", thumbnailFile);

                    const thumbnailUploadResponse = await axios.post('http://localhost:8080/api/v1/files/upload', thumbnailFormData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    });

                    const thumbnailUrl = thumbnailUploadResponse.data;

                    if (thumbnailUrl) {
                        // Step 3: Create a new course session with the video and thumbnail URLs
                        const newSession = {
                            title,
                            sessionOrder: parseInt(order, 10),
                            videoUrl,
                            thumbnailUrl, // Include the thumbnail URL
                            courseId: selectedCourse
                        };

                        dispatch(createCourseSession(newSession, selectedCourse));
                        setUploadStatus('Video and thumbnail uploaded successfully, and session created!');
                        setTimeout(() => {
                            navigate("/RecordingManagement");
                        }, 2000);
                    } else {
                        setUploadStatus('Thumbnail uploaded but no URL received from server.');
                    }
                } else {
                    setUploadStatus('Video uploaded but no URL received from server.');
                }
            } catch (error) {
                setUploadStatus(`Error uploading video or thumbnail: ${error.message}`);
            } finally {
                setIsUploading(false);
            }
        } else {
            setUploadStatus('Please fill all fields and select both a video file and a thumbnail image before saving.');
        }
    };

    const handleCancel = () => {
        setFile(null);
        setThumbnailFile(null);
        setThumbnailPreview(null);
        setTitle('');
        setOrder('');
        setSelectedCourse('');
        setUploadStatus('Cancelled');
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            <main className="flex-1 p-6 flex">
                <div className="w-2/3 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-6">Upload Your Video and Thumbnail</h1>

                    <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg mb-6 flex flex-col items-center">
                        <input
                            type="file"
                            accept="video/*"
                            onChange={handleFileChange}
                            className="mb-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                        <p className="text-gray-500">Or drag-and-drop your video here</p>
                    </div>

                    <div className="border-dashed border-2 border-gray-300 p-6 rounded-lg mb-6 flex flex-col items-center">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="mb-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                        />
                        <p className="text-gray-500">Or drag-and-drop your thumbnail here</p>
                    </div>

                    {thumbnailPreview && (
                        <div className="mb-6">
                            <img src={thumbnailPreview} alt="Thumbnail Preview" className="w-full h-auto rounded-lg" />
                        </div>
                    )}

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Title:</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Order:</label>
                        <input
                            type="number"
                            value={order}
                            onChange={(e) => setOrder(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Select Course:</label>
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="" disabled>Select a course</option>
                            {courses.map((course) => (
                                <option key={course.id} value={course.id}>{course.title}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2">Upload Status:</label>
                        <p className="p-3 bg-gray-200 rounded-lg">
                            {uploadStatus || (sessionLoading ? 'Loading sessions...' : sessionError || 'Ready')}
                        </p>
                    </div>

                    <div className="flex space-x-4">
                        <button
                            onClick={handleSave}
                            className="flex-1 p-3 bg-violet-500 text-white rounded-lg flex items-center justify-center"
                            disabled={isUploading}
                        >
                            <FontAwesomeIcon icon={faSave} className="mr-2" /> Save
                        </button>
                        <button
                            onClick={handleCancel}
                            className="flex-1 p-3 bg-red-500 text-white rounded-lg flex items-center justify-center"
                            disabled={isUploading}
                        >
                            <FontAwesomeIcon icon={faTrashAlt} className="mr-2" /> Cancel
                        </button>
                    </div>
                </div>

                <div className="w-1/3 ml-6 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4">Videos in {courses.find(course => course.id === selectedCourse)?.title}</h2>
                    <ul>
                        {selectedCourse && courseSessions.length > 0 && courseSessions.map((video, index) => (
                            <li key={index} className="mb-2">
                                <span className="block text-gray-700 font-medium">{video.sessionOrder}. {video.title}</span>
                            </li>
                        ))}
                        {!sessionLoading && selectedCourse && courseSessions.length === 0 && (
                            <p className="text-gray-500">No videos found for this course.</p>
                        )}
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default CreateVideo;
