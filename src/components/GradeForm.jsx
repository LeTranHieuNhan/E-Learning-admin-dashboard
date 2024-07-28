import React, { useState } from 'react';

const GradeForm = ({ students, selectedStudent, selectedAssignment, onSubmit }) => {
    const [grade, setGrade] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(selectedStudent, selectedAssignment, grade);
        setGrade('');
    };

    const student = students.find(student => student.id === selectedStudent);

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">Assign Grade</h2>
            {student ? (
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Student</label>
                        <input
                            type="text"
                            value={student.name}
                            readOnly
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Assignment</label>
                        <input
                            type="text"
                            value={selectedAssignment}
                            readOnly
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm font-medium mb-1">Grade</label>
                        <input
                            type="number"
                            value={grade}
                            onChange={(e) => setGrade(e.target.value)}
                            className="border border-gray-300 rounded px-2 py-1 w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Assign Grade
                    </button>
                </form>
            ) : (
                <p>Select a student and assignment to assign a grade</p>
            )}
        </div>
    );
};

export default GradeForm;
