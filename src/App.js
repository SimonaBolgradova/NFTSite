import {  Routes , Route, useNavigate} from 'react-router-dom';
import React, { Suspense} from 'react';
import { useEffect, useState } from "react"
import * as cardService from "./services/cardService"
import { AuthContext } from './context/AuthContext';

import { ExplorePage } from './components/pages/ExplorePage';
import { HomePage } from './components/pages/HomePage';
import { DetailsPage } from './components/pages/DetailsPage';
import { CreatePage } from './components/pages/CreatePage';
import { AuthorPage } from './components/pages/AuthorPage';
import { RegisterPage } from './components/pages/RegisterPage';
import { LoginPage } from './components/pages/LoginPage';
import Logout from './components/pages/Logout';
import PrivateRoute from './components/common/PrivateParts';

function App() {
  // const [cards,setCards]= useState([]);
const [auth, setAuth] = useState({});
const navigate = useNavigate();

const userLogin = (authData)=>{
  setAuth(authData)
}
const userLogout = () => {
  setAuth({});
};
  // useEffect(()=>{
  //   cardService.getAll()
  //   .then(result=>{
  //     setCards(result);
  //   })
  // },[])
  return (
    <AuthContext.Provider value = {{user: auth, userLogin, userLogout}}>
    <>
    <Routes>
             
          {/* <Route path="/" exact element={<HomePage card={cards}/>} /> */}
          <Route path="/" element={<HomePage />} />

          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />

          {/* <Route path="/explore" element={<ExplorePage card={cards}/>} /> */}
          <Route path="/explore" element={<ExplorePage />} />
          <Route element={<PrivateRoute />}>
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route path="/explore/:id" element={<DetailsPage/>} />
          <Route path="/create" element={<CreatePage/>} />
          <Route path="/author" element={<AuthorPage/>} />
    </Routes>
    </>
    </AuthContext.Provider>
  );
}

export default App;
