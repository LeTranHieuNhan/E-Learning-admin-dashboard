import React, { useState } from 'react';

const NewCategoryModal = ({ closeModal, addCategory }) => {
    const [categoryName, setCategoryName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (categoryName.trim()) {
            addCategory(categoryName);
            closeModal();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-md">
                <h2 className="text-xl mb-4">Create New Category</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="categoryName">
                            Category Name
                        </label>
                        <input
                            id="categoryName"
                            type="text"
                            className="w-full border rounded px-4 py-2"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button
                            type="button"
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewCategoryModal;
