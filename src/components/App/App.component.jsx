import React, { useLayoutEffect, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import KeywordContext, { reducer as keywordReducer } from '../../context/SearchContext';
import SearchVideosContext, {
  reducer as searchVideosReducer,
} from '../../context/SearchVideosContext';
import ThemeContext, {
  reducer as themeReducer,
  lightTheme,
} from '../../context/ThemeContext';
import Header from '../Header';
import VideoDetail from '../../pages/VideoDetail';

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

  const [theme, themeDispatch] = useReducer(themeReducer, lightTheme);
  const [keyword, keywordDispatch] = useReducer(keywordReducer, 'wizeline');
  const [searchVideos, searchVideosDispatch] = useReducer(searchVideosReducer, []);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <ThemeContext.Provider value={{ theme, dispatch: themeDispatch }}>
            <KeywordContext.Provider value={{ keyword, dispatch: keywordDispatch }}>
              <SearchVideosContext.Provider
                value={{ searchVideos, dispatch: searchVideosDispatch }}
              >
                <div>
                  <Header />
                  <Switch>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route path="/video/:id">
                      <VideoDetail />
                    </Route>
                    <Route path="*">
                      <NotFound />
                    </Route>
                  </Switch>
                </div>
              </SearchVideosContext.Provider>
            </KeywordContext.Provider>
          </ThemeContext.Provider>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
