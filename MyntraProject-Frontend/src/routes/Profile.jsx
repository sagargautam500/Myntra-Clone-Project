// routes/Profile.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import SignIn from "../components/profile/SignIn";
import SignUp from "../components/profile/SignUp";
import ProfileDetails from "../components/profile/ProfileDetails";

function Profile() {
  const [currentStep, setCurrentStep] = useState("signin"); // Tracks the current step
  const user = useSelector((state) => state.auth.user);

  // If the user is logged in, show the profile details
  if (user) {
    return <ProfileDetails />;
  }

  // Render the appropriate component based on the current step
  return (
    <div>
      {currentStep === "signin" && (
        <SignIn setCurrentStep={setCurrentStep} />
      )}
      {currentStep === "signup" && (
        <SignUp setCurrentStep={setCurrentStep} />
      )}
    </div>
  );
}

export default Profile;