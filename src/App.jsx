import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import StudentDashboard from "./pages/StudentDashboard";
import CourseManagement from "./pages/CourseManagement";
import CourseHome from "./pages/CourseHome";
import CourseDetail from "./components/CourseDetail";
import Layout from "./Layout";
import Category from "./pages/Category";
import CreateCourse from "./components/CreateCourse";
import CreateVideo from "./components/CreateVideo";
import RecordLibrary from "./pages/RecordLibrary";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./PrivateRoute";
import CourseEdit from "./pages/CouseEdit";
import ClassAssignment from "./pages/ClassAssignment";
import CourseGrades from "./pages/CourseGrades";
import ClassMembers from "./pages/ClassMembers";
import DashboardHome from "./pages/DashboardHome"; // Import the PrivateRoute component

const App = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<Layout />}>
                        <Route path="/StudentDashboard" element={<StudentDashboard />} />
                        <Route path="/CourseManagement" element={<CourseManagement />} />
                        <Route path="/CourseEdit" element={<CourseEdit />} />
                        <Route path="/CourseHome/:courseName" element={<CourseHome />} />
                        <Route path="/CourseDetail/:courseName" element={<CourseDetail />} />
                        <Route path="/Category" element={<Category />} />
                        <Route path="/CourseEdit/:id" element={<CreateCourse />} />
                        <Route path="/CreateVideo" element={<CreateVideo />} />
                        <Route path="/RecordingManagement" element={<RecordLibrary />} />
                        <Route path = "/ClassAssignment/:id" element = {<ClassAssignment/>} />
                        <Route path = "/CourseGrades/:id" element = {<CourseGrades/>} />
                        <Route path="*" element={<Navigate to="/StudentDashboard" />} />
                        <Route path = "/ClassMembers/:id" element = {<ClassMembers/>} />

                    </Route>
                        <Route path = "/DashboardHome" element = {<DashboardHome/>} />
                </Route>
                <Route path="*" element={<Navigate to={isAuthenticated ? "/StudentDashboard" : "/login"} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
