import React from "react";
import { Navigate } from "react-router-dom";

const RequirAuth = ({ children }: { children: React.ReactNode }) => {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
        return <Navigate to={"/login"} replace />;
    }
    return children;
};

export default RequirAuth;
