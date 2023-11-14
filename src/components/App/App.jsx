import React from "react";

import Main from "../../pages/Main/Main";
import Movies from "../../pages/Movies/Movies";
import NotFound from "../../pages/NotFound/NotFound";
import SavedMovies from "../../pages/SavedMovies/SavedMovies";
import Profile from "../../pages/Profile/Profile";
import Register from "../../pages/Register/Register";

import { UserContext } from "../../contexts/UserContext";

const user = {
  name: 'Виталий',
  email: 'pochta@yandex.ru'
};

function App() {
  return (
    <UserContext.Provider value={user}>
      {/* <Main /> */}
      {/* <Movies /> */}
      {/* <NotFound /> */}
      {/* <SavedMovies /> */}
      {/* <Profile /> */}
      <Register />
    </UserContext.Provider>
  );
}

export default App;
