import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router';
import AuthContext from '../../context/AuthContext';

const ProtectedRoute = (props) => {
  const { auth } = useContext(AuthContext);

  console.log('Protected route');
  console.log(JSON.stringify(auth));
  let content;

  if (auth) {
    content = <Route {...props} />;
  } else {
    content = <Redirect to="/login" />;
  }

  return content;
};

export default ProtectedRoute;
