import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../actions/authActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { user } = auth;

  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return (
    <div className="container text-center mt-15">
      <div className="row">
        <div className="col-sm-12">
          <h4>
            Hey there, <b className="name-lable">{user.name.split(" ")[0]}</b>
            <p className="mt-4">
              You are logged into a full-stack{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
            </p>
          </h4>
          <button
            onClick={onLogout}
            className="btn btn-large btn-light hoverable font-weight-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default Dashboard;
