import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import CourseDropdown from "./CourseDropdown"; // Adjust the import path
import { fetchCourses } from "../redux/actions/courseAction";
import { fetchCourseSessions, fetchCourseSessionsByCourseId, updateCourseSession } from "../redux/actions/courseSessionActions";

const LibraryVideo = () => {
    const dispatch = useDispatch();
    const { loading: courseLoading, error: courseError, courses } = useSelector((state) => state.courses);
    const { loading: sessionLoading, error: sessionError, sessions: videos } = useSelector((state) => state.courseSessions);

    const [selectedCourse, setSelectedCourse] = useState(null);
    const [editVideo, setEditVideo] = useState(null);
    const [editForm, setEditForm] = useState({});
    useEffect(() => {
        dispatch(fetchCourses()); // Fetch all courses on component mount
    }, [dispatch]);

    useEffect(() => {
        if (selectedCourse) {
            dispatch(fetchCourseSessionsByCourseId(selectedCourse.id)); // Fetch sessions for the selected course
        } else {
            dispatch(fetchCourseSessions()); // Fetch all sessions if no course is selected
        }
    }, [dispatch, selectedCourse]);

    const handleEdit = (video) => {
        setEditVideo(video);
        setEditForm(video);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setEditForm((prevForm) => ({ ...prevForm, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCourseSession(editVideo.id, editForm));
        setEditVideo(null);
    };

    const handleCourseSelect = (course) => {
        setSelectedCourse(course);
    };

    if (courseLoading || sessionLoading) {
        return <p>Loading...</p>;
    }

    if (courseError || sessionError) {
        return <p>Error loading data: {courseError || sessionError}</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <CourseDropdown
                courses={courses}
                selectedCourse={selectedCourse}
                onSelectCourse={handleCourseSelect}
            />
            {editVideo ? (
                <form onSubmit={handleFormSubmit} className="mb-6">
                    <div className="mb-4">
                        <label className="block text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={editForm.title || ""}
                            onChange={handleFormChange}
                            className="border rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Video URL</label>
                        <input
                            type="text"
                            name="videoUrl"
                            value={editForm.videoUrl || ""}
                            onChange={handleFormChange}
                            className="border rounded w-full p-2"
                        />
                    </div>
                    <div className="flex space-x-2">
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Save
                        </button>
                        <button
                            type="button"
                            onClick={() => setEditVideo(null)}
                            className="bg-gray-300 text-black px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {videos.map((video) => (
                        <VideoCard courses={courses}  key={video.id} video={video} onEdit={handleEdit} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LibraryVideo;
