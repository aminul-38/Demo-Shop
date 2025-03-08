import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const userEmail = JSON.parse(localStorage.getItem("user"));
  return userEmail ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
