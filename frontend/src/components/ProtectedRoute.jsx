import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ user, redirectPath = "/login", children }) {
  if (!user) return <Navigate to={redirectPath} replace />;

  return children ? children : <Outlet />;
}

export default ProtectedRoute;
