import { Routes, Route, BrowserRouter } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import CourseManagement from "./pages/CourseManagement";
import CourseEdit from "./pages/CouseEdit";
import CourseHome from "./pages/CourseHome";
import CourseDetail from "./components/CourseDetail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/CourseManagement" element={<CourseManagement />} />
        <Route path="/CourseEdit" element={<CourseEdit />} />
        <Route path="/CourseHome/:courseName" element={<CourseHome />} />
        <Route path="/CourseDetail/:courseName" element={<CourseDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
