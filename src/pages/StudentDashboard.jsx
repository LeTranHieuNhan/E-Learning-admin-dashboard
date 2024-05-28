import React from "react";
import Sidebar from "../components/Sidebar";
import StudentList from "../components/StudentList";

function StudentDashboard() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <StudentList />
    </div>
  );
}

export default StudentDashboard;
