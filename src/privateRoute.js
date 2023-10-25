import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({ redirectPath = './main' }) => {
    if (!localStorage.getItem('token')) {
        return <Navigate to={redirectPath} replace />
    };
    return <Outlet />
};

export default PrivateRoute;