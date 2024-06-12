import React from "react";
import Sidebar from "../components/Sidebar";
import CreateCourse from "../components/CreateCourse";

function CourseEdit() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <CreateCourse/>
    </div>
  );
}

export default CourseEdit;
