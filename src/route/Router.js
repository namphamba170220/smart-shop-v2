import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from '../view/Login/login';

function Router() {
  return (
    <Routes>
        <Route exact path='/' element={<Login/>}/>
    </Routes>
  );
};

export default Router;