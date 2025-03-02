// components/profile/SignIn.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import styles from "./SignIn.module.css";

function SignIn({ setCurrentStep }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  const [formData, setFormData] = useState({
    email_phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate credentials against users in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) =>
        (u.phone || u.email === formData.email_phone) &&
        u.password === formData.password
    );

    if (user) {
      dispatch(authActions.loginSuccess(user));
    } else {
      dispatch(authActions.setError("Invalid email/Phone or password"));
    }
  };

  return (
    <div className={styles.signInContainer}>
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email/Phone</label>
          <input
            type="text"
            placeholder="Enter your email or phone"
            value={formData.email_phone}
            onChange={(e) =>
              setFormData({ ...formData, email_phone: e.target.value })
            }
            required
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
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Sign In</button>
      </form>
      <p className={styles.signUpLink}>
        Don't have an account?{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setCurrentStep("signup"); // Navigate to Sign Up
          }}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default SignIn;
