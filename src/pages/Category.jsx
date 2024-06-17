import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createCategory, deleteCategory, fetchCategories, updateCategory } from '../redux/actions/categoryAction';


const CategoryDashboard = () => {
    const dispatch = useDispatch();
    const { categories, loading, error } = useSelector(state => state.category);

    const [newCategoryName, setNewCategoryName] = useState('');
    const [isEditing, setIsEditing] = useState(null);
    const [editedCategoryName, setEditedCategoryName] = useState('');

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleAddCategory = () => {
        if (newCategoryName.trim()) {
            dispatch(createCategory({ name: newCategoryName }));
            setNewCategoryName('');
        }
    };

    const handleDeleteCategory = (id) => {
        dispatch(deleteCategory(id));
    };

    const handleEditCategory = (id, name) => {
        setIsEditing(id);
        setEditedCategoryName(name);
    };

    const handleSaveEditedCategory = (id) => {
        dispatch(updateCategory({ id, name: editedCategoryName }));
        setIsEditing(null);
        setEditedCategoryName('');
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Category Dashboard</h1>
            <table className="w-full bg-white rounded shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-left">ID</th>
                        <th className="border px-4 py-2 text-left">Name</th>
                        <th className="border px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{category.id}</td>
                            <td className="border px-4 py-2">
                                {isEditing === category.id ? (
                                    <input
                                        className="border rounded px-2 py-1"
                                        value={editedCategoryName}
                                        onChange={(e) => setEditedCategoryName(e.target.value)}
                                    />
                                ) : (
                                    category.name
                                )}
                            </td>
                            <td className="border px-4 py-2">
                                {isEditing === category.id ? (
                                    <>
                                        <button
                                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                                            onClick={() => handleSaveEditedCategory(category.id)}
                                        >
                                            Save
                                        </button>
                                        <button
                                            className="bg-gray-500 text-white px-3 py-1 rounded"
                                            onClick={() => setIsEditing(null)}
                                        >
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                                            onClick={() => handleEditCategory(category.id, category.name)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-3 py-1 rounded"
                                            onClick={() => handleDeleteCategory(category.id)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex space-x-2">
                <input
                    className="border rounded px-4 py-2 flex-1"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    placeholder="New category name"
                />
                <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={handleAddCategory}
                >
                    Create Category
                </button>
            </div>
        </div>
    );
};

export default CategoryDashboard;
