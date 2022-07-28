import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token")) || null;

  if (!token) {
    //redireccionar al login
    return <Navigate to="/login" />;
  } else {
    // ir a la pagina del children
    return children;
  }
};

export default ProtectedRoutes;
