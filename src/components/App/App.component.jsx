import React, { useLayoutEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import KeywordContext, { reducer as keywordReducer } from '../../context/SearchContext';
import ThemeContext, {
  reducer as themeReducer,
  lightTheme,
} from '../../context/ThemeContext';
import Header from '../Header';

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
            <KeywordContext.Provider value={{ keyword, dispatch: keywordDispatch }}>
              <div>
                <Header />
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </KeywordContext.Provider>
          </ThemeContext.Provider>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
