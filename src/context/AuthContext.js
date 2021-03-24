import React from 'react';

const AuthContext = React.createContext({});

const authDispatcher = (state, { type, payload }) => {
  switch (type) {
    case 'LOGIN':
      return payload;
    case 'LOGOUT':
      return null;
    default:
      throw new Error('Login action not supported');
  }
};

export default AuthContext;

export { authDispatcher };
