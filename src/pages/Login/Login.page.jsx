import React, { useState } from 'react';
import loginApi from '../../utils/login';
import { FormContainer } from './styled';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <React.Fragment>
      <FormContainer>
        <form
          onSubmit={(e) => {
            console.log(`${user} ${password}`);
            loginApi(user, password).then((value) => {});
            e.preventDefault();
          }}
        >
          <label for="user">User: </label>
          <input
            id="user"
            style={{ width: '200px' }}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <br />
          <label for="password">Password: </label>
          <input
            id="password"
            style={{ width: '200px' }}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <button type="submit">Equis de</button>
        </form>
      </FormContainer>
    </React.Fragment>
  );
};

export default Login;
