import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import Loading from "./Loading";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />; // Show spinner while loading
  }

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectedRoute;
