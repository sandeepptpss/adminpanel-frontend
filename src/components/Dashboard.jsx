// src/components/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Users from "./Users";
import Products from "./Products";
import AddBlog from "./AddBlog";
import "../assets/dashbord.css";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch logged-in user
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return navigate("/login");

        const res = await fetch("http://localhost:8002/api/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (res.ok) setUser(data);
      } catch (err) {
        console.error("Error fetching profile", err);
      }
    };
    fetchUser();
  }, [navigate]);

  return (
    <div className="admin-panel">
      {/* ✅ Pass only what's needed */}
      <Header
        user={user}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="main-content">
        {activeSection === "home" && (
          <div>
            <h3>Welcome to the Admin Panel</h3>
            <p>Select an option from the sidebar to get started.</p>
          </div>
        )}
        {activeSection === "users" && <Users searchQuery={searchQuery} />}
        {activeSection === "products" && <Products searchQuery={searchQuery} />}
        {activeSection === "blog" && <AddBlog />}
      </main>
    </div>
  );
};

export default Dashboard;
