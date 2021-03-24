import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../../context/AuthContext';
import loginApi from '../../utils/login';
import { FormContainer } from './styled';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { dispatch: authDispatch } = useContext(AuthContext);

  return (
    <React.Fragment>
      <FormContainer>
        <form
          onSubmit={(e) => {
            loginApi(user, password)
              .then((value) => {
                authDispatch({ type: 'LOGIN', payload: value });
                history.push('/');
              })
              .catch((e) => {
                console.log(e);
              });
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
