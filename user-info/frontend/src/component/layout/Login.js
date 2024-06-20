import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    const { id, value } = e.target;
    if (id === "email") setEmail(value);
    if (id === "password") setPassword(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(loginUser(userData));
  };

  return (
    <div className="form-box">
      <form className="login-form" onSubmit={onSubmit}>
        <h2>Login</h2>
        <hr />
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            value={email}
            onChange={onChange}
            className={classnames("form-control", {
              invalid: errors.email || errors.emailnotfound,
            })}
          />
          <span className="red-text">
            {errors.email}
            {errors.emailnotfound}
          </span>
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={onChange}
            className={classnames("form-control", {
              invalid: errors.password || errors.passwordincorrect,
            })}
          />
          <span className="red-text">
            {errors.password}
            {errors.passwordincorrect}
          </span>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            Login
          </button>
        </div>
        <div className="text-center">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Login;
