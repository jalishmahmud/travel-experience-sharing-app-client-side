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
            <span>Travel Experience</span>
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
                to="/dashboard/add-new-post"
                class={activeClass === "addNewPost" ? "active" : ""}
                onClick={() => handleActiveClass("addNewPost")}
              >
                <span class="las la-plus-circle"></span>{" "}
                <span>Add New Post</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-posts"
                class={activeClass === "allPosts" ? "active" : ""}
                onClick={() => handleActiveClass("allPosts")}
              >
                <span class="las la-layer-group"></span> <span>All Posts</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/user-comments"
                class={activeClass === "userComments" ? "active" : ""}
                onClick={() => handleActiveClass("userComments")}
              >
                <span class="las la-comments"></span> <span>User Comments</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/all-users"
                class={activeClass === "allUsers" ? "active" : ""}
                onClick={() => handleActiveClass("allUsers")}
              >
                <span class="las la-users"></span> <span>All Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/make-admin"
                class={activeClass === "makeAdmin" ? "active" : ""}
                onClick={() => handleActiveClass("makeAdmin")}
              >
                <span class="las la-user-circle"></span> <span>Make Admin</span>
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
              {admin ? <small>Super Admin</small> : <span>General User</span>}
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
