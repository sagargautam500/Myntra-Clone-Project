// components/profile/SignIn.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import styles from "./SignIn.module.css";

function SignIn({ setCurrentStep }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials against users in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      dispatch(authActions.loginSuccess(user));
    } else {
      dispatch(authActions.setError("Invalid email or password"));
    }
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className={styles.formGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p className={styles.signupLink}>
        Don't have an account?{" "}
        <a href="#" onClick={(e) => {
          e.preventDefault();
          setCurrentStep("signup"); // Navigate to Sign Up
        }}>
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default SignIn;