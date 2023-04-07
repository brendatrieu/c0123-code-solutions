/* eslint-disable no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import AppContext from './components/AppContext';
import NavBar from './components/NavBar';
import Auth from './pages/AuthPage';
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import './App.css';

const tokenKey = 'react-context-jwt';

export default function App() {
  const [user, setUser] = useState();
  const [isAuthorizing, setIsAuthorizing] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem(tokenKey);
    const user = token ? jwtDecode(token) : null;
    setUser(user);
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

  function handleSignIn(result) {
    const { user, token } = result;
    localStorage.setItem(tokenKey, token);
    setUser(user);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
  }

  const contextValue = { user, handleSignIn, handleSignOut };

  return (
    <AppContext.Provider value={ contextValue }>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="sign-in" element={<Auth action="sign-in" />} />
          <Route path="sign-up" element={<Auth action="sign-up" />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
