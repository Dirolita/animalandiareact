import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/Home';
import Perros from './pages/perros/Perros';
import Error404 from './pages/error404/Error404';
import { BrowserRouter,Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
< BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/perros' element={<Perros/>}></Route>
      <Route path='/Error404' element={<Error404/>}></Route>
    </Routes>
</ BrowserRouter>
);


