import { Routes, Route, BrowserRouter } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import CourseManagement from "./pages/CourseManagement";
import CourseHome from "./pages/CourseHome";
import CourseDetail from "./components/CourseDetail";
import Layout from "./Layout";
import CourseEdit from "./pages/CouseEdit";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<StudentDashboard />} />
                    <Route path="StudentDashboard" element={<StudentDashboard />} />
                    <Route path="CourseManagement" element={<CourseManagement />} />
                    <Route path="CourseEdit" element={<CourseEdit />} />
                    <Route path="CourseHome/:courseName" element={<CourseHome />} />
                    <Route path="CourseDetail/:courseName" element={<CourseDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
