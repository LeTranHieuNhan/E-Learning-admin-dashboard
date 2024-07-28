import React from "react";

const StudentCardView = ({ student }) => {
    if (!student) return null;

    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <div className="flex items-center">
                <img src={student.avatar} alt={student.name} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="text-xl font-semibold">{student.name}</h2>
                    <p className="text-gray-500">{student.email}</p>
                </div>
            </div>
            <div className="mt-4">
                <p><strong>Bio:</strong> {student.bio || "No bio available"}</p>
                <p><strong>Occupation:</strong> {student.occupation || "Student"}</p>
                <p><strong>Role:</strong> {student.role.name}</p>
                <p><strong>Join Date:</strong> {new Date(student.joinedAt).toLocaleDateString('en-us', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </div>
    );
};

export default StudentCardView;
