import { LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) { return <Box sx={{ width: '100%' }}><LinearProgress color="secondary" /></Box> }
    if (user.email === "admin@admin.com") {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;