// components/VideoEditModal.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';
import axios from 'axios';

const VideoEditModal = ({ isVisible, onClose, video, onSave }) => {
    const [title, setTitle] = useState(video.title);
    const [order, setOrder] = useState(video.sessionOrder);
    const [file, setFile] = useState(null);
    const [thumbnail, setThumbnail] = useState(video.thumbnail || video.videoUrl);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setFile(file);
        setThumbnail(URL.createObjectURL(file)); // For thumbnail preview
    };

    const handleSave = async () => {
        setIsUploading(true);
        setUploadStatus('Updating video...');

        try {
            let videoUrl = video.videoUrl;

            if (file) {
                const formData = new FormData();
                formData.append('video', file);

                const uploadResponse = await axios.post('http://localhost:8080/api/v1/files/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                videoUrl = uploadResponse.data;
            }

            const updatedVideo = {
                ...video,
                title,
                sessionOrder: parseInt(order, 10),
                videoUrl,
                file: file ? URL.createObjectURL(file) : video.videoUrl,
            };

            await onSave(updatedVideo);
            setUploadStatus('Video updated successfully!');
            setIsUploading(false);
            onClose();
        } catch (error) {
            setUploadStatus(`Error updating video: ${error.message}`);
            setIsUploading(false);
        }
    };

    return (
        <Modal isVisible={isVisible} onClose={onClose}>
            <h2 className="text-2xl font-bold mb-4">Edit Your Video</h2>

            <div className="border-dashed border-2 border-gray-300 p-4 rounded-lg mb-4 flex flex-col items-center">
                <input
                    type="file"
                    accept="video/*"
                    onChange={handleFileChange}
                    className="mb-2 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
                <p className="text-gray-500">Or drag-and-drop here</p>
            </div>

            {thumbnail && (
                <div className="mb-4">
                    <video controls src={thumbnail} className="w-full h-auto rounded-lg" />
                </div>
            )}

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Order:</label>
                <input
                    type="number"
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Upload Status:</label>
                <p className="p-3 bg-gray-200 rounded-lg">
                    {uploadStatus}
                </p>
            </div>

            <div className="flex space-x-4">
                <button
                    onClick={handleSave}
                    className="flex-1 p-3 bg-violet-500 text-white rounded-lg flex items-center justify-center"
                    disabled={isUploading}
                >
                    <FontAwesomeIcon icon={faSave} className="mr-2" /> Save Changes
                </button>
                <button
                    onClick={onClose}
                    className="flex-1 p-3 bg-red-500 text-white rounded-lg flex items-center justify-center"
                    disabled={isUploading}
                >
                    <FontAwesomeIcon icon={faTrashAlt} className="mr-2" /> Cancel
                </button>
            </div>
        </Modal>
    );
};

export default VideoEditModal;
