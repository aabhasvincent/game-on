import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
	const localStorageToken = localStorage.getItem("user");
	return true ? <Outlet /> : <Navigate to="/names"  replace />;
};

export default ProtectedRoutes;