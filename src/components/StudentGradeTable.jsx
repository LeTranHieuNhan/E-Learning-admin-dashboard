import React from 'react';

const StudentGradeTable = ({ students, assignments, setSelectedStudent, setSelectedAssignment }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Students and Grades</h2>
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-200">
                <tr>
                    <th className="py-3 px-4 border-b border-gray-300 text-left">Student</th>
                    {assignments.map((assignment, index) => (
                        <th key={index} className="py-3 px-4 border-b border-gray-300 text-left">{assignment}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {students.map((student, studentIndex) => (
                    <tr key={student.id} className={studentIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 border-b border-gray-300">
                            <button
                                onClick={() => setSelectedStudent(student.id)}
                                className="text-blue-600 hover:underline"
                            >
                                {student.name}
                            </button>
                        </td>
                        {assignments.map((assignment, index) => (
                            <td
                                key={index}
                                className="py-3 px-4 border-b border-gray-300 cursor-pointer hover:bg-gray-100"
                                onClick={() => {
                                    setSelectedStudent(student.id)
                                    setSelectedAssignment(assignment)
                                }}
                            >
                                {student.grades[assignment] || 'N/A'}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default StudentGradeTable
