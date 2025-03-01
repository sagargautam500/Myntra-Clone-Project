// components/profile/ProfileDetails.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import styles from "./ProfileDetails.module.css";

function ProfileDetails() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.title}>User Profile</h2>
      {user.profilePhoto && (
        <div className={styles.profilePhoto}>
          <img src={user.profilePhoto} alt="Profile" />
        </div>
      )}
      <p className={styles.detail}>Name: {user.name}</p>
      <p className={styles.detail}>Email: {user.email}</p>
      <p className={styles.detail}>Address: {user.address}</p>
      <p className={styles.detail}>Phone: {user.phone}</p>
      <button className={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default ProfileDetails;