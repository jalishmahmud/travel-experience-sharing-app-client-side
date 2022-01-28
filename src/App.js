import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Login from "./pages/Authentication/Login/Login";
import PrivateRoute from "./pages/Authentication/PrivateRoute/PrivateRoute";
import Register from "./pages/Authentication/Register/Register";
import AddNewPost from "./pages/Dashboard/AddNewPost/AddNewPost";
import AllPosts from "./pages/Dashboard/AddPosts/AllPosts";
import AllUsers from "./pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import UserComments from "./pages/Dashboard/UserComments/UserComments";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardHome />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/add-new-post"
              element={<AddNewPost />}
            ></Route>
            <Route
              path="/dashboard/all-posts"
              element={
                <PrivateRoute>
                  <AllPosts />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/user-comments"
              element={
                <PrivateRoute>
                  <UserComments />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/all-users"
              element={
                <PrivateRoute>
                  <AllUsers />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard/make-admin"
              element={
                <PrivateRoute>
                  <MakeAdmin />
                </PrivateRoute>
              }
            ></Route>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
