import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Dashboard.css";
const Dashboard = () => {
  const [activeClass, setActiveClass] = useState("Dashboard");
  const { admin, user, logOut } = useAuth();

  const handleActiveClass = (menuName) => {
    setActiveClass(menuName);
  };

  return (
    <div className="dashboard">
      <input type="checkbox" id="nav-toggle" />
      <div class="sidebar">
        <div class="sidebar-brand">
          <h2>
            <span class="lab la-accusoft"></span>
            <span>MathDataSci</span>
          </h2>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li>
              <Link
                to="/dashboard"
                class={activeClass === "Dashboard" ? "active" : ""}
                onClick={() => handleActiveClass("Dashboard")}
              >
                <span class="las la-igloo"></span> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myCourse"
                class={activeClass === "myCourse" ? "active" : ""}
                onClick={() => handleActiveClass("myCourse")}
              >
                <span class="las la-users"></span> <span>My Course</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class={activeClass === "Students" ? "active" : ""}
                onClick={() => handleActiveClass("Students")}
              >
                <span class="las la-users"></span> <span>Students</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class={activeClass === "Projects" ? "active" : ""}
                onClick={() => handleActiveClass("Projects")}
              >
                <span class="las la-clipboard-list"></span>
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allEnrolledCourses"
                class={activeClass === "allEnrolled" ? "active" : ""}
                onClick={() => handleActiveClass("allEnrolled")}
              >
                <span class="las la-shopping-bag"></span>{" "}
                <span>All Enrolled</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/makeAdmin"
                class={activeClass === "makeAdmin" ? "active" : ""}
                onClick={() => handleActiveClass("makeAdmin")}
              >
                <span class="las la-user-circle"></span> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class={activeClass === "Instructor" ? "active" : ""}
                onClick={() => handleActiveClass("Instructor")}
              >
                <span class="las la-receipt"></span> <span>Instructor</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                class={activeClass === "Task" ? "active" : ""}
                onClick={() => handleActiveClass("Task")}
              >
                <span class="las la-clipboard-list"></span> <span>Task</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span class="las la-home"></span> <span>Back To Home</span>
              </Link>
            </li>
            <li>
              <Link onClick={logOut} to="/">
                <span class="las la-sign-out-alt"></span> <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-content">
        <header className="dashboard">
          <h2>
            <label for="nav-toggle">
              <span class="las la-bars"></span>
            </label>
            Dashboard
          </h2>
          <div class="search-wrapper">
            <span class="las la-search"></span>
            <input type="search" placeholder="Search Here" />
          </div>
          <div class="user-wrapper">
            <img src={user.photoURL} alt="" width="30px" height="30px" />
            <div>
              <h4>{user && user.displayName}</h4>
              {admin ? <small>Super Admin</small> : <span>Student</span>}
            </div>
          </div>
        </header>
        <main className="dashboard">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
