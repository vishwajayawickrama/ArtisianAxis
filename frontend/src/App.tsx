import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCollections from "./pages/AdminCollections";
import Test from "./pages/Test";
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        
        {/* Admin routes wrapped in AdminLayout */}
        <Route path="/admin/*" element={
          <AdminLayout>
            <Routes>
              <Route path="login" element={<AdminLogin />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="collections" element={<AdminCollections />} />
              
            </Routes>
          </AdminLayout>
        } />
      </Routes>
    </Router>
  )
}

export default App;