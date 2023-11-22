import React from "react";
import { Routes, Route } from "react-router-dom";

import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";

import {
  ROUTE_ROOT,
  ROUTE_MOVIES,
  ROUTE_SAVED_MOVIES,
  ROUTE_PROFILE,
  ROUTE_SIGNIN,
  ROUTE_SIGNUP,
  ROUTE_404,
} from '../../constant/routes';

import { UserContext } from "../../contexts/UserContext";

const user = {
  name: 'Виталий',
  email: 'pochta@yandex.ru',
  isAuth: true
};

function App() {
  return (
    <UserContext.Provider value={user}>
      <Routes>
        <Route path={ROUTE_ROOT} element={<Main/>} />
        <Route path={ROUTE_MOVIES} element={<Movies />} />
        <Route path={ROUTE_SAVED_MOVIES} element={<SavedMovies />} />
        <Route path={ROUTE_PROFILE} element={<Profile />} />
        <Route path={ROUTE_SIGNIN} element={<Register />} />
        <Route path={ROUTE_SIGNUP} element={<Login />} />
        <Route path={ROUTE_404} element={<NotFound />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
