import React, { useState } from 'react';
import StudentTable from "../components/StudentTable";
import GradeForm from "../components/GradeForm";
import StudentGradeTable from "../components/StudentGradeTable";
import CourseNavbar from "../components/CourseNavbar";

const CourseGrades = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', grades: { 'Assignment 1': 85 } },
        { id: 2, name: 'Jane Smith', grades: { 'Assignment 1': 90 } },
    ]);
    const [assignments, setAssignments] = useState(['Assignment 1', 'Assignment 2']);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedAssignment, setSelectedAssignment] = useState('Assignment 1');

    const handleGradeSubmit = (studentId, assignment, grade) => {
        setStudents(students.map(student =>
            student.id === studentId ? { ...student, grades: { ...student.grades, [assignment]: grade } } : student
        ));
    };

    return (
        <div className="p-4">
            <div className="mx-auto container">

            <CourseNavbar/>
            </div>
            <h1 className="text-2xl font-bold mb-4">Grade Viewer</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <StudentGradeTable
                    students={students}
                    assignments={assignments}
                    setSelectedStudent={setSelectedStudent}
                    setSelectedAssignment={setSelectedAssignment}
                />
                <GradeForm
                    students={students}
                    selectedStudent={selectedStudent}
                    selectedAssignment={selectedAssignment}
                    onSubmit={handleGradeSubmit}
                />
            </div>
        </div>
    );
};

export default CourseGrades;
