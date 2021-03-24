import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import AuthContext from '../../context/AuthContext';
import Login from '../../pages/Login';

const ProtectedRoute = (props) => {
  const { auth } = useContext(AuthContext);

  let content;
  if (auth) {
    content = <Route {...props} />;
  } else {
    content = <Redirect to="/login" />;
  }

  return content;
};

export default ProtectedRoute;
