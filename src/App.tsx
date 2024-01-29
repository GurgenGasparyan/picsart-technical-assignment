import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { Header, Loader } from './components';
import { withThemeProvider } from './context';
import { WrapperStyled } from './styles';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto;
  }
`;

const PostsPage = React.lazy(() => import('./pages/home/posts'));
const UserDetailsPage = React.lazy(() => import('./pages/user-details/user-details'));
const UsersListPage = React.lazy(() => import('./pages/users/users-list'));

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <WrapperStyled>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loader />}>
                <PostsPage />
              </React.Suspense>
            }
          />
          <Route
            path="/users/:id"
            element={
              <React.Suspense fallback={<Loader />}>
                <UserDetailsPage />
              </React.Suspense>
            }
          />
          <Route
            path="/users"
            element={
              <React.Suspense fallback={<Loader />}>
                <UsersListPage />
              </React.Suspense>
            }
          />
        </Routes>
      </WrapperStyled>
    </BrowserRouter>
  );
};

export default withThemeProvider(App);
