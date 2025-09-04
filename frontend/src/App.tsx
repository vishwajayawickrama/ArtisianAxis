import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminLayout from "./pages/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard";
import AdminCollections from "./pages/AdminCollections";
import AdminProducts from './pages/AdminProducts';
import AdminArtist from './pages/AdminArtist';
import Test from "./pages/Test";
import './index.css'
import Collections from "./pages/Collections";

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
              <Route path="artists" element={<AdminArtist />} />
              <Route path="products" element={<AdminProducts />} />
            </Routes>
          </AdminLayout>
        } />

        {/* Normal Routes */}
        <Route path="/collections" element={<Collections />} />
      </Routes>
    </Router>
  )
}

export default App;