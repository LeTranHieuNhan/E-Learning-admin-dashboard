import React from 'react';

const AssignmentList = ({ assignments, setSelectedAssignment }) => {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Assignments</h2>
            <ul className="list-disc pl-4">
                {assignments.map((assignment, index) => (
                    <li key={index}>
                        <button
                            onClick={() => setSelectedAssignment(assignment)}
                            className="text-blue-500 hover:underline"
                        >
                            {assignment}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssignmentList;
// Compare this snippet from src/components/StudentList.jsx: