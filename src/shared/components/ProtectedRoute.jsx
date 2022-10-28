import { Navigate } from "react-router-dom";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const AuthRoute = ({ requiresAuth, component }) => {
    //get auth from auth slice (true/false)
    const redirectTo = useMemo(() => (requiresAuth ? "/login" : "/search"), [requiresAuth]);
    const auth = useSelector((state) => state.auth);

    const authorized = useMemo(() => {
        return (!requiresAuth && !auth) || (requiresAuth && auth);
    }, [requiresAuth, auth]);

    if (authorized) {
        return <>{component}</>;
    }
    return <Navigate to={redirectTo} />;
};

// export default ProtectedRoute

export const PrivateRoute = ({ component }) => {
    return <AuthRoute requiresAuth={true} component={component} />;
};

export const PublicRoute = ({ component }) => {
    return <AuthRoute requiresAuth={false} component={component} />;
};
