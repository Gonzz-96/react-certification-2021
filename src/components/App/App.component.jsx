import React, { useLayoutEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Fortune from '../Fortune';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import KeywordContext, { reducer as keywordReducer } from '../../context/SearchContext';
import ThemeContext, {
  reducer as themeReducer,
  lightTheme,
} from '../../context/ThemeContext';

function App() {
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  const [keyword, keywordDispatch] = useReducer(keywordReducer, 'wizeline');
  const [theme, themeDispatch] = useReducer(themeReducer, lightTheme);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ThemeContext.Provider value={{ theme, dispatch: themeDispatch }}>
            <Switch>
              <Route exact path="/">
                <KeywordContext.Provider value={{ keyword, dispatch: keywordDispatch }}>
                  <HomePage />
                </KeywordContext.Provider>
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Private exact path="/secret">
                <SecretPage />
              </Private>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </ThemeContext.Provider>
          <Fortune />
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
