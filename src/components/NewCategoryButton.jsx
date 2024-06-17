import React, { useState } from 'react';
import NewCategoryModal from './NewCategoryModal';

const NewCategoryButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal}>New Category</button>
            {isModalOpen && <NewCategoryModal closeModal={closeModal} />}
        </>
    );
};
