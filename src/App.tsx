import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { Header, Loader } from './components';
import { withThemeProvider } from './context';
import { GlobalStyles, WrapperStyled } from './styles';

const PostsPage = React.lazy(() => import('./pages/home/posts'));
const UserDetailsPage = React.lazy(() => import('./pages/user-details/user-details'));
const UsersListPage = React.lazy(() => import('./pages/users/users-list'));

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
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
