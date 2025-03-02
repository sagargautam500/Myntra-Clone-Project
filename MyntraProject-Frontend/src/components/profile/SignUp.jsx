// components/profile/SignUp.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/authSlice";
import styles from "./SignUp.module.css";

function SignUp({ setCurrentStep }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    phone: "",
    profilePhoto: null, // For storing the uploaded profile photo
  });

  // const handlePhotoUpload = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setFormData({ ...formData, profilePhoto: file });
  //   }
  // };
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePhoto: reader.result }); // Save Base64 string
      };
      reader.readAsDataURL(file); // Convert file to Base64
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      dispatch(authActions.setError("Passwords do not match"));
      return;
    }

    // Check if user already exists in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.email === formData.email &&u.phone===formData.phone);
    if (userExists) {
      dispatch(authActions.setError("User already exists. Please sign in."));
      return;
    }

    // Save new user to localStorage
    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      address: formData.address,
      phone: formData.phone,
      profilePhoto: formData.profilePhoto    // Store Base64 string
        // ? URL.createObjectURL(formData.profilePhoto)
        // : null, // Store photo URL
    };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));

    // Clear form and navigate to Sign In
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
      phone: "",
      profilePhoto: null,
    });
    dispatch(authActions.setError(""));
    setCurrentStep("signin");
  };

  return (
    <div className={styles.signUpContainer}>
      <h2 className={styles.title}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Profile Photo</label>
          <input type="file" accept="image/*" onChange={handlePhotoUpload} />
        </div>
        <div className={styles.formGroup}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Phone Number</label>
          <input
            type="text"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
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
        <div className={styles.formGroup}>
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      <p className={styles.signInLink}>
              Already have an account?{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentStep("signin"); // Navigate to Sign Up
                }}
              >
                Sign In
              </a>
            </p>
    </div>
  );
}

export default SignUp;
