import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user?.email) {
    return children;
  }
  return <Navigate to={'login'}></Navigate>;
};

export default PrivateRoute;
