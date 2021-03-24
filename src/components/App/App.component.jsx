import React, { useEffect, useReducer } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import KeywordContext, { reducer as keywordReducer } from '../../context/SearchContext';
import SearchVideosContext, {
  reducer as searchVideosReducer,
} from '../../context/SearchVideosContext';
import ThemeContext, {
  reducer as themeReducer,
  lightTheme,
} from '../../context/ThemeContext';
import AuthContext, { authDispatcher } from '../../context/AuthContext';
import Header from '../Header';
import Routes from '../Routes/Routes.component';
import { storage } from '../../utils/storage';

function App() {
  const [theme, themeDispatch] = useReducer(themeReducer, lightTheme);
  const [keyword, keywordDispatch] = useReducer(keywordReducer, 'wizeline');
  const [searchVideos, searchVideosDispatch] = useReducer(searchVideosReducer, []);
  const [auth, authDispatch] = useReducer(authDispatcher, null);

  useEffect(() => {
    const favorites = storage.get('favorites');

    if (!favorites) {
      storage.set('favorites', []);
    }
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <ThemeContext.Provider value={{ theme, dispatch: themeDispatch }}>
          <KeywordContext.Provider value={{ keyword, dispatch: keywordDispatch }}>
            <SearchVideosContext.Provider
              value={{ searchVideos, dispatch: searchVideosDispatch }}
            >
              <AuthContext.Provider value={{ auth, dispatch: authDispatch }}>
                <Header />
                <Routes />
              </AuthContext.Provider>
            </SearchVideosContext.Provider>
          </KeywordContext.Provider>
        </ThemeContext.Provider>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
