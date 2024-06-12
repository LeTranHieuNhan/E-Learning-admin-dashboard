import React from "react";
import Sidebar from "../components/Sidebar";
import CourseCard from "../components/CourseCard";

function CourseManagement() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <CourseCard/>
    </div>
  );
}

export default CourseManagement;
