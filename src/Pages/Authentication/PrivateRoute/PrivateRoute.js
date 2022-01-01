import React from 'react';
import { Box, LinearProgress } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box> }

    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default PrivateRoute;