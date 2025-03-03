import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidenav";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Suggestions from "./pages/Suggestions";
import Categories from "./pages/Categories";
import Platforms from "./pages/Platforms";
import ChangePassword from "./pages/ChangePassword";
import StarDetail from "./pages/stardetail"; // Star detail page
import SetPlatforms from "./pages/setPlatforms"; // New SetPlatforms page
import AddStar from "./pages/addstar"; // New Add Star page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Dashboard />} />
          <Route path="suggestions" element={<Suggestions />} />
          <Route path="categories" element={<Categories />} />
          <Route path="platforms" element={<Platforms />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="star-detail" element={<StarDetail />} />
          <Route path="set-platforms" element={<SetPlatforms />} />
          <Route path="add-star" element={<AddStar />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
