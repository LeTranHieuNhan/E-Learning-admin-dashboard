import { Routes, Route, BrowserRouter } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import CourseManagement from "./pages/CourseManagement";
import CourseHome from "./pages/CourseHome";
import CourseDetail from "./components/CourseDetail";
import Layout from "./Layout";
import CourseEdit from "./pages/CouseEdit";
import Category from "./pages/Category";
import CreateCourse from "./components/CreateCourse";

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
                    <Route path="/Category" element={<Category />} />
                    <Route path="/CourseEdit/:id" element={<CreateCourse />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
