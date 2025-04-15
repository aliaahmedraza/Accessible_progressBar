import React from 'react'
import {Routes ,Route } from "react-router-dom";
import Home from '../page/Home/Home';
import DashBoard from '../page/DashBoard/DashBoard';
import PageNotFound from '../page/PageNotFound/PageNotFound';
import AuthCallback from '../page/AuthCallBack/AuthCallBack';
const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/callback" element={<AuthCallback />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes;
