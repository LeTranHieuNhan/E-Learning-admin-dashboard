import {Routes, Route, BrowserRouter} from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import CourseManagement from "./pages/CourseManagement";
import CourseEdit from "./pages/CouseEdit";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/StudentDashboard" element={<StudentDashboard/>}/>
                <Route path="/" element={<StudentDashboard/>}/>
                <Route path="/CourseManagement" element={<CourseManagement/>}/>
                <Route path="/CourseEdit" element={<CourseEdit/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
