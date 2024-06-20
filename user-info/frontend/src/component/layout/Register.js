import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});

  const auth = useSelector((state) => state.auth);
  const errorState = useSelector((state) => state.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push("/dashboard");
    }
  }, [auth, history]);

  useEffect(() => {
    if (errorState) {
      setErrors(errorState);
    }
  }, [errorState]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password2: formData.password2,
    };

    dispatch(registerUser(newUser, history));
  };

  return (
    <div className="form-box">
      <form className="signup-form" onSubmit={onSubmit}>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-circle-left"></i> Back to Home
          </Link>
        </div>

        <h2>Register</h2>
        <hr />
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={formData.name}
            onChange={onChange}
            className={classnames("form-control", {
              invalid: errors.name,
            })}
          />
          <span className="red-text">{errors.name}</span>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={onChange}
            className={classnames("form-control", {
              invalid: errors.email,
            })}
          />
          <span className="red-text">{errors.email}</span>
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={onChange}
            className={classnames("form-control", {
              invalid: errors.password,
            })}
          />
          <span className="red-text">{errors.password}</span>
        </div>

        <div className="form-group">
          <input
            type="password"
            id="password2"
            placeholder="Confirm Password"
            value={formData.password2}
            onChange={onChange}
            className={classnames("form-control", {
              invalid: errors.password2,
            })}
          />
          <span className="red-text">{errors.password2}</span>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Sign Up
          </button>
        </div>
        <div className="text-center">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </form>
    </div>
  );
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Register;
