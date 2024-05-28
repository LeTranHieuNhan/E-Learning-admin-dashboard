import { Routes, Route, BrowserRouter } from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

