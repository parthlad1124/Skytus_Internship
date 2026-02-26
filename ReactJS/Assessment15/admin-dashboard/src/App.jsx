import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";

// Lazy load Users page
const Users = lazy(() => import("./pages/Users"));

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 min-h-screen">
          {/* Header */}
          <Header />

          {/* Page content */}
          <Suspense
            fallback={
              <div className="p-6 text-center text-lg font-semibold">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;