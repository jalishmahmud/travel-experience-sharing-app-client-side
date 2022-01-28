import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./DashboardHome.css";
const DashboardHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h3>
        Welcome <span className="welcome-user">{user.displayName}</span>
      </h3>

      <div>
        <div class="cards">
          <div class="card-single">
            <div>
              <h1>54</h1>
              <span>New User</span>
            </div>
            <div>
              <span class="las la-user-friends"></span>
            </div>
          </div>

          <div class="card-single">
            <div>
              <h1>79</h1>
              <span>Pending Post</span>
            </div>
            <div>
              <span class="las la-clipboard"></span>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>124</h1>
              <span>Visitor Today</span>
            </div>
            <div>
              <span class="las la-eye"></span>
            </div>
          </div>
          <div class="card-single">
            <div>
              <h1>36</h1>
              <span>Comments</span>
            </div>
            <div>
              <span class="las la-comments"></span>
            </div>
          </div>
        </div>
        <div class="recent-grid">
          <div class="projects">
            <div class="card">
              <div class="card-header dashboard">
                <h3>Recent Post</h3>
                <button>
                  All Post <span class="las la-arrow-right"></span>
                </button>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table width="100%">
                    <thead>
                      <tr>
                        <td>Post Title</td>
                        <td>Status</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status purple"></span>
                          Approved
                        </td>
                        <td>
                          <button className="pink">Pending</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status pink"></span>
                          Pending
                        </td>
                        <td>
                          <button className="purple">Approve</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status pink"></span>
                          Pending
                        </td>
                        <td>
                          <button className="purple">Approve</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status pink"></span>
                          Pending
                        </td>
                        <td>
                          <button className="purple">Approve</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status pink"></span>
                          Pending
                        </td>
                        <td>
                          <button className="purple">Approve</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status pink"></span>
                          Pending
                        </td>
                        <td>
                          <button className="purple">Approve</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Is was a wonderful experience at Coxes Bazar</td>

                        <td>
                          <span class="status pink"></span>
                          Pending
                        </td>
                        <td>
                          <button className="purple">Approve</button>
                          <button>Edit</button>
                          <button className="orange">Delete</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="customers">
            <div class="card">
              <div class="card-header dashboard">
                <h3>New User</h3>
                <button>
                  See all <span class="las la-arrow-right"></span>
                </button>
              </div>

              <div class="card-body">
                <div class="customer">
                  <div class="info">
                    <img
                      src={user.photoURL}
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img src="img/user.png" width="40px" height="40px" alt="" />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img src="img/user.png" width="40px" height="40px" alt="" />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img src="img/user.png" width="40px" height="40px" alt="" />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img src="img/user.png" width="40px" height="40px" alt="" />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img src="img/user.png" width="40px" height="40px" alt="" />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
                <div class="customer">
                  <div class="info">
                    <img src="img/user.png" width="40px" height="40px" alt="" />
                    <div>
                      <h4>Jalish M. Mahmud</h4>
                      <small>Web Developer</small>
                    </div>
                  </div>
                  <div class="contact">
                    <span class="las la-user-circle"></span>
                    <span class="las la-comment"></span>
                    <span class="las la-phone"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
