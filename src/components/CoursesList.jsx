import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCourse, fetchCourses } from "../redux/actions/courseAction";
import CourseCard from "./CourseCard";






const CourseList = () => {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);
    const loading = useSelector((state) => state.courses.loading);
    const error = useSelector((state) => state.courses.error);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const handleDeleteCourse = (courseId) => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            dispatch(deleteCourse(courseId));
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="relative p-4">
            <div className="absolute top-4 left-4">
                <Link to="/CourseEdit">
                    <button className="bg-[#6E75D1FF] text-white px-4 py-2 rounded hover:bg-purple-700">
                        Create Course
                    </button>
                </Link>
            </div>
            <div className="flex flex-wrap mt-16 gap-4">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} onDelete={handleDeleteCourse} />
                ))}
            </div>
        </div>
    );
};

export default CourseList;
