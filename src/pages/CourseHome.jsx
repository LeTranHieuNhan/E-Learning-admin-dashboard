import React from "react";
import Sidebar from "../components/Sidebar";
import CourseDetail from "../components/CourseDetail";

function CourseHome() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col items-center">
        <CourseDetail />
      </div>
    </div>
  );
}

export default CourseHome;
