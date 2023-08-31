import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import UI from 'pages/UI';
import ApiTest from 'pages/ApiTest';
import Buying from 'pages/Buying';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/buying" element={<Buying />} />
      {/******** Example ********/}
      {/* <Route path="/login" element={<Login />} />
      <Route
        path="/tasteCard"
        element={<TasteCard imgSrc={'/room1.png'} hashtags={hashtags} />}
      />
      <Route path="/home" element={<Home locations={['동북아', '동남아']} />} />
      <Route path="/stay/:id/detail" element={<DetailStay />} /> */}
      <Route path="/ui" element={<UI />} />
      <Route path="/api" element={<ApiTest />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
