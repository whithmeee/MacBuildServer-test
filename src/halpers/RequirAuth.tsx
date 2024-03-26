import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../redux/store";

const RequirAuth = ({ children }: { children: React.ReactNode }) => {
    const jwt = useSelector((state: RootState) => state.user.token);
    if (!jwt) {
        return <Navigate to={"/login"} replace />;
    }
    return children;
};

export default RequirAuth;
