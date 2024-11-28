import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.type === "admin" ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
