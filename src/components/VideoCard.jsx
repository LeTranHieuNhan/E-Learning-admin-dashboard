// components/VideoCard.js
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCourseSession, updateCourseSession } from "../redux/actions/courseSessionActions";
import VideoEditModal from "./VideoEditModal";

const VideoCard = ({ video, courses }) => {
    const [duration, setDuration] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const videoRef = useRef(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleLoadedMetadata = () => {
            if (videoRef.current) {
                setDuration(videoRef.current.duration);
            }
        };

        const currentVideo = videoRef.current;
        if (currentVideo) {
            currentVideo.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            if (currentVideo) {
                currentVideo.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, []);

    const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete ${video.title}?`)) {
            dispatch(deleteCourseSession(video.id));
        }
    };

    const handleEdit = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };

    const handleSaveChanges = async (updatedVideo) => {
        await dispatch(updateCourseSession(updatedVideo));
        setIsModalVisible(false);
    };

    const formatDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const getVideoThumbnail = () => {
        // Use provided thumbnail URL or fall back to a default image
        return video.thumbnailUrl || "https://th.bing.com/th/id/OIP.YhZoDxifh-k6PhvpUkhG1AHaEk?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    };

    return (
        <div className="border rounded-lg p-4 shadow-lg flex">
            <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-1/3 mr-4"
            >
                <div className="relative h-full bg-black flex items-center justify-center">
                    {duration && (
                        <span className="text-white text-sm font-bold absolute top-2 left-2 bg-gray-200 bg-opacity-50 px-2 py-1 rounded">
                            {formatDuration(duration)}
                        </span>
                    )}
                    <img
                        src={getVideoThumbnail()}
                        alt={video.title}
                        className="h-full w-full object-cover rounded-2xl"
                    />
                </div>
                <video
                    ref={videoRef}
                    src={video.videoUrl}
                    className="hidden"
                    preload="metadata"
                />
            </a>
            <div className="w-2/3">
                <h2 className="text-xl font-semibold mb-2">{video.title}</h2>
                <div className="flex gap-2 text-sm mb-2">
                    <span className="bg-[#FEFAEBFF] text-[#7A6108FF] px-2 py-1 rounded-xl">
                        {video?.views} views
                    </span>
                    <span className="bg-[#F3F4FBFF] text-[#6E75D1FF] px-2 py-1 rounded">
                        {video?.likes} likes
                    </span>
                    <span className="bg-[#FFF4F0FF] text-[#FE763EFF] px-2 py-1 rounded">
                        {video?.comments} comments
                    </span>
                </div>
                <div className="flex items-center mb-2 mt-2">
                    <img
                        src={video.userImg}
                        alt={video.username}
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    <div>
                        <p className="text-sm font-medium">{video?.username}</p>
                        <p className="text-sm text-gray-500">{video?.postedTime}</p>
                    </div>
                </div>
                <div className="flex space-x-2 mt-4">
                    <button
                        onClick={handleEdit}
                        className="text-blue-600 hover:text-blue-800"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="text-red-600 hover:text-red-800"
                    >
                        Delete
                    </button>
                </div>
            </div>

            {/* Modal for editing video details */}
            <VideoEditModal
                isVisible={isModalVisible}
                onClose={handleModalClose}
                video={video}
                onSave={handleSaveChanges}
                courses={courses}
            />
        </div>
    );
};

export default VideoCard;
