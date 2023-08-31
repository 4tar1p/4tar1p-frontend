import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import UI from 'pages/UI';
import ApiTest from 'pages/ApiTest';
import MyPage from './pages/MyPage';
import BuyingCompletion from './pages/BuyingCompletion';
import ReservationCompletion from './pages/ReservationCompletion';

const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
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
      <Route path="/buyingcompletion" element={<BuyingCompletion />}></Route>
      <Route path="/reservationcompletion" element={<ReservationCompletion />}></Route>
      <Route path="/mypage"element={<MyPage/>}></Route>
    </Routes>
  );
}

export default App;
